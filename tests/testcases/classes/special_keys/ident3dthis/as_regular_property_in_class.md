# Tenko parser test case

- Path: tests/testcases/classes/special_keys/ident3dthis/as_regular_property_in_class.md

> :: classes : special keys : ident3dthis
>
> ::> as regular property in class
>
> we will have to revisit this with class properties later

## Input

`````js
class x {this: x}
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in five parsing modes: sloppy, sloppy+annexb, strict script, module, module+annexb.

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Either the current modifier is unknown or the input that followed was unexpected

start@1:0, error@1:13
╔══╦═════════════════
 1 ║ class x {this: x}
   ║              ^------- error
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
