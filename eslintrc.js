module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'airbnb',
      'prettier',
    ],
    plugins: [
      'react',
      '@typescript-eslint',
      'prettier',
    ],
    rules: {
      'prettier/prettier': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    env: {
      node: true,
      browser: true,
    },
  };
  