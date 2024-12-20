export const preConfigContent = `
// Custom variables
const CUSTOM_API_KEY = process.env.CUSTOM_API_KEY;
`;

export const configOverrides = {
  networks: {
    hardhat: {
      forking: {
        blockNumber: 1234567
      }
    },
    customNetwork: {
      url: "https://custom.network",
      accounts: ["$$$deployerPrivateKey"],
      blah: `test \${CUSTOM_API_KEY}`,
      verify: {
        etherscan: {
          apiUrl: "https://api.custom-explorer.io",
          apiKey: "$$$etherscanApiKey",
        }
      }
    }
  },
};
