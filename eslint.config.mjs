import {dirname} from "path";
import {fileURLToPath} from "url";
import {FlatCompat} from "@eslint/eslintrc";
import sonarjs from "eslint-plugin-sonarjs";
import reactCompiler from "eslint-plugin-react-compiler";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next",
    "next/core-web-vitals",
    "next/typescript",
    "plugin:jsx-a11y/strict"
  ),
  {
    plugins: {
      sonarjs: sonarjs,
      "react-compiler": reactCompiler,
    },
  },

  {
    rules: {
      ...sonarjs.configs.recommended.rules,
      quotes: ["error", "double"],
      "prefer-const": "error",
      "no-console": "warn",
      eqeqeq: ["error", "always"],
      // Additional strict rules
      strict: ["error", "global"],
      "no-unused-vars": ["error", {args: "none", ignoreRestSiblings: true}],
      "no-shadow": "warn",
      "consistent-return": "error",
      "no-var": "error",
      "prefer-arrow-callback": "error",
      "@next/next/no-img-element": "off",
      "no-console": "warn",
      "react-compiler/react-compiler": "error",
    },
  },
];

export default eslintConfig;
