require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Vr18c5YZY1_WMmHFP58l-LrclTIiEamp',
      accounts: [
        'e5b316f74ac3baec3fc2818ebb9f4775463ad15850ae25885cadc506030338ce',
      ],
    },
  },
};
