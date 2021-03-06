# Tenko parser autogenerated test case

- From: tests/testcases/objects/destructuring/identifier_properties/keyword_obj_key_check/autogen.md
- Path: tests/testcases/objects/destructuring/identifier_properties/keyword_obj_key_check/gen/objlit_string_key/protected.md

> :: objects : destructuring : identifier properties : keyword obj key check : gen : objlit string key
>
> ::> protected

## Input


`````js
({"key": protected})
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
  loc:{start:{line:1,column:0},end:{line:1,column:20},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:20},source:''},
      expression: {
        type: 'ObjectExpression',
        loc:{start:{line:1,column:1},end:{line:1,column:19},source:''},
        properties: [
          {
            type: 'Property',
            loc:{start:{line:1,column:2},end:{line:1,column:18},source:''},
            key: {
              type: 'Literal',
              loc:{start:{line:1,column:2},end:{line:1,column:7},source:''},
              value: 'key',
              raw: '"key"'
            },
            kind: 'init',
            method: false,
            computed: false,
            value: {
              type: 'Identifier',
              loc:{start:{line:1,column:9},end:{line:1,column:18},source:''},
              name: 'protected'
            },
            shorthand: false
          }
        ]
      }
    }
  ]
}

tokens (9x):
       PUNC_PAREN_OPEN PUNC_CURLY_OPEN STRING_DOUBLE PUNC_COLON
       ID_protected PUNC_CURLY_CLOSE PUNC_PAREN_CLOSE ASI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use this name (`protected`) as a variable name because: Cannot use this reserved word as a variable name in strict mode

start@1:0, error@1:9
╔══╦════════════════
 1 ║ ({"key": protected})
   ║          ^^^^^^^^^------- error
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
({"key":protected});
````

Produces same AST
