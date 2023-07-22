module.exports = {
  root: true,
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  extends: ['plugin:svelte/prettier', 'prettier'],
  // In order to display Prettier errors through ESLint rules, eslint-plugin-prettier is required.
  // Remove it (along with the dependency) if you do not wish to display Prettier errors.
  plugins: ['eslint-plugin-prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte'],
  },
  ignorePatterns: ['*.cjs'],
  rules: {
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
};
