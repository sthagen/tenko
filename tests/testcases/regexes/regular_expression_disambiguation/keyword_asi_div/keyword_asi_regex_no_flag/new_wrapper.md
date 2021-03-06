# Tenko parser autogenerated test case

- From: tests/testcases/regexes/regular_expression_disambiguation/keyword_asi_div/autogen.md
- Path: tests/testcases/regexes/regular_expression_disambiguation/keyword_asi_div/keyword_asi_regex_no_flag/new_wrapper.md

> :: regexes : regular expression disambiguation : keyword asi div : keyword asi regex no flag
>
> ::> new wrapper
> `new` is never the start of a division

## PASS

## Input

`````js
new
/x/.foo
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
  loc:{start:{line:1,column:0},end:{line:2,column:7},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:2,column:7},source:''},
      expression: {
        type: 'NewExpression',
        loc:{start:{line:1,column:0},end:{line:2,column:7},source:''},
        arguments: [],
        callee: {
          type: 'MemberExpression',
          loc:{start:{line:2,column:0},end:{line:2,column:7},source:''},
          object: {
            type: 'Literal',
            loc:{start:{line:2,column:0},end:{line:2,column:3},source:''},
            value: null,
            regex: { pattern: 'x', flags: '' },
            raw: '/x/'
          },
          property: {
            type: 'Identifier',
            loc:{start:{line:2,column:4},end:{line:2,column:7},source:''},
            name: 'foo'
          },
          computed: false
        }
      }
    }
  ]
}

tokens (6x):
       ID_new REGEXN PUNC_DOT IDENT ASI
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
new /x/.foo();
````

Produces same AST
