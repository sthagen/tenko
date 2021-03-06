# Tenko parser test case

- Path: tests/testcases/regexes/regular_expression_disambiguation/AST_test_after_non-special_identifier/with_flag.md

> :: regexes : regular expression disambiguation : AST test after non-special identifier
>
> ::> with flag
>
> The forward slash can be a division so this is a `foo/bar/g` double division

## Input

`````js
foo
/bar/g
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
  loc:{start:{line:1,column:0},end:{line:2,column:6},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:2,column:6},source:''},
      expression: {
        type: 'BinaryExpression',
        loc:{start:{line:1,column:0},end:{line:2,column:6},source:''},
        left: {
          type: 'BinaryExpression',
          loc:{start:{line:1,column:0},end:{line:2,column:4},source:''},
          left: {
            type: 'Identifier',
            loc:{start:{line:1,column:0},end:{line:1,column:3},source:''},
            name: 'foo'
          },
          operator: '/',
          right: {
            type: 'Identifier',
            loc:{start:{line:2,column:1},end:{line:2,column:4},source:''},
            name: 'bar'
          }
        },
        operator: '/',
        right: {
          type: 'Identifier',
          loc:{start:{line:2,column:5},end:{line:2,column:6},source:''},
          name: 'g'
        }
      }
    }
  ]
}

tokens (7x):
       IDENT PUNC_DIV IDENT PUNC_DIV IDENT ASI
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
(foo / bar) / g;
````

Produces same AST
