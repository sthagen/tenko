# Tenko parser autogenerated test case

- From: tests/testcases/operator_precedent/autogen.md
- Path: tests/testcases/operator_precedent/gen/in_object/a_2f_b_2b_c.md

> :: operator precedent : gen : in object
>
> ::> a 2f b 2b c

## Input


`````js
x = { a: a / b + c }
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
  loc:{start:{line:1,column:0},end:{line:1,column:20},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:20},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:20},source:''},
        left: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:1},source:''},
          name: 'x'
        },
        operator: '=',
        right: {
          type: 'ObjectExpression',
          loc:{start:{line:1,column:4},end:{line:1,column:20},source:''},
          properties: [
            {
              type: 'Property',
              loc:{start:{line:1,column:6},end:{line:1,column:18},source:''},
              key: {
                type: 'Identifier',
                loc:{start:{line:1,column:6},end:{line:1,column:7},source:''},
                name: 'a'
              },
              kind: 'init',
              method: false,
              computed: false,
              value: {
                type: 'BinaryExpression',
                loc:{start:{line:1,column:9},end:{line:1,column:18},source:''},
                left: {
                  type: 'BinaryExpression',
                  loc:{start:{line:1,column:9},end:{line:1,column:14},source:''},
                  left: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:9},end:{line:1,column:10},source:''},
                    name: 'a'
                  },
                  operator: '/',
                  right: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:13},end:{line:1,column:14},source:''},
                    name: 'b'
                  }
                },
                operator: '+',
                right: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:17},end:{line:1,column:18},source:''},
                  name: 'c'
                }
              },
              shorthand: false
            }
          ]
        }
      }
    }
  ]
}

tokens (13x):
       IDENT PUNC_EQ PUNC_CURLY_OPEN IDENT PUNC_COLON IDENT PUNC_DIV
       IDENT PUNC_PLUS IDENT PUNC_CURLY_CLOSE ASI
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
x = {a:(a / b) + c};
````

Produces same AST