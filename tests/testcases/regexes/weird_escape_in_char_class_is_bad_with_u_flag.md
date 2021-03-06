# Tenko parser test case

- Path: tests/testcases/regexes/weird_escape_in_char_class_is_bad_with_u_flag.md

> :: regexes
>
> ::> weird escape in char class is bad with u flag

## Input


`````js
/[\ ]/u
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in five parsing modes: sloppy, sloppy+annexb, strict script, module, module+annexb.

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Lexer error!
    Regex: Cannot escape ` ` in a regex char class with the u-flag; Regex contained syntax that is invalid with the u-flag but the u-flag was present

start@1:0, error@1:0
╔══╦════════════════
 1 ║ /[\ ]/u
   ║ ^^^^^^^------- error
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
