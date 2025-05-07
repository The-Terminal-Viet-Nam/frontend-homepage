import pluginQuery from "@tanstack/eslint-plugin-query";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { plugins: { "@tanstack/query": pluginQuery } },
  {
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
]);
