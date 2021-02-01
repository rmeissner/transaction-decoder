import React, { useCallback, useState } from 'react';
import { TextField } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles, withStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';
import axios from 'axios';
import { FunctionFragment, Interface, Result } from '@ethersproject/abi';
import { BigNumber } from "@ethersproject/bignumber";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {},
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    flexDirection: "column"
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles(() => ({
  content: {
    padding: "4px"
  },
  input: {
    width: "100%"
  },
  values: {
    padding: "4px 16px 4px 16px",
    display: "block",
    wordBreak: "break-all",
  }
}));

interface DecodedValue {
  label?: string,
  value: any,
  decoded?: Decoded
}

interface Decoded {
  label: string,
  params: DecodedValue[]
}

const signatureLookupUrl = "https://www.4byte.directory/api/v1/signatures/?hex_signature="
const defaultInterface = new Interface([])

const decodeData = async (data: string): Promise<Decoded | undefined> => {
  if (!data || data.length == 0) return undefined
  const signature = data.slice(0, 10)
  const lookup = await axios.get(signatureLookupUrl + signature)
  if (lookup.data.results.length == 0) return undefined
  const functionSignature = lookup.data.results[0].text_signature
  const functionFragment = FunctionFragment.fromString(functionSignature)
  const decoded = defaultInterface.decodeFunctionData(functionFragment, data)
  const params = await processDecoded(functionFragment, decoded)
  return {
    label: functionSignature,
    params
  }
}

const processDecoded = async (functionFragment: FunctionFragment, decoded: Result): Promise<DecodedValue[]> => {
  const sigHash = Interface.getSighash(functionFragment).toLocaleLowerCase()
  if (sigHash === "0x8d80ff0a" && decoded.length == 1) {
    try { return [await decodeMultisend(decoded[0])] } catch (e) { console.error(e) }
  }
  if (sigHash === "0x6a761202" && decoded.length == 10) {
    try { return [await decodeSafeTransaction(decoded)] } catch (e) { console.error(e) }
  }
  return decoded.map((param) => { return { value: param } })
}

const decodeMultisend = async (multisendData: string): Promise<DecodedValue> => {
  let index = 2;
  const params: DecodedValue[] = []
  while (index < multisendData.length) {
    const operation = parseInt(multisendData.slice(index, index += 2), 16)
    const to = "0x" + multisendData.slice(index, index += 40)
    const value = BigNumber.from("0x" + multisendData.slice(index, index += 64)).toHexString()
    const dataLength = parseInt(multisendData.slice(index, index += 64), 16) * 2
    const data = "0x" + multisendData.slice(index, index += dataLength)
    params.push({
      value: undefined,
      decoded: {
        label: "Transaction " + (params.length + 1),
        params: [
          { label: "Operation", value: operation },
          { label: "To", value: to },
          { label: "Value", value: value },
          { label: "Data", value: data, decoded: await decodeData(data) }
        ]
      }
    })
  }
  return {
    value: multisendData,
    decoded: {
      label: "Multisend transactions",
      params
    }
  }
}

const decodeSafeTransaction = async (decoded: Result): Promise<DecodedValue> => {
  return {
    value: undefined,
    decoded: {
      label: "Safe transaction",
      params: [
        { label: "To", value: decoded[0] },
        { label: "Value", value: decoded[1] },
        { label: "Data", value: decoded[2], decoded: await decodeData(decoded[2]) }
        { label: "Operation", value: decoded[3] },
        { label: "SafeTxGas", value: decoded[4] },
        { label: "BaseGas", value: decoded[5] },
        { label: "GasPrice", value: decoded[6] },
        { label: "GasToken", value: decoded[7] },
        { label: "RefundReceiver", value: decoded[8] },
        { label: "Signatures", value: decoded[9] },
      ]
    }
  }
}

const renderParams = (classes: any, decoded: Decoded | undefined): any => {
  if (!decoded) return (<></>)
  return (<Accordion >
    <AccordionSummary>{decoded.label}</AccordionSummary>
    <AccordionDetails>
      {decoded.params.map(param => (<>
        {param.label !== undefined && (
          <b>{param.label}</b>
        )}
        {param.value !== undefined && (
          <span className={classes.values}>
            {param.value.toString()}
          </span>
        )}
        {renderParams(classes, param.decoded)}
      </>)
      )}
    </AccordionDetails>
  </Accordion >)
}

function App() {
  const classes = useStyles();
  const [txData, setTxData] = useState("")
  const [decoded, setDecoded] = useState<Decoded | undefined>(undefined)
  const decodeTxData = useCallback(async (data: string) => {
    setTxData(data)
    console.log({ data })
    try {
      setDecoded(await decodeData(data))
    } catch (e) {
      setDecoded(undefined)
      console.error(e)
    }
  }, [])
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(() => createMuiTheme({
    palette: {
      type: prefersDarkMode ? 'dark' : 'light',
      primary: blue,
    },
  }), [prefersDarkMode])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.content}>
        <h1>
          Transaction decoder
        </h1>
        <TextField color="primary" className={classes.input} value={txData} onChange={(e) => { decodeTxData(e.target.value) }} />
        <br />
        <br />
        {renderParams(classes, decoded)}
      </div>
    </ThemeProvider>
  );
}

export default App;
