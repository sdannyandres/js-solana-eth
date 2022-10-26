var Web3 = require("web3");
// provider
var testnet =
  "https://eth-goerli.g.alchemy.com/v2/utvEym6wSRXlaz0gOv1zhUVlSJ-YXq0S";
// public account
var walletAddress = "0x97443be61788D4372d3D730db3FEc521B706D5B3";
// conexión
const web3 = new Web3(new Web3.providers.HttpProvider(testnet));
// obtenemos el balance
web3.eth
  .getBalance(walletAddress)
  .then((i) => {
    // convertimos a ether
    const etherValue = Web3.utils.fromWei(i, "ether");
    console.log(`${etherValue} ether ${i}`);
  })
  .catch((e) => {
    console.log(e);
  });
