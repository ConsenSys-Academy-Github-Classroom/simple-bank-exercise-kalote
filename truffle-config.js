const HDWalletProvider = require('@truffle/hdwallet-provider');
const dotenv = require('dotenv');
dotenv.config();

const mnemonic = process.env.MNEMONIC;

module.exports = {
  networks: {
    local: {
      host: "localhost",
      port: 7545,
      network_id: "*"
    },
    development: {
      network_id: "*",
      port: 7545,
      host: "127.0.0.1"
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, process.env.INFURA_ENDPOINT),
      network_id: "4",
      gas: 5500000
    }
  },
  compilers: {
    solc: {
      version: "^0.8"
    }
  }
};
