# Tenko parser autogenerated test case

- From: tests/testcases/group_or_arrow/arrow/position/autogen.md
- Path: tests/testcases/group_or_arrow/arrow/position/gen/new_arg/async_2829_3d3e_ok.md

> :: group or arrow : arrow : position : gen : new arg
>
> ::> async 2829 3d3e ok

## Input


`````js
new async () => ok
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in five parsing modes: sloppy, sloppy+annexb, strict script, module, module+annexb.

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  The `new` keyword can not be applied to an arrow

start@1:0, error@1:13
╔══╦═════════════════
 1 ║ new async () => ok
   ║              ^^------- error
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

_Output same as sloppy mode._

### Module goal with AnnexB

Parsed with the module goal with AnnexB rules enabled.

_Output same as sloppy mode._