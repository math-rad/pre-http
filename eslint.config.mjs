import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
    rules: {
      "semi": ["error", "always"],
      "no-unused-vars": "off"
    }
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];