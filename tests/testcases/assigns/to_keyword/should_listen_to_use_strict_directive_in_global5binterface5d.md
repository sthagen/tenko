# Tenko parser test case

- Path: tests/testcases/assigns/to_keyword/should_listen_to_use_strict_directive_in_global5binterface5d.md

> :: assigns : to keyword
>
> ::> should listen to use strict directive in global5binterface5d

## Input

`````js
"use strict"; (interface = "sentinal 535426");
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in five parsing modes: sloppy, sloppy+annexb, strict script, module, module+annexb.

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Cannot use this name (`interface`) as a variable name because: Cannot use this reserved word as a variable name in strict mode

start@1:0, error@1:15
╔══╦═════════════════
 1 ║ "use strict"; (interface = "sentinal 535426");
   ║                ^^^^^^^^^------- error
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