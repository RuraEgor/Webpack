module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  // extends: 'standard-with-typescript',
  extends: ['eslint:recommended', 'airbnb-base/legacy'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
	  "no-console": "off",
  }
}
