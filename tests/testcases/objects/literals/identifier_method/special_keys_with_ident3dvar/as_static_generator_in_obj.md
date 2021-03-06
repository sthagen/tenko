# Tenko parser test case

- Path: tests/testcases/objects/literals/identifier_method/special_keys_with_ident3dvar/as_static_generator_in_obj.md

> :: objects : literals : identifier method : special keys with ident3dvar
>
> ::> as static generator in obj
>
> not because static generator but because static in object

## Input

`````js
({static * var(){}});
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in five parsing modes: sloppy, sloppy+annexb, strict script, module, module+annexb.

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Object members can not be "static"

start@1:0, error@1:2
╔══╦════════════════
 1 ║ ({static * var(){}});
   ║   ^^^^^^^^------- error
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
