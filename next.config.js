/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  Webpack(config, { dev, isServer }) {
    config.resolve.alias = {
      "@Components": path.resolve(__dirname, "src/components/"),
      "@Types": path.resolve(__dirname, "src/"),
    };

    if (dev && isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }

    return config;
  },
};
