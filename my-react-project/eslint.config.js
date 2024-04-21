const globals = require("globals");
const pluginReactConfig = require("eslint-plugin-react/configs/recommended.js");

const path = require("path");
const { fileURLToPath } = require("url");
const { FlatCompat } = require("@eslint/eslintrc");
const pluginJs = require("@eslint/js");

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended });

module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json']
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ...compat.extends("standard-with-typescript"),
        pluginReactConfig
      ],
    },
    {
      files: ['*.js', '*.jsx'],
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        ...compat.extends("standard-with-typescript"),
        pluginReactConfig
      ],
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    ...globals.browser,
  },
};
