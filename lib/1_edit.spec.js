"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = __importDefault(require("globals"));
const js_1 = __importDefault(require("@eslint/js"));
const typescript_eslint_1 = __importDefault(require("typescript-eslint"));
const eslint_plugin_react_1 = __importDefault(require("eslint-plugin-react"));
exports.default = [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: {
            globals: globals_1.default.browser,
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
    js_1.default.configs.recommended,
    ...typescript_eslint_1.default.configs.recommended,
    eslint_plugin_react_1.default.configs.flat.recommended,
];
