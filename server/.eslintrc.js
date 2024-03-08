module.exports = {
  env: {
    node: true, // Specifies Node.js global variables and Node.js scoping.
    es2021: true, // Adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
  },
  extends: "../.eslintrc.cjs", // Assuming your root ESLint configuration is named `.eslintrc.cjs`.
  parserOptions: {
    ecmaVersion: 12, // ECMAScript version (2021)
    sourceType: "module", // Allows for the use of imports.
  },
  rules: {
    // Server-specific ESLint rules or overrides can be specified here.
  },
};
