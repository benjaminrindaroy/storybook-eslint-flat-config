// Plugins
import eslintTypescriptPlugin from "@typescript-eslint/eslint-plugin";
import eslintImportPlugin from "eslint-plugin-import";
import eslintReactPlugin from "eslint-plugin-react";
import eslintReactHooksPlugin from "eslint-plugin-react-hooks";
import eslintPrettierPlugin from "eslint-plugin-prettier";
import eslintTestingLibraryPlugin from "eslint-plugin-testing-library";
import eslintStorybookPlugin from "eslint-plugin-storybook";

//Parser
import eslintTypescriptParser from "@typescript-eslint/parser";

export default [
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    ignores: [
      "src/setupTests.ts",
      "src/reportWebVitals.ts",
      "src/react-app-env.d.ts",
    ],
    languageOptions: {
      parser: eslintTypescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
        ecmaVersion: 2022,
        ecmaFeatures: {
          jsx: true,
          modules: true,
        },
      },
    },
    plugins: {
      ...eslintTypescriptPlugin.configs.recommended.plugins,
      ...eslintImportPlugin.configs.typescript.plugins,
      "@typescript-eslint": eslintTypescriptPlugin,
      import: eslintImportPlugin,
      react: eslintReactPlugin,
      "testing-library": eslintTestingLibraryPlugin,
      "react-hooks": eslintReactHooksPlugin,
      storybook: eslintStorybookPlugin,
      prettier: eslintPrettierPlugin,
    },
    settings: {
      ...eslintTypescriptPlugin.configs.recommended.settings,
      ...eslintImportPlugin.configs.recommended.settings,
      ...eslintImportPlugin.configs.typescript.settings,
      ...eslintReactPlugin.configs.recommended.settings,
      ...eslintTestingLibraryPlugin.configs.react.settings,
      ...eslintReactHooksPlugin.configs.recommended.settings,
      ...eslintReactPlugin.configs["jsx-runtime"].settings,
      ...eslintPrettierPlugin.configs.recommended.settings,
      ...eslintStorybookPlugin.configs.recommended.settings,
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
          project: "./tsconfig.json",
        },
      },
      react: {
        createClass: "createReactClass", // Regex for Component Factory to use,
        // default to "createReactClass"
        pragma: "React", // Pragma to use, default to "React"
        fragment: "Fragment", // Fragment to use (may be a property of <pragma>), default to "Fragment"
        version: "detect", // React version. "detect" automatically picks the version you have installed.
        flowVersion: "0.53", // Flow version
      },
    },
    rules: {
      ...eslintTypescriptPlugin.configs.recommended.rules,
      ...eslintImportPlugin.configs.recommended.rules,
      ...eslintImportPlugin.configs.typescript.rules,
      ...eslintReactPlugin.configs.recommended.rules,
      ...eslintTestingLibraryPlugin.configs.react.rules,
      ...eslintReactHooksPlugin.configs.recommended.rules,
      ...eslintReactPlugin.configs["jsx-runtime"].rules,
      ...eslintPrettierPlugin.configs.recommended.rules,
      // General rules
      "linebreak-style": 0,
      "no-param-reassign": "off",
      "no-plusplus": [
        "error",
        {
          allowForLoopAfterthoughts: true,
        },
      ],
      //Typescript rules
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/indent": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": ["error"],
      "@typescript-eslint/no-use-before-define": [
        "error",
        {
          variables: false,
        },
      ],
      // Import rules
      "import/prefer-default-export": "off",
      "import/namespace": "off",
      "import/no-unresolved": "off", // we use rolllup, prevent false positives
      "import/no-duplicates": ["off", { "prefer-inline": true }],
      "import/no-named-as-default-member": "off",
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "**/*.stories.tsx",
            "**/*.test.tsx",
            "**/*.test.ts",
          ],
        },
      ],
      // React rules
      "react/jsx-curly-newline": "off",
      "react/jsx-indent": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-wrap-multilines": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/require-default-props": "off",
      // Prettier rules
      "prettier/prettier": "off", // From keeping showing lint errors when we can format on Save
    },
  },
  {
    files: ["**/*.styles.tsx"],
    rules: {
      "@typescript-eslint/no-use-before-define": "off",
    },
  },
  {
    files: ["**/*.test.tsx"],
    rules: {
      "@typescript-eslint/await-thenable": ["off"],
      "react/jsx-props-no-spreading": "off",
    },
  },
  {
    files: ["**/*.stories.tsx"],
    rules: {
      ...eslintStorybookPlugin.rules.recommended,
    },
  },
];
