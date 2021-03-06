# Tenko parser autogenerated test case

- From: tests/testcases/group_or_arrow/arrow/position/autogen.md
- Path: tests/testcases/group_or_arrow/arrow/position/gen/template_tail/async_28x29_3d3e_7b7d.md

> :: group or arrow : arrow : position : gen : template tail
>
> ::> async 28x29 3d3e 7b7d

## Input


`````js
`a ${async (x) => {}} b`.length
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
  loc:{start:{line:1,column:0},end:{line:1,column:31},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:31},source:''},
      expression: {
        type: 'MemberExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:31},source:''},
        object: {
          type: 'TemplateLiteral',
          loc:{start:{line:1,column:0},end:{line:1,column:24},source:''},
          expressions: [
            {
              type: 'ArrowFunctionExpression',
              loc:{start:{line:1,column:5},end:{line:1,column:20},source:''},
              params: [
                {
                  type: 'Identifier',
                  loc:{start:{line:1,column:12},end:{line:1,column:13},source:''},
                  name: 'x'
                }
              ],
              id: null,
              generator: false,
              async: true,
              expression: false,
              body: {
                type: 'BlockStatement',
                loc:{start:{line:1,column:18},end:{line:1,column:20},source:''},
                body: []
              }
            }
          ],
          quasis: [
            {
              type: 'TemplateElement',
              loc:{start:{line:1,column:1},end:{line:1,column:3},source:''},
              tail: false,
              value: { raw: 'a ', cooked: 'a ' }
            },
            {
              type: 'TemplateElement',
              loc:{start:{line:1,column:21},end:{line:1,column:23},source:''},
              tail: true,
              value: { raw: ' b', cooked: ' b' }
            }
          ]
        },
        property: {
          type: 'Identifier',
          loc:{start:{line:1,column:25},end:{line:1,column:31},source:''},
          name: 'length'
        },
        computed: false
      }
    }
  ]
}

tokens (13x):
       TICK_HEAD ID_async PUNC_PAREN_OPEN IDENT PUNC_PAREN_CLOSE
       PUNC_EQ_GT PUNC_CURLY_OPEN PUNC_CURLY_CLOSE TICK_TAIL PUNC_DOT
       IDENT ASI
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
`a ${async x => {}} b`.length;
````

Produces same AST
