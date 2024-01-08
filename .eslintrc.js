module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'next/core-web-vitals',
        'prettier',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'autofix'],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'prettier/prettier': ['error', { printWidth: 80 }],

        'react-hooks/rules-of-hooks': 'warn',
        // "arrow-body-style": ["error", "as-needed"],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                ignoreRestSiblings: true,
                destructuredArrayIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/ban-ts-comment': 'off',
        'autofix/no-unused-vars': [
            'off',
            {
                argsIgnorePattern: '^_',
                ignoreRestSiblings: true,
                destructuredArrayIgnorePattern: '^_',
            },
        ],
        camelcase: 'error',
        'max-lines': ['error', { max: 700 }],
        'max-depth': ['error', 4],
        'max-params': ['error', 4],

        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'parent',
                    'sibling',
                    'index',
                    'object',
                    'type',
                ],
                pathGroups: [
                    {
                        pattern: '@/**/**',
                        group: 'parent',
                        position: 'before',
                    },
                ],
                alphabetize: { order: 'asc' },
            },
        ],
        'no-duplicate-imports': 'error',
        'no-restricted-imports': [
            'error',
            {
                patterns: ['../'],
            },
        ],

        'react/react-in-jsx-scope': 'off',
        'react/no-array-index-key': 'warn',
        'react/sort-prop-types': ['error'],
        'react/no-unknown-property': ['error'],
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-props-no-spreading': [
            'warn',
            {
                html: 'enforce',
                custom: 'enforce',
                explicitSpread: 'enforce',
                exceptions: [],
            },
        ],
        'spaced-comment': 'error',
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports',
            },
        ],
        // "quotes": ["error", "double"]
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
}
