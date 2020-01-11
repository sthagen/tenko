# Tenko parser test case

- Path: tests/testcases/await/arg_default/class_dynamic_method_inside_async_with_arg.md

> :: await : arg default
>
> ::> class dynamic method inside async with arg
>
> Await is not valid inside method args with dynamic method name

## Input

`````js
async function f() {
  class x{[x](a=await y){}}
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
  Missing function param definition closing parenthesis, found `y` instead

start@1:0, error@2:22
╔══╦═════════════════
 1 ║ async function f() {
 2 ║   class x{[x](a=await y){}}
   ║                       ^------- error
 3 ║ }
╚══╩═════════════════

`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

`````
throws: Parser error!
  Cannot use `await` as var when goal=module but found `await` outside an async function

start@1:0, error@2:22
╔══╦═════════════════
 1 ║ async function f() {
 2 ║   class x{[x](a=await y){}}
   ║                       ^------- error
 3 ║ }
╚══╩═════════════════

`````

### Sloppy mode with AnnexB

Parsed with script goal with AnnexB rules enabled and as if the code did not start with strict mode header.

_Output same as sloppy mode._

### Module goal with AnnexB

Parsed with the module goal with AnnexB rules enabled.

_Output same as module mode._