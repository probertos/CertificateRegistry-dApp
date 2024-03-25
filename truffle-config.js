const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require('fs');
const mnemonicPhrase = fs.readFileSync(".secret").toString().trim();
const alchemyProjectID = fs.readFileSync(".alchemy").toString().trim();

module.exports = {
  networks: {
      // local ganache
      development: {
          host: "192.168.0.113",
          port: 7546,
          network_id: "5777",
      },

      //alchemy
      alchemy: {
        provider: () =>
            new HDWalletProvider({
            mnemonic: {
                phrase: mnemonicPhrase
            },
            providerOrUrl: "https://eth-mainnet.g.alchemy.com/v2/" + alchemyProjectID
            }),
        network_id: '*',
        },
  },
  compilers: {
      solc: {
          version: "^0.8.20",
          settings: {
            optimizer: {
              enabled: true,
              runs: 200
            },
          evmVersion: 'petersburg'  
      },
    },
  },
};