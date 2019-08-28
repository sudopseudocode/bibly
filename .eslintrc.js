module.exports = {
	extends: [
		'airbnb',
	],
	parser: 'babel-eslint',
	parserOptions: {
		allowImportExportEverywhere: true,
		ecmaFeatures: {
			jsx: true,
			es6: true,
		},
		ecmaVersion: 2018
	},
	env: {
		browser: true,
		node: true,
		jest: true,
	},
	plugins: [
    'react',
    'jest',
  ],
  settings: {
    'import/resolver': {
      // Removes no-unresolved error for '@' alias we use for root directory
      alias: {
        map: [
          ['@', './'],
          ['data', './__mocks__/data']
        ]
      }
    }
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
	rules: {
		/**
		 * 1st parameter severity options for all rules listed below:
		 * 2 = Error. Uses red wiggly underline.
		 * 1 = Warning. Uses green wiggly underline.
		 * 0 = Non-issue / Disabled rule. No underline displayed.
		 */

		// Warns on console usage
		'no-console': [1],

		// Discourages underscore in variable names.  Allows for Mongo IDs
    // 'no-underscore-dangle': ['error', {
    //   allow: ['_id']
    // }],

    // Max length of a row
    // Changes to warning
		'max-len': [1, 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
	}
}
