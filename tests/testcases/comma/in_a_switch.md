# Tenko parser test case

- Path: tests/testcases/comma/in_a_switch.md

> :: comma
>
> ::> in a switch

## Input

`````js
switch (a,b){}
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
  loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
  body: [
    {
      type: 'SwitchStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
      discriminant: {
        type: 'SequenceExpression',
        loc:{start:{line:1,column:8},end:{line:1,column:11},source:''},
        expressions: [
          {
            type: 'Identifier',
            loc:{start:{line:1,column:8},end:{line:1,column:9},source:''},
            name: 'a'
          },
          {
            type: 'Identifier',
            loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
            name: 'b'
          }
        ]
      },
      cases: []
    }
  ]
}

tokens (9x):
       ID_switch PUNC_PAREN_OPEN IDENT PUNC_COMMA IDENT
       PUNC_PAREN_CLOSE PUNC_CURLY_OPEN PUNC_CURLY_CLOSE
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
switch ((a, b)) {}
````

Produces same AST
