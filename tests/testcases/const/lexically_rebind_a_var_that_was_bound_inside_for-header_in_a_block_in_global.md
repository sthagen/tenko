# Tenko parser test case

- Path: tests/testcases/const/lexically_rebind_a_var_that_was_bound_inside_for-header_in_a_block_in_global.md

> :: const
>
> ::> lexically rebind a var that was bound inside for-header in a block in global
>
> it is definitely an error in a block
>
> https://tc39.github.io/ecma262/#sec-block-static-semantics-early-errors
>
> > It is a Syntax Error if any element of the LexicallyDeclaredNames of StatementList also occurs in the VarDeclaredNames of StatementList.
>
> And basically, the var names of a for-header with `var` decl contribute to the block list so this should be an error.

## Input

`````js
{ 
  for (var x;;); 
  const x = 1 
}
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in five parsing modes: sloppy, sloppy+annexb, strict script, module, module+annexb.

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Attempted to create a lexical binding for `x` but another binding already existed on the same level

start@1:0, error@3:8
╔══╦════════════════
 1 ║ {
 2 ║   for (var x;;);
 3 ║   const x = 1
   ║         ^------- error
 4 ║ }
╚══╩════════════════

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
