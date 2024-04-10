module.exports = function (api) {
  api.cache.never();
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            tests: ['./tests/'],
            '@components': './src/components',
            '@config': './src/config',
            '@constants': './src/constants',
            '@utils': './src/utils',
            '@navigations': './src/navigations',
            '@screens': './src/screens',
            '@services': './src/services',
            '@assets': './src/assets',
            '@themes': './src/themes',
            '@hooks': './src/hooks',
          },
        },
      ],
      'react-native-iconify/plugin',
      'react-native-reanimated/plugin',
    ],
  };
};
