import prettier from 'eslint-config-prettier'
import globals from 'globals'

export default [
  {
    plugins: { prettier },
    ignores: ['**/node_modules/*', '**/allure-results/*', '**/allure-report/*'],
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
        __ENV: 'readonly'
      }
    },
    rules: {
      'no-console': 'warn',
      'no-useless-escape': 'off',
      'no-empty-pattern': 'off',
      complexity: ['error', { max: 12 }],
      'max-depth': ['error', { max: 4 }],
      'max-nested-callbacks': ['error', { max: 2 }],
      'max-params': ['error', { max: 5 }],
      'max-statements': ['error', { max: 20 }, { ignoreTopLevelFunctions: true }],
      'max-lines': ['error', { max: 250, skipComments: true, skipBlankLines: true }],
      'max-len': ['off', { code: 150, ignoreComments: true, ignoreUrls: true }],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
      'no-eval': 'error',
      'no-multi-spaces': 'error',
      'no-new': 'warn',
      'no-return-assign': 'warn',
      'comma-dangle': ['error', 'never'],
      strict: ['error', 'global'],
      'func-style': ['warn', 'expression'],
      'no-new-func': 'error',
      'no-param-reassign': 'error',
      'prefer-arrow-callback': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'no-invalid-this': 'error',
      'prefer-destructuring': ['warn', { array: true, object: true }, { enforceForRenamedProperties: true }],
      'no-implied-eval': 'error',
      eqeqeq: 'error',
      'no-with': 'error',
      'func-call-spacing': ['error', 'never'],
      'new-cap': ['error', { newIsCap: true }],
      'new-parens': 'error',
      quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-var': 'warn',
      'no-unused-vars': ['warn', { vars: 'local' }],
      'import/extensions': 'off', // .js ending is ok
      'no-prototype-builtins': 'off'
    }
  }
]
