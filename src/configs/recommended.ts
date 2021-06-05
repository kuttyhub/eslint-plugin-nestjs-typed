export = {
    parser: "@typescript-eslint/parser",
    parserOptions: {sourceType: "module"},
    rules: {
        //  "nestjs-typed/api-methods-have-documentation": "error",
        "@darraghor/nestjs-typed/provided-injected-should-match-factory-parameters":
            "error",
        "@darraghor/nestjs-typed/injectable-should-be-provided": [
            "error",
            {
                src: ["src/**/*.ts"],
                filterFromPaths: ["node_modules", ".test.", ".spec."],
            },
        ],
        "@darraghor/nestjs-typed/api-property-matches-property-optionality":
            "error",
    },
};
