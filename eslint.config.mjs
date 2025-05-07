import css from "@eslint/css";
import json from "@eslint/json";
import pluginQuery from "@tanstack/eslint-plugin-query";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { plugins: { "@tanstack/query": pluginQuery } },
  { files: ["**/*.json"], plugins: { json }, language: "json/json" },
  { files: ["**/*.css"], plugins: { css }, language: "css/css" },
  {
    // ...
    "rules": {
      // ...
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off"
    }
  }
]);
