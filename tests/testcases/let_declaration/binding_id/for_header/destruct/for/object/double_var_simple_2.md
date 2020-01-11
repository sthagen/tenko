# Tenko parser test case

- Path: tests/testcases/let_declaration/binding_id/for_header/destruct/for/object/double_var_simple_2.md

> :: let declaration : binding id : for header : destruct : for : object
>
> ::> double var simple 2

## Input

`````js
for (let {x} = a, {y} = obj;;);
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in five parsing modes: sloppy, sloppy+annexb, strict script, module, module+annexb.

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
ast: {
  type: 'Program',
  loc:{start:{line:1,column:0},end:{line:1,column:31},source:''},
  body: [
    {
      type: 'ForStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:31},source:''},
      init: {
        type: 'VariableDeclaration',
        loc:{start:{line:1,column:5},end:{line:1,column:27},source:''},
        kind: 'let',
        declarations: [
          {
            type: 'VariableDeclarator',
            loc:{start:{line:1,column:9},end:{line:1,column:16},source:''},
            id: {
              type: 'ObjectPattern',
              loc:{start:{line:1,column:9},end:{line:1,column:12},source:''},
              properties: [
                {
                  type: 'Property',
                  loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
                  key: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
                    name: 'x'
                  },
                  kind: 'init',
                  method: false,
                  computed: false,
                  value: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
                    name: 'x'
                  },
                  shorthand: true
                }
              ]
            },
            init: {
              type: 'Identifier',
              loc:{start:{line:1,column:15},end:{line:1,column:16},source:''},
              name: 'a'
            }
          },
          {
            type: 'VariableDeclarator',
            loc:{start:{line:1,column:18},end:{line:1,column:27},source:''},
            id: {
              type: 'ObjectPattern',
              loc:{start:{line:1,column:18},end:{line:1,column:21},source:''},
              properties: [
                {
                  type: 'Property',
                  loc:{start:{line:1,column:19},end:{line:1,column:20},source:''},
                  key: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:19},end:{line:1,column:20},source:''},
                    name: 'y'
                  },
                  kind: 'init',
                  method: false,
                  computed: false,
                  value: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:19},end:{line:1,column:20},source:''},
                    name: 'y'
                  },
                  shorthand: true
                }
              ]
            },
            init: {
              type: 'Identifier',
              loc:{start:{line:1,column:24},end:{line:1,column:27},source:''},
              name: 'obj'
            }
          }
        ]
      },
      test: null,
      update: null,
      body: {
        type: 'EmptyStatement',
        loc:{start:{line:1,column:30},end:{line:1,column:31},source:''}
      }
    }
  ]
}

tokens (19x):
       ID_for PUNC_PAREN_OPEN ID_let PUNC_CURLY_OPEN IDENT
       PUNC_CURLY_CLOSE PUNC_EQ IDENT PUNC_COMMA PUNC_CURLY_OPEN IDENT
       PUNC_CURLY_CLOSE PUNC_EQ IDENT PUNC_SEMI PUNC_SEMI
       PUNC_PAREN_CLOSE PUNC_SEMI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

_Output same as sloppy mode._

### Sloppy mode with AnnexB

Parsed with script goal with AnnexB rules enabled and as if the code did not start with strict mode header.

_Output same as sloppy mode._

### Module goal with AnnexB

Parsed with the module goal with AnnexB rules enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [sloppy][annexb:no]:

````js
for (let {x} = a, {y} = obj;;) ;
````

Produces same AST