# Tenko parser test case

- Path: tests/testcases/for_statement/for-in/web_compat/var_with_init_left_of_60in60.md

> :: for statement : for-in : web compat
>
> ::> var with init left of 60in60
>
> this is an annexB web compat thing and only valid in sloppy mode
>
> https://tc39.github.io/ecma262/#sec-initializers-in-forin-statement-heads
> 
> https://tc39.github.io/ecma262/#sec-iteration-statements
> 
> - for ( var ForBinding[?Yield, ?Await] in Expression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
> 
> https://tc39.github.io/ecma262/#sec-initializers-in-forin-statement-heads
> 
> The following augments the IterationStatement;
> 
> - IterationStatement[Yield, Await, Return]:
>   - for ( var BindingIdentifier[?Yield, ?Await] Initializer[~In, ?Yield, ?Await] in Expression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
> 
> (note that Expression also has comma-expression, there is no "Expressions" production)

## Input

`````js
for (var a = b in c);
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in five parsing modes: sloppy, sloppy+annexb, strict script, module, module+annexb.

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  For-in and for-of binding can not have an init

start@1:0, error@1:15
╔══╦═════════════════
 1 ║ for (var a = b in c);
   ║                ^^------- error
╚══╩═════════════════

`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

_Output same as sloppy mode._

### Sloppy mode with AnnexB

Parsed with script goal with AnnexB rules enabled and as if the code did not start with strict mode header.

`````
ast: {
  type: 'Program',
  loc:{start:{line:1,column:0},end:{line:1,column:21},source:''},
  body: [
    {
      type: 'ForInStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:21},source:''},
      left: {
        type: 'VariableDeclaration',
        loc:{start:{line:1,column:5},end:{line:1,column:14},source:''},
        kind: 'var',
        declarations: [
          {
            type: 'VariableDeclarator',
            loc:{start:{line:1,column:9},end:{line:1,column:14},source:''},
            id: {
              type: 'Identifier',
              loc:{start:{line:1,column:9},end:{line:1,column:10},source:''},
              name: 'a'
            },
            init: {
              type: 'Identifier',
              loc:{start:{line:1,column:13},end:{line:1,column:14},source:''},
              name: 'b'
            }
          }
        ]
      },
      right: {
        type: 'Identifier',
        loc:{start:{line:1,column:18},end:{line:1,column:19},source:''},
        name: 'c'
      },
      body: {
        type: 'EmptyStatement',
        loc:{start:{line:1,column:20},end:{line:1,column:21},source:''}
      }
    }
  ]
}

tokens (11x):
       ID_for PUNC_PAREN_OPEN ID_var IDENT PUNC_EQ IDENT ID_in IDENT
       PUNC_PAREN_CLOSE PUNC_SEMI
`````

### Module goal with AnnexB

Parsed with the module goal with AnnexB rules enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [sloppy][annexb:yes]:

````js
for (var a = b in c) ;
````

Produces same AST
