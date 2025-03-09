import {dirname} from "path";
import {fileURLToPath} from "url";
import {FlatCompat} from "@eslint/eslintrc";
import sonarjs from "eslint-plugin-sonarjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:jsx-a11y/recommended"
  ),
  {
    plugins: {
      sonarjs: sonarjs,
    },
    rules: sonarjs.configs.recommended.rules,
  },
  {
    rules: {
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
    },
  },
];

export default eslintConfig;
