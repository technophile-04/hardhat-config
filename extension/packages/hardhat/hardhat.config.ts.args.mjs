export const preConfigContent = `
// Custom variables
const CUSTOM_API_KEY = process.env.CUSTOM_API_KEY;
`;

export const configOverride = {
  networks: {
    hardhat: {
      forking: {
        blockNumber: 1234567
      }
    },
    customNetwork: {
      url: "https://custom.network",
      accounts: [deployerPrivateKey],
      verify: {
        etherscan: {
          apiUrl: "https://api.custom-explorer.io",
          apiKey: etherscanApiKey,
        }
      }
    }
  },
};
