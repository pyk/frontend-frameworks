### Development Notes

I use VS Code with the following extensions:

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [Babel ES6/ES7](https://marketplace.visualstudio.com/items?itemName=dzannotti.vscode-babel-coloring)
* [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)

With the following settings:

```json
{
    "files.insertFinalNewline": true,
    "files.trimFinalNewlines": true,
    "[javascript]": {
        "editor.tabSize": 2,
        "editor.formatOnSave": true,
    },
    "prettier.eslintIntegration": true,
    "javascript.validate.enable": false,
    "javascript.format.enable": false,
    "flow.useNPMPackagedFlow": true,
}
```

Some tools that we use:

* [Babel](https://babeljs.io/) compiler. Helps us to write JS code in ES6 syntax.
* [ESLint](https://eslint.org/docs/user-guide/getting-started) to lint our code.
* [Jest](https://github.com/facebook/jest) for our unit test.
* [Flow](https://flow.org/en/docs/editors/vscode/) for type checker.


This can be installed via `npm install` on this directory.
