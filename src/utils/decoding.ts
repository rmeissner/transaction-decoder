import axios from 'axios';
import { FunctionFragment, Interface, Result } from '@ethersproject/abi';
import { BigNumber } from "@ethersproject/bignumber";

export const DEFERRED_DECODING = 'deferred'

export interface DecodedValue {
    label?: string,
    value: any,
    signatures?: ReadonlyArray<string>,
    decoded?: Decoded
}

export interface Decoded {
    label: string,
    params: DecodedValue[]
}


const signatureLookupUrl = "https://www.4byte.directory/api/v1/signatures/?ordering=created_at&hex_signature="
const defaultInterface = new Interface([])

export const loadSignatures = async (data: string): Promise<string[] | undefined> => {
    if (!data || data.length == 0) return undefined
    const signature = data.slice(0, 10)
    const lookup = await axios.get(signatureLookupUrl + signature)
    if (lookup.data.results.length == 0) return undefined
    return lookup.data.results.map((sig: any) => sig.text_signature)
}

export const decodeData = async (functionSignature: string, data: string): Promise<Decoded | undefined> => {
    console.log({ functionSignature, data })
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
        const signatures = await loadSignatures(data)
        params.push({
            value: undefined,
            decoded: {
                label: "Transaction " + (params.length + 1),
                params: [
                    { label: "Operation", value: operation },
                    { label: "To", value: to },
                    { label: "Value", value: value },
                    { label: "Data", value: data, signatures }
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
                { label: "Data", value: decoded[2], signatures: await loadSignatures(decoded[2]) },
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