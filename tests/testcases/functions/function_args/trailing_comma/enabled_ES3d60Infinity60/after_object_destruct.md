# Tenko parser test case

- Path: tests/testcases/functions/function_args/trailing_comma/enabled_ES3d60Infinity60/after_object_destruct.md

> :: functions : function args : trailing comma : enabled ES3d60Infinity60
>
> ::> after object destruct

## Input

- `es = Infinity`

`````js
function f({a},){}
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
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:18},source:''},
      generator: false,
      async: false,
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:9},end:{line:1,column:10},source:''},
        name: 'f'
      },
      params: [
        {
          type: 'ObjectPattern',
          loc:{start:{line:1,column:11},end:{line:1,column:14},source:''},
          properties: [
            {
              type: 'Property',
              loc:{start:{line:1,column:12},end:{line:1,column:13},source:''},
              key: {
                type: 'Identifier',
                loc:{start:{line:1,column:12},end:{line:1,column:13},source:''},
                name: 'a'
              },
              kind: 'init',
              method: false,
              computed: false,
              value: {
                type: 'Identifier',
                loc:{start:{line:1,column:12},end:{line:1,column:13},source:''},
                name: 'a'
              },
              shorthand: true
            }
          ]
        }
      ],
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:16},end:{line:1,column:18},source:''},
        body: []
      }
    }
  ]
}

tokens (11x):
       ID_function IDENT PUNC_PAREN_OPEN PUNC_CURLY_OPEN IDENT
       PUNC_CURLY_CLOSE PUNC_COMMA PUNC_PAREN_CLOSE PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE
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
function f({a}) {}
````

Produces same AST