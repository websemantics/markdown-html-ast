```        
       ╭────┬───┬──╮╭──────╮╭───┬──╮╭───╮ ╭──╮  ╭────╮╭──────╮╭───╮╭──╮╭──╮╭────┬─╮
       │           │├────  ││      ││   │╭╯ ╭╯╭─╯    ││   ╭╮ ││   ││  ││  ││      │
       │   ╭╮  ╭╮  ││ ╭╮   ││    ╭─╯│   ╰╯ ╭╯ │ ╭╮   ││   ││ ││   ╰╯  ╰╯  ││   ╭╮ │
       │   ││  ││  ││ ╰╯   ││    │  │   ╭╮ ╰╮ │ ╰╯   ││   ╰╯ ││           ││   ││ │
       ╰───╯╰──╯╰──╯╰───┴──╯╰────╯  ╰───╯╰──╯ ╰─┴────╯╰──────╯╰────┴───┴──╯╰───╯╰─╯
            ╭┬╮  ╭─╮      ┬ ┬  ╭┬╮  ╭┬╮  ┬        ╭─╮  ╭─╮  ┬─╮  ╭─╮  ╭─╮  ┬─╮
             │   │ │      ├─┤   │   │││  │        ├─╯  ├─┤  ├┬╯  ╰─╮  ├┤   ├┬╯
             ┴   ╰─╯      ┴ ┴   ┴   ┴ ┴  ┴─╯      ┴    ┴ ┴  ┴╰─  ╰─╯  ╰─╯  ┴╰─
              \____  __ __    ____       __    ____    __  ________  _ ____/
                  \________     _   \__   \      ____/             ____/
                         \_____  \__   \   |    /         _________/
                              \________   __      ________/
                                       \     \   /   /
                                       |         __ |
                                       |        __  |
                                       |            |
                                       |   ___  _   |
                                       |_           |
                                       |            |
                                    __/ / |   |   \  \___
                                 __ _ _  _  _    _ _ __ ___

```
> Simplified Markdown to HTML parser

## Install

Bower

```bash
Bower install markdown-html-ast
```

NPM

```bash
npm i markdown-html-ast
```

## Getting Started

This package provides a simple parser that transforms `markdown` code to a simple `HTML` Abstract Syntax Tree (AST).

To demonstrate how to use, let's read a `README.md` file from a Github repository, [pyrocms-cheatsheet](https://github.com/websemantics/pyrocms-cheatsheet) using [Gitters](https://github.com/websemantics/gitters).


```javascript
Gitters.fetch('websemantics/pyrocms-cheatsheet', 'README.md', function(file) {

  var tree = parse(file.content)

  console.log(tree)

})
```

## Support

Need help or have a question? post at [StackOverflow](https://stackoverflow.com/questions/tagged/markdown-html-ast+websemantics).

*Please don't use the issue trackers for support/questions.*

*Star if you find this project useful, to show support or simply for being awesome :)*

## Contribution

Contributions to this project are accepted in the form of feedback, bugs reports and even better - pull requests.

## License

[MIT license](http://opensource.org/licenses/mit-license.php) Copyright (c) Web Semantics, Inc.