# Tenko parser autogenerated test case

- From: tests/testcases/assigns/to_keyword/autogen.md
- Path: tests/testcases/assigns/to_keyword/gen/assign_to_paren-wrapped_VALUE_var_inside_delete_in_param_default/yield.md

> :: assigns : to keyword : gen : assign to paren-wrapped VALUE var inside delete in param default
>
> ::> yield

## Input


`````js
(x = delete ((yield) = f)) => {}
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
  loc:{start:{line:1,column:0},end:{line:1,column:32},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:32},source:''},
      expression: {
        type: 'ArrowFunctionExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:32},source:''},
        params: [
          {
            type: 'AssignmentPattern',
            loc:{start:{line:1,column:1},end:{line:1,column:25},source:''},
            left: {
              type: 'Identifier',
              loc:{start:{line:1,column:1},end:{line:1,column:2},source:''},
              name: 'x'
            },
            right: {
              type: 'UnaryExpression',
              loc:{start:{line:1,column:5},end:{line:1,column:25},source:''},
              operator: 'delete',
              prefix: true,
              argument: {
                type: 'AssignmentExpression',
                loc:{start:{line:1,column:13},end:{line:1,column:24},source:''},
                left: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:14},end:{line:1,column:19},source:''},
                  name: 'yield'
                },
                operator: '=',
                right: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:23},end:{line:1,column:24},source:''},
                  name: 'f'
                }
              }
            }
          }
        ],
        id: null,
        generator: false,
        async: false,
        expression: false,
        body: {
          type: 'BlockStatement',
          loc:{start:{line:1,column:30},end:{line:1,column:32},source:''},
          body: []
        }
      }
    }
  ]
}

tokens (17x):
       PUNC_PAREN_OPEN IDENT PUNC_EQ ID_delete PUNC_PAREN_OPEN
       PUNC_PAREN_OPEN ID_yield PUNC_PAREN_CLOSE PUNC_EQ IDENT
       PUNC_PAREN_CLOSE PUNC_PAREN_CLOSE PUNC_EQ_GT PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE ASI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use `yield` outside of generator functions when in strict mode

start@1:0, error@1:14
╔══╦═════════════════
 1 ║ (x = delete ((yield) = f)) => {}
   ║               ^^^^^------- error
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
(x = delete (yield = f)) => {};
````

Produces same AST
