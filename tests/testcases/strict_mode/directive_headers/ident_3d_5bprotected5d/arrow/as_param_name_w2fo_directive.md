# Tenko parser test case

- Path: tests/testcases/strict_mode/directive_headers/ident_3d_5bprotected5d/arrow/as_param_name_w2fo_directive.md

> :: strict mode : directive headers : ident 3d 5bprotected5d : arrow
>
> ::> as param name w2fo directive

## Input

`````js
(protected) => {}
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
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:17},source:''},
      expression: {
        type: 'ArrowFunctionExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:17},source:''},
        params: [
          {
            type: 'Identifier',
            loc:{start:{line:1,column:1},end:{line:1,column:10},source:''},
            name: 'protected'
          }
        ],
        id: null,
        generator: false,
        async: false,
        expression: false,
        body: {
          type: 'BlockStatement',
          loc:{start:{line:1,column:15},end:{line:1,column:17},source:''},
          body: []
        }
      }
    }
  ]
}

tokens (8x):
       PUNC_PAREN_OPEN ID_protected PUNC_PAREN_CLOSE PUNC_EQ_GT
       PUNC_CURLY_OPEN PUNC_CURLY_CLOSE ASI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use this name (`protected`) as a variable name because: Cannot use this reserved word as a variable name in strict mode

start@1:0, error@1:1
╔══╦════════════════
 1 ║ (protected) => {}
   ║  ^^^^^^^^^------- error
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
protected => {};
````

Produces same AST
