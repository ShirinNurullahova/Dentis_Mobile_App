module.exports = {
  root: true,
  extends: '@react-native',
  "prettier/prettier": ["error",{
    "endOfLine": "auto"}
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    // ... rest
  },
};
