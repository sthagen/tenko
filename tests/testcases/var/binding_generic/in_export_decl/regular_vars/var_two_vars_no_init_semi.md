# Tenko parser test case

- Path: tests/testcases/var/binding_generic/in_export_decl/regular_vars/var_two_vars_no_init_semi.md

> :: var : binding generic : in export decl : regular vars
>
> ::> var two vars no init semi

## Input

`````js
export var foo, bar;
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in five parsing modes: sloppy, sloppy+annexb, strict script, module, module+annexb.

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  The `export` keyword can only be used with the module goal

start@1:0, error@1:0
╔══╦════════════════
 1 ║ export var foo, bar;
   ║ ^^^^^^------- error
╚══╩════════════════

`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

`````
ast: {
  type: 'Program',
  loc:{start:{line:1,column:0},end:{line:1,column:20},source:''},
  body: [
    {
      type: 'ExportNamedDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:20},source:''},
      specifiers: [],
      declaration: {
        type: 'VariableDeclaration',
        loc:{start:{line:1,column:7},end:{line:1,column:20},source:''},
        kind: 'var',
        declarations: [
          {
            type: 'VariableDeclarator',
            loc:{start:{line:1,column:11},end:{line:1,column:14},source:''},
            id: {
              type: 'Identifier',
              loc:{start:{line:1,column:11},end:{line:1,column:14},source:''},
              name: 'foo'
            },
            init: null
          },
          {
            type: 'VariableDeclarator',
            loc:{start:{line:1,column:16},end:{line:1,column:19},source:''},
            id: {
              type: 'Identifier',
              loc:{start:{line:1,column:16},end:{line:1,column:19},source:''},
              name: 'bar'
            },
            init: null
          }
        ]
      },
      source: null
    }
  ]
}

tokens (7x):
       ID_export ID_var IDENT PUNC_COMMA IDENT PUNC_SEMI
`````

### Sloppy mode with AnnexB

Parsed with script goal with AnnexB rules enabled and as if the code did not start with strict mode header.

_Output same as sloppy mode._

### Module goal with AnnexB

Parsed with the module goal with AnnexB rules enabled.

_Output same as module mode._

## AST Printer

Printer output was same as input [module][annexb:no]