module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
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
  globals: {
    module: 'readonly',
    require: 'readonly', // Додано для оголошення require як глобальної змінної
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-require-imports': 'off', // Вимкнення заборони на require
    'no-undef': 'off', // Вимкнення заборони на undefined змінні
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
