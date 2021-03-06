# Tenko parser test case

- Path: tests/testcases/yield/regular_func_args/yield_as_rhs_with_arg.md

> :: yield : regular func args
>
> ::> yield as rhs with arg
>
> yield inside generator is never a var

## Input


`````js
function *g() { function f(x = x + yield y) {}; }
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in five parsing modes: sloppy, sloppy+annexb, strict script, module, module+annexb.

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Missing function param definition closing parenthesis, found `y` instead

start@1:0, error@1:41
╔══╦═════════════════
 1 ║ function *g() { function f(x = x + yield y) {}; }
   ║                                          ^------- error
╚══╩═════════════════

`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use `yield` outside of generator functions when in strict mode

start@1:0, error@1:35
╔══╦═════════════════
 1 ║ function *g() { function f(x = x + yield y) {}; }
   ║                                    ^^^^^------- error
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
