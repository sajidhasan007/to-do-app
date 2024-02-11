/** @format */

module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"prettier",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		semi: ["error", "always"],
		"object-curly-spacing": ["error", "always"],
		camelcase: "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-explicit-any": 1,
		"@typescript-eslint/no-inferrable-types": [
			"warn",
			{
				ignoreParameters: true,
			},
		],
		"no-underscore-dangle": "off",
		"no-shadow": "off",
		"no-new": 0,
		"@typescript-eslint/no-shadow": ["error"],
		"@typescript-eslint/no-unused-vars": "warn",
		quotes: [
			"error",
			"double",
			{ allowTemplateLiterals: true, avoidEscape: true },
		],
		"class-methods-use-this": "off",
	},
};
