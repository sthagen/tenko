# Tenko parser test case

- Path: tests/testcases/strict_mode/directive_headers/ident_3d_5bimplements5d/function_expr/assigned_to_in_param_default_w2fo_directive.md

> :: strict mode : directive headers : ident 3d 5bimplements5d : function expr
>
> ::> assigned to in param default w2fo directive
>
> the default causes the error, not the usage, but whatever

## Input

`````js
f = function f(x=implements=10){ }
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
  loc:{start:{line:1,column:0},end:{line:1,column:34},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:34},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:34},source:''},
        left: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:1},source:''},
          name: 'f'
        },
        operator: '=',
        right: {
          type: 'FunctionExpression',
          loc:{start:{line:1,column:4},end:{line:1,column:34},source:''},
          generator: false,
          async: false,
          id: {
            type: 'Identifier',
            loc:{start:{line:1,column:13},end:{line:1,column:14},source:''},
            name: 'f'
          },
          params: [
            {
              type: 'AssignmentPattern',
              loc:{start:{line:1,column:15},end:{line:1,column:30},source:''},
              left: {
                type: 'Identifier',
                loc:{start:{line:1,column:15},end:{line:1,column:16},source:''},
                name: 'x'
              },
              right: {
                type: 'AssignmentExpression',
                loc:{start:{line:1,column:17},end:{line:1,column:30},source:''},
                left: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:17},end:{line:1,column:27},source:''},
                  name: 'implements'
                },
                operator: '=',
                right: {
                  type: 'Literal',
                  loc:{start:{line:1,column:28},end:{line:1,column:30},source:''},
                  value: 10,
                  raw: '10'
                }
              }
            }
          ],
          body: {
            type: 'BlockStatement',
            loc:{start:{line:1,column:31},end:{line:1,column:34},source:''},
            body: []
          }
        }
      }
    }
  ]
}

tokens (15x):
       IDENT PUNC_EQ ID_function IDENT PUNC_PAREN_OPEN IDENT PUNC_EQ
       ID_implements PUNC_EQ NUMBER_DEC PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN PUNC_CURLY_CLOSE ASI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use this name (`implements`) as a variable name because: Cannot use this reserved word as a variable name in strict mode

start@1:0, error@1:17
╔══╦═════════════════
 1 ║ f = function f(x=implements=10){ }
   ║                  ^^^^^^^^^^------- error
╚══╩═════════════════

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
f = function f(x = implements = 10) {};
````

Produces same AST