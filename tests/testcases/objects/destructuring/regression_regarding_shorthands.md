# Tenko parser test case

- Path: tests/testcases/objects/destructuring/regression_regarding_shorthands.md

> :: objects : destructuring
>
> ::> regression regarding shorthands
>
> this was incorrectly flagged to have to destruct but thats just not true

## Input

`````js
x = {y}
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
  loc:{start:{line:1,column:0},end:{line:1,column:7},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:7},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:7},source:''},
        left: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:1},source:''},
          name: 'x'
        },
        operator: '=',
        right: {
          type: 'ObjectExpression',
          loc:{start:{line:1,column:4},end:{line:1,column:7},source:''},
          properties: [
            {
              type: 'Property',
              loc:{start:{line:1,column:5},end:{line:1,column:6},source:''},
              key: {
                type: 'Identifier',
                loc:{start:{line:1,column:5},end:{line:1,column:6},source:''},
                name: 'y'
              },
              kind: 'init',
              method: false,
              computed: false,
              value: {
                type: 'Identifier',
                loc:{start:{line:1,column:5},end:{line:1,column:6},source:''},
                name: 'y'
              },
              shorthand: true
            }
          ]
        }
      }
    }
  ]
}

tokens (7x):
       IDENT PUNC_EQ PUNC_CURLY_OPEN IDENT PUNC_CURLY_CLOSE ASI
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
x = {y};
````

Produces same AST
