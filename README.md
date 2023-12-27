Reproduction for https://github.com/fostimus/eslint-plugin-svg-jsx/issues/9

Steps to reproduce:

```bash
pnpm install 
pnpm eslint . --ext .ts,.tsx
```

Errors:

```bash
Oops! Something went wrong! :(

ESLint: 8.56.0

TypeError: Cannot read properties of undefined (reading 'range')
Occurred while linting /Users/chenyuwang/eslint-plugin-svg-jsx-issue-9-repro/src/index.tsx:1
Rule: "svg-jsx/camel-case-dash"
    at Object.replaceText (/Users/chenyuwang/eslint-plugin-svg-jsx-issue-9-repro/node_modules/.pnpm/eslint@8.56.0/node_modules/eslint/lib/linter/rule-fixer.js:95:50)
    at Object.fix (/Users/chenyuwang/eslint-plugin-svg-jsx-issue-9-repro/node_modules/.pnpm/eslint-plugin-svg-jsx@1.2.2/node_modules/eslint-plugin-svg-jsx/rules/camel-case-dash.js:61:29)
    at normalizeFixes (/Users/chenyuwang/eslint-plugin-svg-jsx-issue-9-repro/node_modules/.pnpm/eslint@8.56.0/node_modules/eslint/lib/linter/report-translator.js:194:28)
    at /Users/chenyuwang/eslint-plugin-svg-jsx-issue-9-repro/node_modules/.pnpm/eslint@8.56.0/node_modules/eslint/lib/linter/report-translator.js:365:49
    at Object.report (/Users/chenyuwang/eslint-plugin-svg-jsx-issue-9-repro/node_modules/.pnpm/eslint@8.56.0/node_modules/eslint/lib/linter/linter.js:1047:41)
    at validateAndFixProp (/Users/chenyuwang/eslint-plugin-svg-jsx-issue-9-repro/node_modules/.pnpm/eslint-plugin-svg-jsx@1.2.2/node_modules/eslint-plugin-svg-jsx/rules/camel-case-dash.js:51:23)
    at /Users/chenyuwang/eslint-plugin-svg-jsx-issue-9-repro/node_modules/.pnpm/eslint-plugin-svg-jsx@1.2.2/node_modules/eslint-plugin-svg-jsx/rules/camel-case-dash.js:79:13
    at Array.forEach (<anonymous>)
    at handleSpreadOperator (/Users/chenyuwang/eslint-plugin-svg-jsx-issue-9-repro/node_modules/.pnpm/eslint-plugin-svg-jsx@1.2.2/node_modules/eslint-plugin-svg-jsx/rules/camel-case-dash.js:74:17)
    at /Users/chenyuwang/eslint-plugin-svg-jsx-issue-9-repro/node_modules/.pnpm/eslint-plugin-svg-jsx@1.2.2/node_modules/eslint-plugin-svg-jsx/rules/camel-case-dash.js:94:15
```
