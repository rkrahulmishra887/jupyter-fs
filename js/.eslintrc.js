module.exports = {
  ignorePatterns: ["lib/**", "node_modules/**"],
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  extends: [
    "eslint:recommended",
  ],
  parserOptions: {
    project: "tsconfig.eslint.json",
  },
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "brace-style": ["error", "1tbs"],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": "error",
    "complexity": "off",
    "constructor-super": "error",
    "curly": "error",
    "eol-last": "error",
    "eqeqeq": ["error", "smart"],
    "func-call-spacing": "error",
    "id-blacklist": ["error", "any", "Number", "number", "String", "string", "Boolean", "boolean", "Undefined", "undefined"],
    "key-spacing": "error",
    "keyword-spacing": "error",
    "max-len": ["error", { code: 200 }],
    "new-parens": "error",
    "no-bitwise": "warn",
    "no-caller": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-debugger": "error",
    "no-empty": "error",
    "no-eval": "error",
    "no-multiple-empty-lines": "error",
    "no-new-wrappers": "error",
    "no-shadow": ["error", { hoist: "all" }],
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "object-curly-spacing": ["error", "always"],
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "quote-props": ["error", "consistent-as-needed"],
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", { anonymous: "never", asyncArrow: "always", named: "never" }],
    "space-unary-ops": "error",
    "spaced-comment": ["off", "always", { markers: ["/"] }],
    "valid-typeof": "off",

    // will be overridden for .ts files
    "camelcase": "off",
    "indent": ["error", 2],
    "no-use-before-define": "off",
    "no-unused-expressions": "error",
    "no-unused-vars": ["warn", { args: "none" }],
    "quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
    "semi": "error",

    // candidates for turning on
    "no-fallthrough": "off",
    "no-invalid-this": "off",
    "sort-keys": ["off", "asc", { natural: true }],
    "space-infix-ops": "off",

    // candidates for turning off
    "no-underscore-dangle": "error",
  },
  overrides: [
    {
      // ref: https://github.com/typescript-eslint/typescript-eslint/issues/109#issuecomment-536160947
      files: ["**/*.ts", "**/*.tsx"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      parser: "@typescript-eslint/parser",
      rules: {
        "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "no-public" }],
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/unified-signatures": "error",

        // typescript rules that extend core eslint rules
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/indent": ["error", 2],
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-unused-vars": ["warn", { args: "none" }],
        "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
        "@typescript-eslint/semi": "error",
        "indent": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        "quotes": "off",
        "semi": "off",
      },
    },
  ],
};
