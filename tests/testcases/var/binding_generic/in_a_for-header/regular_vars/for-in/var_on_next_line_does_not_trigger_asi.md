# Tenko parser test case

- Path: tests/testcases/var/binding_generic/in_a_for-header/regular_vars/for-in/var_on_next_line_does_not_trigger_asi.md

> :: var : binding generic : in a for-header : regular vars : for-in
>
> ::> var on next line does not trigger asi

## Input

`````js
for (var
foo in x);
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
  loc:{start:{line:1,column:0},end:{line:2,column:10},source:''},
  body: [
    {
      type: 'ForInStatement',
      loc:{start:{line:1,column:0},end:{line:2,column:10},source:''},
      left: {
        type: 'VariableDeclaration',
        loc:{start:{line:1,column:5},end:{line:2,column:3},source:''},
        kind: 'var',
        declarations: [
          {
            type: 'VariableDeclarator',
            loc:{start:{line:2,column:0},end:{line:2,column:3},source:''},
            id: {
              type: 'Identifier',
              loc:{start:{line:2,column:0},end:{line:2,column:3},source:''},
              name: 'foo'
            },
            init: null
          }
        ]
      },
      right: {
        type: 'Identifier',
        loc:{start:{line:2,column:7},end:{line:2,column:8},source:''},
        name: 'x'
      },
      body: {
        type: 'EmptyStatement',
        loc:{start:{line:2,column:9},end:{line:2,column:10},source:''}
      }
    }
  ]
}

tokens (9x):
       ID_for PUNC_PAREN_OPEN ID_var IDENT ID_in IDENT
       PUNC_PAREN_CLOSE PUNC_SEMI
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
for (var foo in x) ;
````

Produces same AST
