module.exports = {
    "root": true,
    "env": {
        "browser": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module"
    },
    "extends": "standard",
    "plugins": [
        "html"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "quotes": [
            "error",
            "single"
        ],
        "no-unused-vars": [
            "warn"
        ],
        "no-undef": [
            "warn"
        ],
        "no-console": 0
    }
};
