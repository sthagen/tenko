# Tenko parser autogenerated test case

- From: tests/testcases/labels/labelled_func_decl/autogen.md
- Path: tests/testcases/labels/labelled_func_decl/gen/try/foo3a_bar3a_third3a_function_f28297b7d.md

> :: labels : labelled func decl : gen : try
>
> ::> foo3a bar3a third3a function f28297b7d

## Input


`````js
try { foo: bar: third: function f(){} } finally {}
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in five parsing modes: sloppy, sloppy+annexb, strict script, module, module+annexb.

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  A "labelled function declaration" is only allowed in sloppy web compat mode

start@1:0, error@1:23
╔══╦═════════════════
 1 ║ try { foo: bar: third: function f(){} } finally {}
   ║                        ^^^^^^^^------- error
╚══╩═════════════════

`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

_Output same as sloppy mode._

### Sloppy mode with AnnexB

Parsed with script goal with AnnexB rules enabled and as if the code did not start with strict mode header.

`````
ast: {
  type: 'Program',
  loc:{start:{line:1,column:0},end:{line:1,column:50},source:''},
  body: [
    {
      type: 'TryStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:50},source:''},
      block: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:4},end:{line:1,column:39},source:''},
        body: [
          {
            type: 'LabeledStatement',
            loc:{start:{line:1,column:6},end:{line:1,column:37},source:''},
            label: {
              type: 'Identifier',
              loc:{start:{line:1,column:6},end:{line:1,column:9},source:''},
              name: 'foo'
            },
            body: {
              type: 'LabeledStatement',
              loc:{start:{line:1,column:11},end:{line:1,column:37},source:''},
              label: {
                type: 'Identifier',
                loc:{start:{line:1,column:11},end:{line:1,column:14},source:''},
                name: 'bar'
              },
              body: {
                type: 'LabeledStatement',
                loc:{start:{line:1,column:16},end:{line:1,column:37},source:''},
                label: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:16},end:{line:1,column:21},source:''},
                  name: 'third'
                },
                body: {
                  type: 'FunctionDeclaration',
                  loc:{start:{line:1,column:23},end:{line:1,column:37},source:''},
                  generator: false,
                  async: false,
                  id: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:32},end:{line:1,column:33},source:''},
                    name: 'f'
                  },
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    loc:{start:{line:1,column:35},end:{line:1,column:37},source:''},
                    body: []
                  }
                }
              }
            }
          }
        ]
      },
      handler: null,
      finalizer: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:48},end:{line:1,column:50},source:''},
        body: []
      }
    }
  ]
}

tokens (19x):
       ID_try PUNC_CURLY_OPEN IDENT PUNC_COLON IDENT PUNC_COLON IDENT
       PUNC_COLON ID_function IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN PUNC_CURLY_CLOSE PUNC_CURLY_CLOSE ID_finally
       PUNC_CURLY_OPEN PUNC_CURLY_CLOSE
`````

### Module goal with AnnexB

Parsed with the module goal with AnnexB rules enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [sloppy][annexb:yes]:

````js
try {foo: bar: third: function f() {}} finally {}
````

Produces same AST
