```        
            __   __  _____  _____    __   _  _____   _____  _     _  __    _
           |  |_|  ||  _  ||   _ |  |  | | ||     | |     || | _ | ||  |  | |
           |       || |_| ||  | ||  |  |_| ||  _   ||  _  || || || ||   |_| |
           |       ||     ||  |_||_ |     _|| | |  || | | ||       ||       |
           |       ||     ||   __  ||    |_ | |_|  || |_| ||       ||  _    |
           | ||_|| ||  _  ||  |  | ||   _  ||      ||     ||   _   || | |   |
           |_|   |_||_| |_||__|  |_||__| |_||_____| |_____||__| |__||_|  |__|

            ___ ____    _  _ ___ _  _ _       ___  ____ ____ ____ ____ ____
             |  |  |    |__|  |  |\/| |       |__] |__| |__/ [__  |___ |__/
             |  |__|    |  |  |  |  | |___    |    |  | |  \ ___] |___ |  \

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


## Contributions

This project is in development and your contributions are always welcome!


## License

[MIT license](http://opensource.org/licenses/mit-license.php)
Copyright (c) Web Semantics, Inc.
