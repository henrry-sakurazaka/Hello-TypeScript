import { fileURLToPath } from 'url';
import { dirname } from 'path';
import tsParser from '@typescript-eslint/parser'; // TypeScript用のパーサー
import globals from 'globals';
import pluginReact from 'eslint-plugin-react'; // Reactプラグイン
import tsPlugin from '@typescript-eslint/eslint-plugin'; // typescript-eslintのインポート
import pluginPrettier from "eslint-plugin-prettier";



const __dirname = dirname(fileURLToPath(import.meta.url)); // __dirnameを設定

export default [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        process: "readonly",
        console: "readonly",
        jest: "readonly",
        localStorage: "readonly",
        Notification: "readonly",
        setInterval: "readonly",
        window: "readonly",
        setTimeout: "readonly",
        document: "readonly",
        exports: "readonly",
        require: "readonly"
      },
      parser: tsParser, // TypeScript用のパーサーを指定
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        tsconfigRootDir: __dirname, // tsconfig.jsonのルートディレクトリを指定
        project: './tsconfig.json', // tsconfig.jsonのパスを指定
      },
    },
    ignores: [
      "tests/**/*",
      "lib/**/*", 
      "build/**/*",
      "node_modules/**/*", 
      "src/App.tsx",
      "dist/**/*",
      "**/*.d.ts",
      "playwright.config.ts",
      "functions/**/*",
      "eslint.config.js",
      "vite.config.ts"
    ],
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      'no-unused-vars': 'off',  
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      'no-prototype-builtins': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-console': 'off',
      "no-undef": 'off',
      "indent": 'off',
      "no-empty": 'off',  
      "no-func-assign": 'off', 
      '@typescript-eslint/no-require-imports': 'off',  
      "space-in-parens": 'off',
      "no-multi-spaces": 'off',
      "prettier/prettier": "error",
    },
    plugins: {
      react: pluginReact,
      '@typescript-eslint': tsPlugin,
      prettier: pluginPrettier,
    },
  },
  
];
