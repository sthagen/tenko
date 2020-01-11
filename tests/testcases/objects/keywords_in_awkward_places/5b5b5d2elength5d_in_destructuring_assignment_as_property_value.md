# Tenko parser test case

- Path: tests/testcases/objects/keywords_in_awkward_places/5b5b5d2elength5d_in_destructuring_assignment_as_property_value.md

> :: objects : keywords in awkward places
>
> ::> 5b5b5d2elength5d in destructuring assignment as property value
>
> property is valid assignment target so should work

## Input

`````js
({x: [].length} = x);
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
  loc:{start:{line:1,column:0},end:{line:1,column:21},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:21},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:1},end:{line:1,column:19},source:''},
        left: {
          type: 'ObjectPattern',
          loc:{start:{line:1,column:1},end:{line:1,column:15},source:''},
          properties: [
            {
              type: 'Property',
              loc:{start:{line:1,column:2},end:{line:1,column:14},source:''},
              key: {
                type: 'Identifier',
                loc:{start:{line:1,column:2},end:{line:1,column:3},source:''},
                name: 'x'
              },
              kind: 'init',
              method: false,
              computed: false,
              value: {
                type: 'MemberExpression',
                loc:{start:{line:1,column:5},end:{line:1,column:14},source:''},
                object: {
                  type: 'ArrayExpression',
                  loc:{start:{line:1,column:5},end:{line:1,column:7},source:''},
                  elements: []
                },
                property: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:8},end:{line:1,column:14},source:''},
                  name: 'length'
                },
                computed: false
              },
              shorthand: false
            }
          ]
        },
        operator: '=',
        right: {
          type: 'Identifier',
          loc:{start:{line:1,column:18},end:{line:1,column:19},source:''},
          name: 'x'
        }
      }
    }
  ]
}

tokens (14x):
       PUNC_PAREN_OPEN PUNC_CURLY_OPEN IDENT PUNC_COLON
       PUNC_BRACKET_OPEN PUNC_BRACKET_CLOSE PUNC_DOT IDENT
       PUNC_CURLY_CLOSE PUNC_EQ IDENT PUNC_PAREN_CLOSE PUNC_SEMI
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
({x:[].length} = x);
````

Produces same AST