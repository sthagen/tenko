# Tenko parser test case

- Path: tests/testcases/bindings/export/multiple_exports/a_b.md

> :: bindings : export : multiple exports
>
> ::> a b
> 
> https://tc39.github.io/ecma262/#sec-module-semantics-static-semantics-early-errors
> 
> > It is a Syntax Error if the ExportedNames of ModuleItemList contains any duplicate entries.
> 
> > The duplicate ExportedNames rule implies that multiple export default ExportDeclaration items within a ModuleBody is a Syntax Error.
> 
> > It is a Syntax Error if any element of the ExportedBindings of ModuleItemList does not also occur in either the VarDeclaredNames of ModuleItemList, or the LexicallyDeclaredNames of ModuleItemList.

## Input

`````js
var a,b;
export {a};
export {b};
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in five parsing modes: sloppy, sloppy+annexb, strict script, module, module+annexb.

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  The `export` keyword can only be used with the module goal

start@1:0, error@2:0
╔══╦════════════════
 1 ║ var a,b;
 2 ║ export {a};
   ║ ^^^^^^------- error
 3 ║ export {b};
╚══╩════════════════

`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

`````
ast: {
  type: 'Program',
  loc:{start:{line:1,column:0},end:{line:3,column:11},source:''},
  body: [
    {
      type: 'VariableDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:8},source:''},
      kind: 'var',
      declarations: [
        {
          type: 'VariableDeclarator',
          loc:{start:{line:1,column:4},end:{line:1,column:5},source:''},
          id: {
            type: 'Identifier',
            loc:{start:{line:1,column:4},end:{line:1,column:5},source:''},
            name: 'a'
          },
          init: null
        },
        {
          type: 'VariableDeclarator',
          loc:{start:{line:1,column:6},end:{line:1,column:7},source:''},
          id: {
            type: 'Identifier',
            loc:{start:{line:1,column:6},end:{line:1,column:7},source:''},
            name: 'b'
          },
          init: null
        }
      ]
    },
    {
      type: 'ExportNamedDeclaration',
      loc:{start:{line:2,column:0},end:{line:2,column:11},source:''},
      specifiers: [
        {
          type: 'ExportSpecifier',
          loc:{start:{line:2,column:8},end:{line:2,column:9},source:''},
          local: {
            type: 'Identifier',
            loc:{start:{line:2,column:8},end:{line:2,column:9},source:''},
            name: 'a'
          },
          exported: {
            type: 'Identifier',
            loc:{start:{line:2,column:8},end:{line:2,column:9},source:''},
            name: 'a'
          }
        }
      ],
      declaration: null,
      source: null
    },
    {
      type: 'ExportNamedDeclaration',
      loc:{start:{line:3,column:0},end:{line:3,column:11},source:''},
      specifiers: [
        {
          type: 'ExportSpecifier',
          loc:{start:{line:3,column:8},end:{line:3,column:9},source:''},
          local: {
            type: 'Identifier',
            loc:{start:{line:3,column:8},end:{line:3,column:9},source:''},
            name: 'b'
          },
          exported: {
            type: 'Identifier',
            loc:{start:{line:3,column:8},end:{line:3,column:9},source:''},
            name: 'b'
          }
        }
      ],
      declaration: null,
      source: null
    }
  ]
}

tokens (16x):
       ID_var IDENT PUNC_COMMA IDENT PUNC_SEMI ID_export
       PUNC_CURLY_OPEN IDENT PUNC_CURLY_CLOSE PUNC_SEMI ID_export
       PUNC_CURLY_OPEN IDENT PUNC_CURLY_CLOSE PUNC_SEMI
`````

### Sloppy mode with AnnexB

Parsed with script goal with AnnexB rules enabled and as if the code did not start with strict mode header.

_Output same as sloppy mode._

### Module goal with AnnexB

Parsed with the module goal with AnnexB rules enabled.

_Output same as module mode._

## AST Printer

Printer output different from input [module][annexb:no]:

````js
var a, b;
export {a}
export {b}
````

Produces same AST