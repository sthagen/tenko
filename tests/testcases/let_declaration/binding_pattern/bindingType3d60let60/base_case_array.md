# Tenko parser test case

- Path: tests/testcases/let_declaration/binding_pattern/bindingType3d60let60/base_case_array.md

> :: let declaration : binding pattern : bindingType3d60let60
>
> ::> base case array

## Input

`````js
let [x] = v;
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
  loc:{start:{line:1,column:0},end:{line:1,column:12},source:''},
  body: [
    {
      type: 'VariableDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:12},source:''},
      kind: 'let',
      declarations: [
        {
          type: 'VariableDeclarator',
          loc:{start:{line:1,column:4},end:{line:1,column:11},source:''},
          id: {
            type: 'ArrayPattern',
            loc:{start:{line:1,column:4},end:{line:1,column:7},source:''},
            elements: [
              {
                type: 'Identifier',
                loc:{start:{line:1,column:5},end:{line:1,column:6},source:''},
                name: 'x'
              }
            ]
          },
          init: {
            type: 'Identifier',
            loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
            name: 'v'
          }
        }
      ]
    }
  ]
}

tokens (8x):
       ID_let PUNC_BRACKET_OPEN IDENT PUNC_BRACKET_CLOSE PUNC_EQ IDENT
       PUNC_SEMI
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

Printer output was same as input [sloppy][annexb:no]