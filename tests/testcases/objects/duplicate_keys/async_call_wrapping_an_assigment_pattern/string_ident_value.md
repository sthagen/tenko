# Tenko parser test case

- Path: tests/testcases/objects/duplicate_keys/async_call_wrapping_an_assigment_pattern/string_ident_value.md

> :: objects : duplicate keys : async call wrapping an assigment pattern
>
> ::> string ident value

## Input

`````js
async({x, "foo": x} = obj)
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
  loc:{start:{line:1,column:0},end:{line:1,column:26},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:26},source:''},
      expression: {
        type: 'CallExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:26},source:''},
        callee: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:5},source:''},
          name: 'async'
        },
        arguments: [
          {
            type: 'AssignmentExpression',
            loc:{start:{line:1,column:6},end:{line:1,column:25},source:''},
            left: {
              type: 'ObjectPattern',
              loc:{start:{line:1,column:6},end:{line:1,column:19},source:''},
              properties: [
                {
                  type: 'Property',
                  loc:{start:{line:1,column:7},end:{line:1,column:8},source:''},
                  key: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:7},end:{line:1,column:8},source:''},
                    name: 'x'
                  },
                  kind: 'init',
                  method: false,
                  computed: false,
                  value: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:7},end:{line:1,column:8},source:''},
                    name: 'x'
                  },
                  shorthand: true
                },
                {
                  type: 'Property',
                  loc:{start:{line:1,column:10},end:{line:1,column:18},source:''},
                  key: {
                    type: 'Literal',
                    loc:{start:{line:1,column:10},end:{line:1,column:15},source:''},
                    value: 'foo',
                    raw: '"foo"'
                  },
                  kind: 'init',
                  method: false,
                  computed: false,
                  value: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:17},end:{line:1,column:18},source:''},
                    name: 'x'
                  },
                  shorthand: false
                }
              ]
            },
            operator: '=',
            right: {
              type: 'Identifier',
              loc:{start:{line:1,column:22},end:{line:1,column:25},source:''},
              name: 'obj'
            }
          }
        ]
      }
    }
  ]
}

tokens (14x):
       ID_async PUNC_PAREN_OPEN PUNC_CURLY_OPEN IDENT PUNC_COMMA
       STRING_DOUBLE PUNC_COLON IDENT PUNC_CURLY_CLOSE PUNC_EQ IDENT
       PUNC_PAREN_CLOSE ASI
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
async(({x, "foo":x} = obj));
````

Produces same AST
