/**
 *
 *            __   __  _____  _____    __   _  _____   _____  _     _  __    _
 *           |  |_|  ||  _  ||   _ |  |  | | ||     | |     || | _ | ||  |  | |
 *           |       || |_| ||  | ||  |  |_| ||  _   ||  _  || || || ||   |_| |
 *           |       ||     ||  |_||_ |     _|| | |  || | | ||       ||       |
 *           |       ||     ||   __  ||    |_ | |_|  || |_| ||       ||  _    |
 *           | ||_|| ||  _  ||  |  | ||   _  ||      ||     ||   _   || | |   |
 *           |_|   |_||_| |_||__|  |_||__| |_||_____| |_____||__| |__||_|  |__|
 *
 *            ___ ____      _  _ ___ _  _  _         ___  ____  ____  ____ ____
 *             |  |  |      |__|  |  |\/|  |         |__] |__|  |__/  [__  |___
 *             |  |__|      |  |  |  |  |  |___      |    |  |  |  \  ___] |___
 *
 *             \____  __ __    ____       __    ____    __  ________  _ ____/
 *                 \________     _   \__   \      ____/             ____/
 *                        \_____  \__   \   |    /         _________/
 *                             \________   __      ________/
 *                                      \     \   /   /
 *                                      |         __ |
 *                                      |        __  |
 *                                      |            |
 *                                      |   ___  _   |
 *                                      |_           |
 *                                      |            |
 *                                   __/ / |   |   \  \___
 *                                __ _ _  _  _    _ _ __ ___
 *
 *
 *
 * This project was released under MIT license.
 *
 * @link      http://websemantics.ca
 * @author    Web Semantics, Inc. Dev Team <team@websemantics.ca>
 * @author    Adnan M.Sagar, PhD. <adnan@websemantics.ca>
 */

;
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['remark'],
            function() {
                return (root.MDtree = factory(remark))
            })
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('remark'))
    } else {
        root.MDtree = factory(root.remark)
    }
}(this, function(remark) {

    var root = this || global
    var me = {
        VERSION: '1.0.0'
    }

    /* Library defaults, can be changed using the 'defaults' member method,

		- debug (boolean), turns debug mode off / on

    */

    var defaults = {
        debug: true,
    }

    // -------------------------------------------------------------------------
    // Public methods

    /*
      Override class defaults

        Parameters:
        - opts (object): name value pairs

    */

    me.defaults = function(opts) {
        var key
        for (key in opts || {}) {
            if (defaults[key]) {
                defaults[key] = opts[key]
            }
        }
    }

    // -------------------------------------------------------------------------
    // Public methods

    /*
        Parse Markdown and return a simplified HTML tree object

          Parameters:
          - src (string): markdown

  	*/

    me.parse = function(src) {
        var ast = remark().parse(src)
        return build(ast, src)
    }

    /*
        Build a Simplified HTML tree from Markdown source

          Parameters:
          - node (object): an ast node object
          - src (string): markdown

  	*/

    function build(node, src) {

        if (node instanceof Array) {
            return node.map(function(item){
              return build(item, src)
            })
        }

        if(node instanceof Object) {

            var start = node.position ? node.position.start.offset : 0
            var end = node.position ? node.position.end.offset : 0
            var children = build(node.children, src)
            var value = node.value ? node.value : (node.position ? src.substring(start, end) : '')

            switch (node.type) {
              case 'root':
                  return {element: 'document',
                          children: children }
              case 'heading':
                  return {element: 'h' + node.depth,
                          value: value.substring(node.depth + 1),
                          children: children}
              case 'list':
                  return {element: node.ordered ? 'ol' : 'ul',
                          children: children }
              case 'inlineCode':
                  return {element: 'code',
                          value: value}
              case 'blockquote':
                  return {element: node.type,
                          value: value.substring(2)}
              case 'text':
              case 'strong':
                  return {element: node.type,
                          value: value}
              case 'emphasis':
                  return {element: 'em',
                          value: value}
              case 'break':
                  return {element: 'br'}
              case 'thematicBreak':
                  return {element: 'hr'}
              case 'paragraph':
                  return {element: 'p',
                          value: value,
                          children: children}
              case 'listItem':
                  return {element: 'li',
                          value: value.substring(2),
                          children: children}
              case 'link':
                  return {element: 'a',
                          title: node.title,
                          href: node.url,
                          value: children instanceof Array && children.length > 0
                                 && children[0].value ? children[0].value : ''}
              case 'image':
                  return {element: 'img',
                          alt: node.alt,
                          src: node.url}
              case 'code':
                  return {element: node.type,
                          language: node.lang ? node.lang : 'none',
                          value: value}
            }
        }
        return node
    }


    // -------------------------------------------------------------------------
    // Private methods

    /*
          Log a message to the console

            Parameters:
    				- message (string): print out if in debug mode

    */
    function log(message) {
        if (defaults.debug) {
            console.log(message)
        }
    }

    return me
}))
