import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,

  {
    files: ["src/**/*.js"],
    ignores: ["**/*.config.js"],
    rules: {
      "no-unused-vars": "warn",
      "no-constant-condition": "off",
      "no-undef": "error",
      camelcase: "warn",
      curly: "warn",
      "default-param-last": ["error"],
      quotes: ["warn", "backtick"],
      semi: ["warn", "always"],
      "capitalized-comments": ["warn"],
      "prefer-arrow-callback": "warn",

      "arrow-body-style": ["error", "always"],
      "block-scoped-var": "error",
    },
  },
];
