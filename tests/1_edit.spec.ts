import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // ここで特定のルールを無効化することも可能
    },
  },
  {
    // 無視したいファイルに対して特定のルールを無効化する例
    files: ["src/App.tsx", "build/**/*", "node_modules/**/*"],
    rules: {
      // 無効化したいルールを指定
      "@typescript-eslint/no-unused-expressions": "off", // unused-expressionsルールを無効化
      "no-prototype-builtins": "off", // prototype-builtinsルールを無効化
    },
  },
  // 追加の設定
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
