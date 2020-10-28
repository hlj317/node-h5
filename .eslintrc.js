module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "mocha": true,
        "mongo": true,
        "phantomjs": true,
        "jasmine": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 8
    },
    "rules": {
        "indent": 'off',
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-alert": [
            "error"
        ],
        "no-console": [
            "error"
        ],
        "no-debugger": [
            "off"
        ],
        "no-useless-escape": [
            "off"
        ]
    }
};
