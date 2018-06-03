var path = require("path");

var config = {
  extraNodeModules: {
    "react-native": path.resolve(__dirname, "node_modules/react-native"),
    "react": path.resolve(__dirname, "node_modules/react"),
    "react-native-country-currency-picker": path.resolve(__dirname, "../index.js"),
  },
  getProjectRoots() {
    return [
      // Keep your project directory.
      path.resolve(__dirname),
      path.resolve(__dirname, "../"), // path to the external module
    ];
  }
}
module.exports = config;