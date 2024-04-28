import algosdk from "algosdk";

const algodToken ="a".repeat(64);
const server: string = "http://localhost";
const port: string ="4001";

const mnemonic: string =  "return valley loop joke jar door bitter acoustic innocent labor gain mansion explain skirt casual pattern check risk action liar mountain essay liberty abstract once";

export function getClient(): algosdk.Algodv2{
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}

export function getAccount(): algosdk.Account{
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}