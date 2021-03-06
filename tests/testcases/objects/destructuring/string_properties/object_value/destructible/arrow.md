# Tenko parser test case

- Path: tests/testcases/objects/destructuring/string_properties/object_value/destructible/arrow.md

> :: objects : destructuring : string properties : object value : destructible
>
> ::> arrow

## Input

`````js
({"x": {y: z}}) => x
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
        type: 'ArrowFunctionExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:20},source:''},
        params: [
          {
            type: 'ObjectPattern',
            loc:{start:{line:1,column:1},end:{line:1,column:14},source:''},
            properties: [
              {
                type: 'Property',
                loc:{start:{line:1,column:2},end:{line:1,column:13},source:''},
                key: {
                  type: 'Literal',
                  loc:{start:{line:1,column:2},end:{line:1,column:5},source:''},
                  value: 'x',
                  raw: '"x"'
                },
                kind: 'init',
                method: false,
                computed: false,
                value: {
                  type: 'ObjectPattern',
                  loc:{start:{line:1,column:7},end:{line:1,column:13},source:''},
                  properties: [
                    {
                      type: 'Property',
                      loc:{start:{line:1,column:8},end:{line:1,column:12},source:''},
                      key: {
                        type: 'Identifier',
                        loc:{start:{line:1,column:8},end:{line:1,column:9},source:''},
                        name: 'y'
                      },
                      kind: 'init',
                      method: false,
                      computed: false,
                      value: {
                        type: 'Identifier',
                        loc:{start:{line:1,column:11},end:{line:1,column:12},source:''},
                        name: 'z'
                      },
                      shorthand: false
                    }
                  ]
                },
                shorthand: false
              }
            ]
          }
        ],
        id: null,
        generator: false,
        async: false,
        expression: true,
        body: {
          type: 'Identifier',
          loc:{start:{line:1,column:19},end:{line:1,column:20},source:''},
          name: 'x'
        }
      }
    }
  ]
}

tokens (15x):
       PUNC_PAREN_OPEN PUNC_CURLY_OPEN STRING_DOUBLE PUNC_COLON
       PUNC_CURLY_OPEN IDENT PUNC_COLON IDENT PUNC_CURLY_CLOSE
       PUNC_CURLY_CLOSE PUNC_PAREN_CLOSE PUNC_EQ_GT IDENT ASI
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
({"x":{y:z}}) => (x);
````

Produces same AST
