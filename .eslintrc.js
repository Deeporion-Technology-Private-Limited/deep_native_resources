module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
    'plugin:jest/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'react-native', 'jest', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  env: {
    'react-native/react-native': true,
    'jest/globals': true,
  },
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'react-native/sort-styles': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
      rules: {
        'jest/no-disabled-tests': 'off',
        'jest/no-focused-tests': 'off',
        'jest/no-identical-title': 'off',
        'jest/prefer-to-have-length': 'off',
        'jest/valid-expect': 'off',
      },
    },
  ],
  ignorePatterns: [
    'lib/**/*',
    '**/*config.js',
    '.eslintrc.js',
    'index.js',
    'App.tsx',
    'App.test.tsx',
  ],
};
