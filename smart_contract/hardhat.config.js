// https://eth-rinkeby.alchemyapi.io/v2/VWKdIfSsnlDzTuMhCTwfL0W1tJM7LrBn

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/VWKdIfSsnlDzTuMhCTwfL0W1tJM7LrBn",
      accounts: ["85a5ea8ed17b88f1425e6425348d9fb2f868b52b525d62edb5c8b9498575f80b"]
    }
  }
};