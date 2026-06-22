import globals from "globals";
import js from "@eslint/js";
import eslintPluginWebpack from "eslint-webpack-plugin";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.browser,
            },
        },
    },
];
