# Tenko parser test case

- Path: tests/testcases/mixed_array2fobject_destructuring/8th_attempt_at_desturcturing_with_default_to_keyword.md

> :: mixed array2fobject destructuring
>
> ::> 8th attempt at desturcturing with default to keyword

## Input

`````js
[...{0} = c]
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in five parsing modes: sloppy, sloppy+annexb, strict script, module, module+annexb.

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Object literal keys that are strings or numbers must be a method or have a colon

start@1:0, error@1:6
╔══╦════════════════
 1 ║ [...{0} = c]
   ║       ^------- error
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