module.exports = {
  ignorePatterns: ["**/vendors/**"],
  plugins: ["svg-jsx"],
  parser: "@typescript-eslint/parser",
  rules: {
    "svg-jsx/camel-case-dash": "error",
    "svg-jsx/camel-case-colon": "error",
    "svg-jsx/no-style-string": "error",
  },
  parserOptions: {
    project: "./tsconfig.json",
  },
};