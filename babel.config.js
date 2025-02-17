module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@buttons": "./src/components/buttons",
          "@text": "./src/components/text",
          "@views": "./src/components/views",
          "@models": "./src/models",
          "@navigation": "./src/navigation",
          "@screens": "./src/screens",
          "@utils": "./src/utils",
          "@icons": "./src/utils/icons",
        },
      },
    ],
  ],
};
