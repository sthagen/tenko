# Tenko parser test case

- Path: tests/testcases/let_declaration/binding_id/statement/destructuring/object/double_destruct_with_rename_and_init.md

> :: let declaration : binding id : statement : destructuring : object
>
> ::> double destruct with rename and init

## Input

`````js
let {x : y, z, a : b = c} = obj;
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
  loc:{start:{line:1,column:0},end:{line:1,column:32},source:''},
  body: [
    {
      type: 'VariableDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:32},source:''},
      kind: 'let',
      declarations: [
        {
          type: 'VariableDeclarator',
          loc:{start:{line:1,column:4},end:{line:1,column:31},source:''},
          id: {
            type: 'ObjectPattern',
            loc:{start:{line:1,column:4},end:{line:1,column:25},source:''},
            properties: [
              {
                type: 'Property',
                loc:{start:{line:1,column:5},end:{line:1,column:10},source:''},
                key: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:5},end:{line:1,column:6},source:''},
                  name: 'x'
                },
                kind: 'init',
                method: false,
                computed: false,
                value: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:9},end:{line:1,column:10},source:''},
                  name: 'y'
                },
                shorthand: false
              },
              {
                type: 'Property',
                loc:{start:{line:1,column:12},end:{line:1,column:13},source:''},
                key: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:12},end:{line:1,column:13},source:''},
                  name: 'z'
                },
                kind: 'init',
                method: false,
                computed: false,
                value: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:12},end:{line:1,column:13},source:''},
                  name: 'z'
                },
                shorthand: true
              },
              {
                type: 'Property',
                loc:{start:{line:1,column:15},end:{line:1,column:24},source:''},
                key: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:15},end:{line:1,column:16},source:''},
                  name: 'a'
                },
                kind: 'init',
                method: false,
                computed: false,
                value: {
                  type: 'AssignmentPattern',
                  loc:{start:{line:1,column:19},end:{line:1,column:24},source:''},
                  left: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:19},end:{line:1,column:20},source:''},
                    name: 'b'
                  },
                  right: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:23},end:{line:1,column:24},source:''},
                    name: 'c'
                  }
                },
                shorthand: false
              }
            ]
          },
          init: {
            type: 'Identifier',
            loc:{start:{line:1,column:28},end:{line:1,column:31},source:''},
            name: 'obj'
          }
        }
      ]
    }
  ]
}

tokens (18x):
       ID_let PUNC_CURLY_OPEN IDENT PUNC_COLON IDENT PUNC_COMMA IDENT
       PUNC_COMMA IDENT PUNC_COLON IDENT PUNC_EQ IDENT
       PUNC_CURLY_CLOSE PUNC_EQ IDENT PUNC_SEMI
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
let {x:y, z, a:b = c} = obj;
````

Produces same AST
