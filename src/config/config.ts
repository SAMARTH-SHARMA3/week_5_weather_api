import algosdk from "algosdk";

const algodToken ="a".repeat(64);
const server: string = "http://localhost";
const port: string ="4001";

const mnemonic: string =  "foot spot alpha because hockey decline network wash blossom elephant health method crunch belt west wonder drill envelope swear order spend boy march abstract search";

export function getClient(): algosdk.Algodv2{
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}

export function getAccount(): algosdk.Account{
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}