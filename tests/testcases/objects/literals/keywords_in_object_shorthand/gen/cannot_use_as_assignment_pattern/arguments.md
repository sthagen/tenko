# Tenko parser autogenerated test case

- From: tests/testcases/objects/literals/keywords_in_object_shorthand/autogen.md
- Path: tests/testcases/objects/literals/keywords_in_object_shorthand/gen/cannot_use_as_assignment_pattern/arguments.md

> :: objects : literals : keywords in object shorthand : gen : cannot use as assignment pattern
>
> ::> arguments

## Input


`````js
({arguments} = x);
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
        loc:{start:{line:1,column:1},end:{line:1,column:16},source:''},
        left: {
          type: 'ObjectPattern',
          loc:{start:{line:1,column:1},end:{line:1,column:12},source:''},
          properties: [
            {
              type: 'Property',
              loc:{start:{line:1,column:2},end:{line:1,column:11},source:''},
              key: {
                type: 'Identifier',
                loc:{start:{line:1,column:2},end:{line:1,column:11},source:''},
                name: 'arguments'
              },
              kind: 'init',
              method: false,
              computed: false,
              value: {
                type: 'Identifier',
                loc:{start:{line:1,column:2},end:{line:1,column:11},source:''},
                name: 'arguments'
              },
              shorthand: true
            }
          ]
        },
        operator: '=',
        right: {
          type: 'Identifier',
          loc:{start:{line:1,column:15},end:{line:1,column:16},source:''},
          name: 'x'
        }
      }
    }
  ]
}

tokens (9x):
       PUNC_PAREN_OPEN PUNC_CURLY_OPEN ID_arguments PUNC_CURLY_CLOSE
       PUNC_EQ IDENT PUNC_PAREN_CLOSE PUNC_SEMI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Tried to destructure something that is not destructible

start@1:0, error@1:13
╔══╦═════════════════
 1 ║ ({arguments} = x);
   ║              ^------- error
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

Printer output was same as input [sloppy][annexb:no]
