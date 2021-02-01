import React, { useCallback, useState } from 'react';
import { TextField } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import { DecodedParam } from './DecodedData';
import { DecodedValue, loadSignatures } from './utils/decoding';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "4px"
  },
  input: {
    width: "100%"
  }
}));

function App() {
  const classes = useStyles();
  const [txData, setTxData] = useState("")
  const [dataInfo, setDataInfo] = useState<DecodedValue | undefined>(undefined)
  const loadDataInfo = useCallback(async (data: string) => {
    setTxData(data)
    try {
      const signatures = await loadSignatures(data)
      setDataInfo({
        value: data,
        signatures
      })
    } catch (e) {
      setDataInfo(undefined)
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
          Transaction decoder via <Link href="https://www.4byte.directory" color="inherit" target="_blank">4byte.directory</Link>
        </h1>
        <TextField placeholder="Enter transaction data (e.g. 0x6a7612020000...)" color="primary" className={classes.input} value={txData} onChange={(e) => { loadDataInfo(e.target.value) }} />
        <br />
        <br />
        { dataInfo && <DecodedParam param={dataInfo} hideValue={true} /> }
      </div>
    </ThemeProvider>
  );
}

export default App;
