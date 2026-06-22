<div align="center">

# better-json6

> JSON5 and JSON6 support for Visual Studio Code, done right ⚡

</div>

## This is a shameless fork

**Based on the excellent work by [BlueGlassBlock](https://github.com/BlueGlassBlock/better-json5) and their `better-json5` extension.**

We needed multi-line strings using double-quotes and backticks so I forked it and did a hack job of implementing it. All praise goes to them.

Syntax highlighting, validation, formatting, and JSON schema based intellisense / completion for JSON5 files in Visual Studio Code.

## Features

#### Syntax highlighting with correctly colored keys, with your favorite theme support out-of-the-box
![Syntax Highlighting](./assets/highlighting.png)

#### JSON Schema based validation and intellisense
![Overview](./assets/overview.gif)

#### Completely configurable formatting

![Formatting](./assets/formatting.gif)

#### Sorting Command

![Sorting](./assets/sorting.gif)

#### Proper folding for objects, arrays and multiline strings

![Folding](./assets/folding.gif)

</div>

## Extension Settings

- `json5.schemas`: Associate schemas to JSON5 files in the current project.
- `json5.validate.enable`: Enable/disable validation.
- `json5.format.enable`: Enable/disable formatting.
- `json5.format.keepLines`: Keep all existing new lines when formatting.
- `json5.format.trailingCommas`: Control the occurrence of trailing commas in objects and arrays.
- `json5.format.keyQuotes`: Control the usage of quotes for object keys.
- `json5.format.stringQuotes`: Control the usage of quotes for string values in objects and arrays.
- `json5.format.tabSize`: Override the tab size for formatting. If set to `false`, it will use the default tab size of the editor. If set to `true`, it will use <kbd>Tab</kbd> (`\t`) for indentation. If set to a number, it will use that number of spaces for indentation.
- `json5.format.startIgnoreDirective`: The start of ignore directive for formatting. Default to `json5-fmt: off`. Only works for `//` line comments.
- `json5.format.endIgnoreDirective`: The end of ignore directive for formatting. Default to `json5-fmt: on`. Only works for `//` line comments.
- `json5.tracing`: Traces the communication between VS Code and the JSON5 language server.

## Credits

This extension is heavily based on the [JSON Language Features](https://github.com/microsoft/vscode/tree/main/extensions/json-language-features) extension by Microsoft.

## Changelog

See [CHANGELOG.md](CHANGELOG.md)

## License

[MIT](LICENSE.md)