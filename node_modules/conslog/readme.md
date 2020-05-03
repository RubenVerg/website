# ConsLog

The console, rewritten from scratch.

# Usage

To install, 
```
npm install conslog
```
or
```
yarn add conslog
```

After that, there are three ways to use ConsLog. The first way is to replace the `console` object.
```javascript
delete console;
const console = require('conslog');
```
The second, semi-safe way is to move the `console` object.
```javascript
const v8 = require('v8');
const clone = obj => {
  return v8.deserialize(v8.serialize(obj));
};
const oldConsole = clone(console) // Or however you want to deepclone.
delete console;
const console = require('conslog')
```
The third, safer way, is to include it as a separate package.
```javascript
const cons = require('conslog');
```

# Functions

* `console` is ConsLog, `oldC` is the original `console`.

## `log`

```typescript
function log(msg: any, ...optionalParams?: any[]);
```

Logs to `stdout`. Works exactly like `oldC.log` except for the indentation.

## `warn`

```typescript
function warn(msg: any, head?: string, ...optionalParams?: any[]);
```

Logs to `stdout` as a warning. Prefixed with 'warn' or `head`.

## `info`

```typescript
function info(msg: any, head?: string, ...optionalParams?: any[]);
```

Logs to `stdout` as an information. Prefixed with 'info' or `head`.

## `error`

```typescript
function error(e: Error, head?: string, ...optionalParams?: any[]);
```

Logs to `stdout` as an error. Doesn't throw. Prefixed with 'err' or `head`.

## `success`

```typescript
function success(msg: any, head?: string, ...optionalParams?: any[]);
```

Logs to `stdout` as a success message. Prefixed with 'succ' or `head`.

## `fatal`

```typescript
function fatal(e: Error, head?: string, ...optionalParams?: any[]);
```

Logs to `stdout` as a fatal error. Throws. Prefixed with 'fatal' or `head`.

## `changeTheme`

```typescript
interface Theme {
  i: string[], // Info color, defaults to ["blue"]
  hi: string[],// Info prefix color, defaults to ["bgBlue", "white"]
  w: string[], // Warn color, defaults to ["yellow"]
  hw: string[],// Warn prefix color, defaults to ["bgYellow", "white"]
  e: string[], // Error color, defaults to ["red"]
  he: string[],// Error prefix color, defaults to ["bgRed", "white"]
  f: string[], // Fatal color, defaults to ["magenta"]
  hf: string[],// Fatal prefix color, defaults to ["bgMagenta", "white"]
  s: string[], // Success color, defaults to ["green"]
  hs: string[],// Success prefix color, defaults to ["bgGreen", "white"]
  c: string[], // Catched error color, defaults to ["red"]
  hc: string[],// Catched error prefix color, defaults to ["bgGreen", "white"]
  g: string[]  // Group header color, defaults to ["inverse"]
}

function changeTheme(theme: Theme);
```

Sets the color theme. See [the `colors` doc](https://npmjs.org/package/colors) for information on how to write a theme.

# Variables

## `indentationSteps`

```typescript
let indentationSteps: number = 1;
```

How many spaces to indent each time.

## `maxIndent`

```typescript
let maxIndent: number = 10;
```

The maximum indentation you can reach. Set to -1 for no limit.

## `msg`

```typescript
interface Messages {
  info: string,
  warn: string,
  error: string,
  fatal: string,
  catched: string,
  success: string,
  groupIn: string,
  groupOut: string
}

let msg: Messages = {
  info: " INFO ",
  warn: " WARN ",
  error: "  ERR ",
  fatal: "FATAL ",
  catched: "CATCH ",
  success: " SUCC ",
  groupIn: "> ",
  groupOut: "< "
}
```

The prefixes applied to the specific logging functions.

# License

MIT