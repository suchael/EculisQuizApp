module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    
    //Note: Reanimated plugin has to be the last item in the plugins array
    plugins: ['react-native-reanimated/plugin'],
  };
};
