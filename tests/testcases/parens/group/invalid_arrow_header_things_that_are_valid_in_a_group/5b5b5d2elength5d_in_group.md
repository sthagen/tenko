# Tenko parser test case

- Path: tests/testcases/parens/group/invalid_arrow_header_things_that_are_valid_in_a_group/5b5b5d2elength5d_in_group.md

> :: parens : group : invalid arrow header things that are valid in a group
>
> ::> 5b5b5d2elength5d in group

## Input

`````js
([].length);
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
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:12},source:''},
      expression: {
        type: 'MemberExpression',
        loc:{start:{line:1,column:1},end:{line:1,column:10},source:''},
        object: {
          type: 'ArrayExpression',
          loc:{start:{line:1,column:1},end:{line:1,column:3},source:''},
          elements: []
        },
        property: {
          type: 'Identifier',
          loc:{start:{line:1,column:4},end:{line:1,column:10},source:''},
          name: 'length'
        },
        computed: false
      }
    }
  ]
}

tokens (8x):
       PUNC_PAREN_OPEN PUNC_BRACKET_OPEN PUNC_BRACKET_CLOSE PUNC_DOT
       IDENT PUNC_PAREN_CLOSE PUNC_SEMI
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
[].length;
````

Produces same AST