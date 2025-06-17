require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    hedera: {
      url: "https://testnet.hashio.io/api",
      chainId: 296,
      accounts: [`0xa08c4dc63fcc64013f9970337459de29cd29f374e1d2cf5eb5ab95ce0c1a1f9d`]
    }
  }
};