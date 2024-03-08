/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/node", "eslint:recommended"],
  plugins: [
    "mui-path-imports"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "no-empty-function": "off",
    "no-empty": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "mui-path-imports/mui-path-imports": "error",
    "semi": [
      1,
      "always"
    ],
    "react/jsx-curly-spacing": [
      1,
      "always"
    ],
    "no-use-before-define": [
      0,
      {
        "functions": false
      }
    ],
    "react/jsx-indent": [
      1,
      2
    ],
    "space-in-parens": [
      1,
      "never"
    ],
    "no-const-assign": [
      2
    ],
    "no-unused-vars": "off",
    "import/no-duplicates": "off",
  },
};
