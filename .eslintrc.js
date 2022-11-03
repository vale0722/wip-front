module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'jsx-a11y/label-has-associated-control': 'off',
    'prefer-destructuring': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.js'] }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'no-use-before-define': 'off',
    'import/no-unresolved': 'off',
    camelcase: 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'warn',
    'no-nested-ternary': 'warn',
    'react/function-component-definition': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-console': 'error',
    'jsx-a11y/anchor-is-valid': 'off',
  },
};
