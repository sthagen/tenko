# Tenko parser test case

- Path: tests/testcases/let_declaration/while_block_let_pattern_assign.md

> :: let declaration
>
> ::> while block let pattern assign
>
> The empty object literal can still be a pattern
>
https://twitter.com/Ghost1240145716/status/1152939033439297538

## Input

`````js
while (x) let {} = y
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in five parsing modes: sloppy, sloppy+annexb, strict script, module, module+annexb.

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Unable to ASI

start@1:0, error@1:14
╔══╦═════════════════
 1 ║ while (x) let {} = y
   ║               ^------- error
╚══╩═════════════════

`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  `let` declaration not allowed here and `let` cannot be a regular var or label name in strict mode

start@1:0, error@1:10
╔══╦═════════════════
 1 ║ while (x) let {} = y
   ║           ^^^------- error
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
