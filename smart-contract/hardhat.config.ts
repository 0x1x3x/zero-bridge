import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

const GOERLI_API_KEY = 'Vr18c5YZY1_WMmHFP58l-LrclTIiEamp';
const METAMASK_PRIVATE_KEY =
  'e5b316f74ac3baec3fc2818ebb9f4775463ad15850ae25885cadc506030338ce';

const config: HardhatUserConfig = {
  solidity: '0.8.18',
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${GOERLI_API_KEY}`,
      accounts: [METAMASK_PRIVATE_KEY],
    },
  },
};

export default config;
