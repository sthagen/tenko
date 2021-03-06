# Tenko parser autogenerated test case

- From: tests/testcases/functions/func_statements/autogen.md
- Path: tests/testcases/functions/func_statements/gen/in_else/function_f28297b7d.md

> :: functions : func statements : gen : in else
>
> ::> function f28297b7d

## Input


`````js
if (x) x;
else function f(){}
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

start@1:0, error@2:5
╔══╦════════════════
 1 ║ if (x) x;
 2 ║ else function f(){}
   ║      ^^^^^^^^------- error
╚══╩════════════════

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
  loc:{start:{line:1,column:0},end:{line:2,column:19},source:''},
  body: [
    {
      type: 'IfStatement',
      loc:{start:{line:1,column:0},end:{line:2,column:19},source:''},
      test: {
        type: 'Identifier',
        loc:{start:{line:1,column:4},end:{line:1,column:5},source:''},
        name: 'x'
      },
      consequent: {
        type: 'ExpressionStatement',
        loc:{start:{line:1,column:7},end:{line:1,column:9},source:''},
        expression: {
          type: 'Identifier',
          loc:{start:{line:1,column:7},end:{line:1,column:8},source:''},
          name: 'x'
        }
      },
      alternate: {
        type: 'FunctionDeclaration',
        loc:{start:{line:2,column:5},end:{line:2,column:19},source:''},
        generator: false,
        async: false,
        id: {
          type: 'Identifier',
          loc:{start:{line:2,column:14},end:{line:2,column:15},source:''},
          name: 'f'
        },
        params: [],
        body: {
          type: 'BlockStatement',
          loc:{start:{line:2,column:17},end:{line:2,column:19},source:''},
          body: []
        }
      }
    }
  ]
}

tokens (14x):
       ID_if PUNC_PAREN_OPEN IDENT PUNC_PAREN_CLOSE IDENT PUNC_SEMI
       ID_else ID_function IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN PUNC_CURLY_CLOSE
`````

### Module goal with AnnexB

Parsed with the module goal with AnnexB rules enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [sloppy][annexb:yes]:

````js
if (x) x; else function f() {}
````

Produces same AST
