import React, { useCallback, useEffect, useState } from 'react';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Decoded, DecodedValue, decodeData } from './utils/decoding';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        flexDirection: "column"
    },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    values: {
        padding: "4px 16px 4px 16px",
        display: "block",
        wordBreak: "break-all",
    }
}));

interface Props {
    decoded: Decoded,
}

export const DecodedParam: React.FC<{ param: DecodedValue, hideValue?: boolean }> = ({ param, hideValue }) => {
    const classes = useStyles()
    const [decodedData, setDecodedData] = useState(param.decoded)
    const [selectedSignature, setSelectedSignature] = useState(param.signatures && param.signatures[0])
    const loadDecodedData = useCallback(async (selectedSignature: string) => {
        try {
            setDecodedData(await decodeData(selectedSignature, param.value))
        } catch (e) {
            setDecodedData(undefined)
            console.error(e)
        }
    }, [param.value, setDecodedData])
    const selectSignature = useCallback(async (event: React.ChangeEvent<{ value: unknown }>) => {
        const selectedSignature = event.target.value as string
        setSelectedSignature(selectedSignature)
        await loadDecodedData(selectedSignature)
    }, [setSelectedSignature, loadDecodedData])
    useEffect(() => {
        // Intial load
        if (decodedData || !selectedSignature) return
        loadDecodedData(selectedSignature)
    }, [decodedData, selectedSignature, loadDecodedData])
    return (<>
        {param.label !== undefined && (
            <b>{param.label}</b>
        )}
        {param.value !== undefined && !hideValue && (
            <span className={classes.values}>
                {param.value.toString()}
            </span>
        )}
        {param.signatures && param.signatures.length > 1 && (
            <FormControl className={classes.formControl}>
                <InputLabel>Signature</InputLabel>
                <Select value={selectedSignature} onChange={selectSignature}>
                    {param.signatures.map((sig) => (<MenuItem value={sig}>{sig}</MenuItem>))}
                </Select>
            </FormControl>
        )}
        { decodedData && <DecodedData decoded={decodedData} />}
    </>)
}

const DecodedData: React.FC<Props> = ({ decoded }) => {
    return (<Accordion >
        <AccordionSummary>{decoded.label}</AccordionSummary>
        <AccordionDetails>
            {decoded.params.map(param => (<DecodedParam param={param} />)
            )}
        </AccordionDetails>
    </Accordion >);
}

export default DecodedData;
