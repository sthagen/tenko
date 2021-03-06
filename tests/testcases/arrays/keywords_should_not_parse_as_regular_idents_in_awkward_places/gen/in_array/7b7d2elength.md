# Tenko parser autogenerated test case

- From: tests/testcases/arrays/keywords_should_not_parse_as_regular_idents_in_awkward_places/autogen.md
- Path: tests/testcases/arrays/keywords_should_not_parse_as_regular_idents_in_awkward_places/gen/in_array/7b7d2elength.md

> :: arrays : keywords should not parse as regular idents in awkward places : gen : in array
>
> ::> 7b7d2elength

## Input


`````js
[ {}.length ]
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
  loc:{start:{line:1,column:0},end:{line:1,column:13},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:13},source:''},
      expression: {
        type: 'ArrayExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:13},source:''},
        elements: [
          {
            type: 'MemberExpression',
            loc:{start:{line:1,column:2},end:{line:1,column:11},source:''},
            object: {
              type: 'ObjectExpression',
              loc:{start:{line:1,column:2},end:{line:1,column:4},source:''},
              properties: []
            },
            property: {
              type: 'Identifier',
              loc:{start:{line:1,column:5},end:{line:1,column:11},source:''},
              name: 'length'
            },
            computed: false
          }
        ]
      }
    }
  ]
}

tokens (8x):
       PUNC_BRACKET_OPEN PUNC_CURLY_OPEN PUNC_CURLY_CLOSE PUNC_DOT
       IDENT PUNC_BRACKET_CLOSE ASI
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
[({}).length];
````

Produces same AST
