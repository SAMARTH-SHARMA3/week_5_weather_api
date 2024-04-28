import algosdk from "algosdk";
const algodToken = "a".repeat(64);
const server = "http://localhost";
const port = "4001";
const mnemonic = "foot spot alpha because hockey decline network wash blossom elephant health method crunch belt west wonder drill envelope swear order spend boy march abstract search";
export function getClient() {
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}
export function getAccount() {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}
//# sourceMappingURL=config.js.map