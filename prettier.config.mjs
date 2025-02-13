// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions}
 */
const config = {
  tabWidth: 2,
  semi: true,
  trailingComma: "es5",
  arrowParens: "always",
  bracketSpacing: true,
  plugins: [require("prettier-plugin-tailwindcss")],
};

export default config;
