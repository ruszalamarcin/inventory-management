module.exports = {
  "env": {"es2021": true, "node": true },
  "extends": ["plugin:prettier/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": 13
  },
  "plugins": [   "@typescript-eslint", "prettier"],
  "rules": {
      "max-len": ["error", { "code": 180 }],
      "no-console": 1,
  }
};
