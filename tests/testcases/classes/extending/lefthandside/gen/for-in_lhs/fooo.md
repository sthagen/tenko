# Tenko parser autogenerated test case

- From: tests/testcases/classes/extending/lefthandside/autogen.md
- Path: tests/testcases/classes/extending/lefthandside/gen/for-in_lhs/fooo.md

> :: classes : extending : lefthandside : gen : for-in lhs
>
> ::> fooo

## Input


`````js
for (fooo in x) ;
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
  loc:{start:{line:1,column:0},end:{line:1,column:17},source:''},
  body: [
    {
      type: 'ForInStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:17},source:''},
      left: {
        type: 'Identifier',
        loc:{start:{line:1,column:5},end:{line:1,column:9},source:''},
        name: 'fooo'
      },
      right: {
        type: 'Identifier',
        loc:{start:{line:1,column:13},end:{line:1,column:14},source:''},
        name: 'x'
      },
      body: {
        type: 'EmptyStatement',
        loc:{start:{line:1,column:16},end:{line:1,column:17},source:''}
      }
    }
  ]
}

tokens (8x):
       ID_for PUNC_PAREN_OPEN IDENT ID_in IDENT PUNC_PAREN_CLOSE
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

Printer output different from input [sloppy][annexb:no]:

````js
for ((fooo) in x) ;
````

Produces same AST
