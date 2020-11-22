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
    plugins: ['prettier', 'jquery'],
    extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:jquery/deprecated'],
    rules: {
        indent: ['warn', 4],
    },
};
