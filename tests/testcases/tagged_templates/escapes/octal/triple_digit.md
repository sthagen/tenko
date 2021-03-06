# Tenko parser test case

- Path: tests/testcases/tagged_templates/escapes/octal/triple_digit.md

> :: tagged templates : escapes : octal
>
> ::> triple digit
>
> Octals are never allowed in templates and considered bad escapes in tagged templates (.value and .rawValue should be null)

## PASS

## Input

`````js
tag`\123`
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
  loc:{start:{line:1,column:0},end:{line:1,column:9},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:9},source:''},
      expression: {
        type: 'TaggedTemplateExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:9},source:''},
        tag: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:3},source:''},
          name: 'tag'
        },
        quasi: {
          type: 'TemplateLiteral',
          loc:{start:{line:1,column:3},end:{line:1,column:9},source:''},
          expressions: [],
          quasis: [
            {
              type: 'TemplateElement',
              loc:{start:{line:1,column:4},end:{line:1,column:8},source:''},
              tail: true,
              value: { raw: '\\123', cooked: null }
            }
          ]
        }
      }
    }
  ]
}

tokens (4x):
       IDENT TICK_BAD_PURE ASI
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
(tag)`\123`;
````

Produces same AST
