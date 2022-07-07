module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/strict',
    ],
    parser: '@typescript-eslint/parser',
    settings: {
        react: {
            version: 'detect',
        },
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
    rules: {
        'react-hooks/exhaustive-deps': 'error',
        'no-var': 'error',
        'brace-style': 'error',
        'prefer-template': 'error',
        'space-before-blocks': 'error',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
    },
    overrides: [
        {
            files: [
                '**/*.test.js',
                '**/*.test.ts',
                '**/*.test.jsx',
                '**/*.test.tsx',
                '**/*.spec.js',
                '**/*.spec.jsx',
                '**/*.spec.tsx',
            ],
            env: {
                jest: true,
            },
        },
    ],
};
