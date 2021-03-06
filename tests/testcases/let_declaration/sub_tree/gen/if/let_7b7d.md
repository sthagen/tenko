# Tenko parser autogenerated test case

- From: tests/testcases/let_declaration/sub_tree/autogen.md
- Path: tests/testcases/let_declaration/sub_tree/gen/if/let_7b7d.md

> :: let declaration : sub tree : gen : if
>
> ::> let 7b7d
>          {}

## Input


`````js
if (a) let
{}
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
  loc:{start:{line:1,column:0},end:{line:2,column:2},source:''},
  body: [
    {
      type: 'IfStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:10},source:''},
      test: {
        type: 'Identifier',
        loc:{start:{line:1,column:4},end:{line:1,column:5},source:''},
        name: 'a'
      },
      consequent: {
        type: 'ExpressionStatement',
        loc:{start:{line:1,column:7},end:{line:1,column:10},source:''},
        expression: {
          type: 'Identifier',
          loc:{start:{line:1,column:7},end:{line:1,column:10},source:''},
          name: 'let'
        }
      },
      alternate: null
    },
    {
      type: 'BlockStatement',
      loc:{start:{line:2,column:0},end:{line:2,column:2},source:''},
      body: []
    }
  ]
}

tokens (9x):
       ID_if PUNC_PAREN_OPEN IDENT PUNC_PAREN_CLOSE ID_let ASI
       PUNC_CURLY_OPEN PUNC_CURLY_CLOSE
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  `let` declaration not allowed here and `let` cannot be a regular var or label name in strict mode

start@1:0, error@1:7
╔══╦════════════════
 1 ║ if (a) let
   ║        ^^^------- error
 2 ║ {}
╚══╩════════════════

`````

### Module goal

Parsed with the module goal.

_Output same as strict mode._

### Sloppy mode with AnnexB

Parsed with script goal with AnnexB rules enabled and as if the code did not start with strict mode header.

_Output same as sloppy mode._

### Module goal with AnnexB

Parsed with the module goal with AnnexB rules enabled.

_Output same as strict mode._

## AST Printer

Printer output different from input [sloppy][annexb:no]:

````js
if (a) (let);
{}
````

Produces same AST
