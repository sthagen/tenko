# Tenko parser test case

- Path: tests/testcases/var/binding_generic/reserved_words/strict_mode_keyword33dimplements/catch_clause.md

> :: var : binding generic : reserved words : strict mode keyword33dimplements
>
> ::> catch clause

## Input

`````js
try {} catch (implements) {}
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
  loc:{start:{line:1,column:0},end:{line:1,column:28},source:''},
  body: [
    {
      type: 'TryStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:28},source:''},
      block: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:4},end:{line:1,column:6},source:''},
        body: []
      },
      handler: {
        type: 'CatchClause',
        loc:{start:{line:1,column:7},end:{line:1,column:28},source:''},
        param: {
          type: 'Identifier',
          loc:{start:{line:1,column:14},end:{line:1,column:24},source:''},
          name: 'implements'
        },
        body: {
          type: 'BlockStatement',
          loc:{start:{line:1,column:26},end:{line:1,column:28},source:''},
          body: []
        }
      },
      finalizer: null
    }
  ]
}

tokens (10x):
       ID_try PUNC_CURLY_OPEN PUNC_CURLY_CLOSE ID_catch
       PUNC_PAREN_OPEN ID_implements PUNC_PAREN_CLOSE PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use this name (`implements`) as a variable name because: Cannot use this reserved word as a variable name in strict mode

start@1:0, error@1:14
╔══╦═════════════════
 1 ║ try {} catch (implements) {}
   ║               ^^^^^^^^^^------- error
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