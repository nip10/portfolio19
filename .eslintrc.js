module.exports = {
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier", "react"],
  rules: {
    semi: "error",
    // "linebreak-style": [
    //   "error",
    //   "windows"
    // ],
    "arrow-spacing": ["error", { before: true, after: true }], // recommended
    indent: ["error", 2],
    "no-use-before-define": "off",

    // react plugin - options
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",

    // prettier
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: true,
        printWidth: 120
      }
    ]
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8 // optional, recommended 6+
  }
};
