const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);
const { withNativeWind } = require("nativewind/metro");

config.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer"
);
config.resolver.assetExts = config.resolver.assetExts.filter(
  (ext) => ext !== "svg"
);
config.resolver.sourceExts.push("svg");

module.exports = withNativeWind(config, { input: "./global.css" });
