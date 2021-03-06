# Tenko parser test case

- Path: tests/testcases/assigns/destruct/obj_rest_with_yield.md

> :: assigns : destruct
>
> ::> obj rest with yield

## Input

`````js
({...yield} = obj)
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
  loc:{start:{line:1,column:0},end:{line:1,column:18},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:18},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:1},end:{line:1,column:17},source:''},
        left: {
          type: 'ObjectPattern',
          loc:{start:{line:1,column:1},end:{line:1,column:11},source:''},
          properties: [
            {
              type: 'RestElement',
              loc:{start:{line:1,column:2},end:{line:1,column:10},source:''},
              argument: {
                type: 'Identifier',
                loc:{start:{line:1,column:5},end:{line:1,column:10},source:''},
                name: 'yield'
              }
            }
          ]
        },
        operator: '=',
        right: {
          type: 'Identifier',
          loc:{start:{line:1,column:14},end:{line:1,column:17},source:''},
          name: 'obj'
        }
      }
    }
  ]
}

tokens (10x):
       PUNC_PAREN_OPEN PUNC_CURLY_OPEN PUNC_DOT_DOT_DOT ID_yield
       PUNC_CURLY_CLOSE PUNC_EQ IDENT PUNC_PAREN_CLOSE ASI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use `yield` outside of generator functions when in strict mode

start@1:0, error@1:5
╔══╦════════════════
 1 ║ ({...yield} = obj)
   ║      ^^^^^------- error
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
({...yield} = obj);
````

Produces same AST
