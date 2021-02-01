import React, { useCallback, useState } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles, withStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import { DecodedParam } from './DecodedData';
import { DecodedValue, loadSignatures } from './utils/decoding';

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

function App() {
  const classes = useStyles();
  const [txData, setTxData] = useState("")
  const [dataInfo, setDataInfo] = useState<DecodedValue | undefined>(undefined)
  const loadDataInfo = useCallback(async (data: string) => {
    setTxData(data)
    console.log({ data })
    try {
      const signatures = await loadSignatures(data)
      console.log({signatures})
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
          Transaction decoder
        </h1>
        <TextField color="primary" className={classes.input} value={txData} onChange={(e) => { loadDataInfo(e.target.value) }} />
        <br />
        <br />
        { dataInfo && <DecodedParam param={dataInfo} hideValue={true} /> }
      </div>
    </ThemeProvider>
  );
}

export default App;
