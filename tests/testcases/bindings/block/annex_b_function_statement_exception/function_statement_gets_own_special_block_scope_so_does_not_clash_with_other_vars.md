# Tenko parser test case

- Path: tests/testcases/bindings/block/annex_b_function_statement_exception/function_statement_gets_own_special_block_scope_so_does_not_clash_with_other_vars.md

> :: bindings : block : annex b function statement exception
>
> ::> function statement gets own special block scope so does not clash with other vars

## Input

`````js
{ var f = 123; if (true) function f(){} }
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in five parsing modes: sloppy, sloppy+annexb, strict script, module, module+annexb.

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  A function declaration can only be the child of an `if`/`else` in sloppy web compat mode

start@1:0, error@1:25
╔══╦═════════════════
 1 ║ { var f = 123; if (true) function f(){} }
   ║                          ^^^^^^^^------- error
╚══╩═════════════════

`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

_Output same as sloppy mode._

### Sloppy mode with AnnexB

Parsed with script goal with AnnexB rules enabled and as if the code did not start with strict mode header.

`````
ast: {
  type: 'Program',
  loc:{start:{line:1,column:0},end:{line:1,column:41},source:''},
  body: [
    {
      type: 'BlockStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:41},source:''},
      body: [
        {
          type: 'VariableDeclaration',
          loc:{start:{line:1,column:2},end:{line:1,column:14},source:''},
          kind: 'var',
          declarations: [
            {
              type: 'VariableDeclarator',
              loc:{start:{line:1,column:6},end:{line:1,column:13},source:''},
              id: {
                type: 'Identifier',
                loc:{start:{line:1,column:6},end:{line:1,column:7},source:''},
                name: 'f'
              },
              init: {
                type: 'Literal',
                loc:{start:{line:1,column:10},end:{line:1,column:13},source:''},
                value: 123,
                raw: '123'
              }
            }
          ]
        },
        {
          type: 'IfStatement',
          loc:{start:{line:1,column:15},end:{line:1,column:39},source:''},
          test: {
            type: 'Literal',
            loc:{start:{line:1,column:19},end:{line:1,column:23},source:''},
            value: true,
            raw: 'true'
          },
          consequent: {
            type: 'FunctionDeclaration',
            loc:{start:{line:1,column:25},end:{line:1,column:39},source:''},
            generator: false,
            async: false,
            id: {
              type: 'Identifier',
              loc:{start:{line:1,column:34},end:{line:1,column:35},source:''},
              name: 'f'
            },
            params: [],
            body: {
              type: 'BlockStatement',
              loc:{start:{line:1,column:37},end:{line:1,column:39},source:''},
              body: []
            }
          },
          alternate: null
        }
      ]
    }
  ]
}

tokens (18x):
       PUNC_CURLY_OPEN ID_var IDENT PUNC_EQ NUMBER_DEC PUNC_SEMI ID_if
       PUNC_PAREN_OPEN ID_true PUNC_PAREN_CLOSE ID_function IDENT
       PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE PUNC_CURLY_CLOSE
`````

### Module goal with AnnexB

Parsed with the module goal with AnnexB rules enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [sloppy][annexb:yes]:

````js
{var f = 123;
if (true) function f() {}}
````

Produces same AST