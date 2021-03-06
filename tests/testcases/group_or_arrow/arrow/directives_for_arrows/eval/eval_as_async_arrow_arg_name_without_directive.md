# Tenko parser test case

- Path: tests/testcases/group_or_arrow/arrow/directives_for_arrows/eval/eval_as_async_arrow_arg_name_without_directive.md

> :: group or arrow : arrow : directives for arrows : eval
>
> ::> eval as async arrow arg name without directive

## Input

`````js
async (eval) => {}
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
        type: 'ArrowFunctionExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:18},source:''},
        params: [
          {
            type: 'Identifier',
            loc:{start:{line:1,column:7},end:{line:1,column:11},source:''},
            name: 'eval'
          }
        ],
        id: null,
        generator: false,
        async: true,
        expression: false,
        body: {
          type: 'BlockStatement',
          loc:{start:{line:1,column:16},end:{line:1,column:18},source:''},
          body: []
        }
      }
    }
  ]
}

tokens (9x):
       ID_async PUNC_PAREN_OPEN ID_eval PUNC_PAREN_CLOSE PUNC_EQ_GT
       PUNC_CURLY_OPEN PUNC_CURLY_CLOSE ASI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  The left hand side of the async arrow is not destructible so arrow is illegal

start@1:0, error@1:13
╔══╦═════════════════
 1 ║ async (eval) => {}
   ║              ^^------- error
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
async eval => {};
````

Produces same AST
