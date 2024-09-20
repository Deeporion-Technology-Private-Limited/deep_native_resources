module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'prettier', // Ensure Prettier is at the end to override other configs
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error'], // Ensure Prettier rules are enforced
    'no-unused-vars': 'off', // Example: Customize based on your needs
    '@typescript-eslint/no-unused-vars': ['warn'], // Example rule
  },
};
