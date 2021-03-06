# Tenko parser autogenerated test case

- From: tests/testcases/regexes/u-escape/annexb/quad-ok/autogen.md
- Path: tests/testcases/regexes/u-escape/annexb/quad-ok/gen/without_u-flag/2f5ba-5cuD83D5cuDCA9-05d2f.md

> :: regexes : u-escape : annexb : quad-ok : gen : without u-flag
>
> ::> 2f5ba-5cuD83D5cuDCA9-05d2f

## Input


`````js
/[a-\uD83D\uDCA9-0]/
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in five parsing modes: sloppy, sloppy+annexb, strict script, module, module+annexb.

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Lexer error!
    Regex: A double unicode quad escape that represents a surrogate pair in char class or group name is only valid with u-flag; Encountered incorrect range (left>right, 56489 > 48, 0xdca9 > 0x30) when parsing as if without u-flag; Regex contained syntax that is only valid with the u-flag but the u-flag was not present

start@1:0, error@1:0
╔══╦════════════════
 1 ║ /[a-\uD83D\uDCA9-0]/
   ║ ^^^^^^^^^^^^^^^^^^^^------- error
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
