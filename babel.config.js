module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
};

// module.exports = {
//   presets: ['@babel/preset-react', '@babel/preset-typescript'],
//   plugins: ['@babel/plugin-transform-export-namespace-from']
// };
module.exports = function (api) {
  api.cache(true);
  return {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: [
          [
              "module:react-native-dotenv",
              {
                  moduleName: "@env",
                  path: ".env",
              },
          ],
      ],
  };
};