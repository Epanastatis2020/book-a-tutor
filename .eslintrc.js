module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    env: {
        browser: true,
        jquery: true,
        es6: true,
        commonjs: true,
        node: true,
        jest: true,
    },
    plugins: ['prettier', 'dollar-sign'],
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    rules: {
        indent: ['warn', 4],
        'dollar-sign/dollar-sign': [2, 'ignoreProperties'],
    },
};
