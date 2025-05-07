import css from "@eslint/css";
import json from "@eslint/json";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

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
]);
