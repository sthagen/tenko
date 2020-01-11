# Tenko parser test case

- Path: tests/testcases/bindings/arrow_args/dupe_between_args_and_local_bindings/single_arg_as_var_name.md

> :: bindings : arrow args : dupe between args and local bindings
>
> ::> single arg as var name
> 
> https://tc39.github.io/ecma262/#sec-arrow-function-definitions-static-semantics-early-errors
>
> > It is a Syntax Error if any element of the BoundNames of ArrowParameters also occurs in the LexicallyDeclaredNames of ConciseBody.

## Input

`````js
x => { var x; }
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
  loc:{start:{line:1,column:0},end:{line:1,column:15},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:15},source:''},
      expression: {
        type: 'ArrowFunctionExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:15},source:''},
        params: [
          {
            type: 'Identifier',
            loc:{start:{line:1,column:0},end:{line:1,column:1},source:''},
            name: 'x'
          }
        ],
        id: null,
        generator: false,
        async: false,
        expression: false,
        body: {
          type: 'BlockStatement',
          loc:{start:{line:1,column:5},end:{line:1,column:15},source:''},
          body: [
            {
              type: 'VariableDeclaration',
              loc:{start:{line:1,column:7},end:{line:1,column:13},source:''},
              kind: 'var',
              declarations: [
                {
                  type: 'VariableDeclarator',
                  loc:{start:{line:1,column:11},end:{line:1,column:12},source:''},
                  id: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:11},end:{line:1,column:12},source:''},
                    name: 'x'
                  },
                  init: null
                }
              ]
            }
          ]
        }
      }
    }
  ]
}

tokens (9x):
       IDENT PUNC_EQ_GT PUNC_CURLY_OPEN ID_var IDENT PUNC_SEMI
       PUNC_CURLY_CLOSE ASI
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
x => {var x;};
````

Produces same AST