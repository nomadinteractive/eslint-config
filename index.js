module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "airbnb",
        "plugin:flowtype/recommended"
    ],
    "env": {
        "browser": true,
        "mocha": true,
        "node": true,
        "es6": true
    },
    "rules": {
        "indent": [2, "tab"],
		"no-tabs": 0,
		"semi": ["error", "never"],
        "prefer-template": 0,
        "consistent-return": 0,
        "comma-dangle": 0,
        "no-use-before-define": 0,
        "max-len": ["error", 120],
        "brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
		"import/no-unresolved": [2, { "ignore": ["electron"] }],
		"unicorn/filename-case": ["error", {"case": "snakeCase"}]
		// ReactJS rules
        "react/jsx-indent": [2, "tab"],
        "react/jsx-indent-props": [2, "tab"],
        "react/jsx-no-bind": 0,
        "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": 0,
		// FlowJS rules
        "flowtype/boolean-style": [2, "boolean"],
        "flowtype/define-flow-type": 1,
        "flowtype/delimiter-dangle": [2, "never"],
        "flowtype/generic-spacing": [2, "never"],
        "flowtype/no-primitive-constructor-types": 2,
        "flowtype/no-types-missing-file-annotation": 2,
        "flowtype/no-weak-types": "warn",
        "flowtype/object-type-delimiter": [2, "comma"],
        "flowtype/require-parameter-type": 2,
        "flowtype/require-return-type": [2, "always", { "annotateUndefined": "always", "excludeMatching": [ "constructor" ]    }],
        "flowtype/require-valid-file-annotation": 2,
        "flowtype/semi": ["error", "never"],
        "flowtype/space-after-type-colon": [2, "always"],
        "flowtype/space-before-generic-bracket": [2, "never"],
        "flowtype/space-before-type-colon": [2, "never"],
        "flowtype/type-id-match": [2, "^([A-Z][a-z0-9]+)+Type$"],
        "flowtype/union-intersection-spacing": [2, "always"],
        "flowtype/use-flow-type": 1,
        "flowtype/valid-syntax": 1,
    },
    "plugins": [
        "import",
        "react",
        "flowtype",
        "unicorn"
    ],
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".ios.js", ".android.js"]
            }
        },
        "flowtype": {
            "onlyFilesWithFlowAnnotation": true
        }
    }
}