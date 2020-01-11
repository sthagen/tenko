# Tenko parser autogenerated test case

- From: tests/testcases/assigns/to_keyword/autogen.md
- Path: tests/testcases/assigns/to_keyword/gen/assign_to_paren_wrapped_keyword_in_a_generator/static.md

> :: assigns : to keyword : gen : assign to paren wrapped keyword in a generator
>
> ::> static

## Input


`````js
function *f(){
  (static) = 1;
}
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
  loc:{start:{line:1,column:0},end:{line:3,column:1},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:3,column:1},source:''},
      generator: true,
      async: false,
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
        name: 'f'
      },
      params: [],
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:13},end:{line:3,column:1},source:''},
        body: [
          {
            type: 'ExpressionStatement',
            loc:{start:{line:2,column:2},end:{line:2,column:15},source:''},
            expression: {
              type: 'AssignmentExpression',
              loc:{start:{line:2,column:2},end:{line:2,column:14},source:''},
              left: {
                type: 'Identifier',
                loc:{start:{line:2,column:3},end:{line:2,column:9},source:''},
                name: 'static'
              },
              operator: '=',
              right: {
                type: 'Literal',
                loc:{start:{line:2,column:13},end:{line:2,column:14},source:''},
                value: 1,
                raw: '1'
              }
            }
          }
        ]
      }
    }
  ]
}

tokens (14x):
       ID_function PUNC_STAR IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN PUNC_PAREN_OPEN ID_static PUNC_PAREN_CLOSE
       PUNC_EQ NUMBER_DEC PUNC_SEMI PUNC_CURLY_CLOSE
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use this name (`static`) as a variable name because: `static` is a reserved word in strict mode

start@1:0, error@2:3
╔══╦════════════════
 1 ║ function *f(){
 2 ║   (static) = 1;
   ║    ^^^^^^------- error
 3 ║ }
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
function* f() {static = 1;}
````

Produces same AST