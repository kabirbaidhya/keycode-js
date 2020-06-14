# KeyCode Constants

[![npm version](https://img.shields.io/npm/v/keycode-js.svg?style=flat-square)](https://www.npmjs.com/package/keycode-js)
[![deno](https://img.shields.io/badge/deno-v3.1.0-green?style=flat-square)](https://deno.land/x/keycode/README.md#usagewithdeno)
[![Build Status](https://img.shields.io/travis/kabirbaidhya/keycode-js.svg?style=flat-square)](https://travis-ci.org/kabirbaidhya/keycode-js)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/kabirbaidhya/keycode-js.svg?style=flat-square&logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/kabirbaidhya/keycode-js/context:javascript)
[![npm downloads per week](https://img.shields.io/npm/dw/keycode-js.svg?style=flat-square)](https://www.npmjs.com/package/keycode-js)
![GitHub contributors](https://img.shields.io/github/contributors/kabirbaidhya/keycode-js.svg?style=flat-square)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](#contributing)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

A minimal JavaScript package with key code constants.

## Installation

```bash
# Using npm
$ npm install keycode-js --save

# Using yarn
$ yarn add keycode-js

# Using bower
$ bower install keycode-js --save
```

## Usage

Import the package using `require()` or ES / TypeScript `import` statement:

```js
// CommonJS
const KeyCode = require('keycode-js');

// ES2015+
import * as KeyCode from 'keycode-js';

// TypeScript
import * as KeyCode from 'keycode-js';

// Import individual constants
import { KEY_RETURN } from 'keycode-js';
```

Or, using `<script>` tag:

```html
<script src="https://unpkg.com/keycode-js@3.1.0/dist/keycode.min.js"></script>
```

Finally:

```js
window.addEventListener('keyup', function(e) {
  // You may do one of these checks.

  // Check the code value.
  if (e.code === KeyCode.CODE_RETURN) {
    console.log('It was the Return key.');
    return;
  }

  // OR, check the keyCode value.
  if (e.keyCode === KeyCode.KEY_RETURN) {
    console.log('It was the Return key.');
    return;
  }

  // OR, check the key value.
  if (e.key === KeyCode.VALUE_RETURN) {
    console.log('It was the Return key.');
    return;
  }

  console.log('It was any other key.');
});
```

## Usage with Deno

```ts
// Import all constants
import * as KeyCode from 'https://deno.land/x/keycode@v3.1.0/mod.ts';

// Import individual constants
import { KEY_ENTER } from 'https://deno.land/x/keycode@v3.1.0/mod.ts';

console.assert(KeyCode.KEY_ENTER === KEY_ENTER);
```

## Available Constants

### 1. Key event code constants

List of available constants that corresponds to the browser's [`KeyboardEvent.code`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code) attribute.

[[Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values)]


**Example usage**

```js
window.addEventListener('keyup', function(e) {
  console.log('Enter Key:', (e.code === KeyCode.CODE_RETURN));
});
```

**List**

| Key Name               | Constant                   | Value              |
|------------------------|----------------------------|--------------------|
| (Undefined)            | CODE_UNIDENTIFIED          | `"Unidentified"`   |
| Escape                 | CODE_ESCAPE                | `"Escape"`         |
| Dash / Minus           | CODE_MINUS<br/>CODE_DASH   | `"Minus"`          |
| Equals                 | CODE_EQUALS                | `"Equal"`          |
| Backspace              | CODE_BACK_SPACE            | `"Backspace"`      |
| Tab                    | CODE_TAB                   | `"Tab"`            |
| Return                 | CODE_ENTER<br/>CODE_RETURN | `"Enter"`          |
| Shift (Left)           | CODE_SHIFT_LEFT            | `"ShiftLeft"`      |
| Shift (Right)          | CODE_SHIFT_RIGHT           | `"ShiftRight"`     |
| Control (Left)         | CODE_CONTROL_LEFT          | `"ControlLeft"`    |
| Control (Right)        | CODE_CONTROL_RIGHT         | `"ControlRight"`   |
| Alt (Left)             | CODE_ALT_LEFT              | `"AltLeft"`        |
| Alt (Right)            | CODE_ALT_RIGHT             | `"AltRight"`       |
| Pause                  | CODE_PAUSE                 | `"Pause"`          |
| Caps Lock              | CODE_CAPS_LOCK             | `"CapsLock"`       |
| Space                  | CODE_SPACE                 | `"Space"`          |
| Page Up                | CODE_PAGE_UP               | `"PageUp"`         |
| Page Down              | CODE_PAGE_DOWN             | `"PageDown"`       |
| End                    | CODE_END                   | `"End"`            |
| Home                   | CODE_HOME                  | `"Home"`           |
| Left                   | CODE_LEFT                  | `"ArrowLeft"`      |
| Up                     | CODE_UP                    | `"ArrowUp"`        |
| Right                  | CODE_RIGHT                 | `"ArrowRight"`     |
| Down                   | CODE_DOWN                  | `"ArrowDown"`      |
| Print Screen           | CODE_PRINTSCREEN           | `"PrintScreen"`    |
| Insert                 | CODE_INSERT                | `"Insert"`         |
| Delete                 | CODE_DELETE                | `"Delete"`         |
| 0                      | CODE_0                     | `"Digit0"`         |
| 1                      | CODE_1                     | `"Digit1"`         |
| 2                      | CODE_2                     | `"Digit2"`         |
| 3                      | CODE_3                     | `"Digit3"`         |
| 4                      | CODE_4                     | `"Digit4"`         |
| 5                      | CODE_5                     | `"Digit5"`         |
| 6                      | CODE_6                     | `"Digit6"`         |
| 7                      | CODE_7                     | `"Digit7"`         |
| 8                      | CODE_8                     | `"Digit8"`         |
| 9                      | CODE_9                     | `"Digit9"`         |
| A                      | CODE_A                     | `"KeyA"`           |
| B                      | CODE_B                     | `"KeyB"`           |
| C                      | CODE_C                     | `"KeyC"`           |
| D                      | CODE_D                     | `"KeyD"`           |
| E                      | CODE_E                     | `"KeyE"`           |
| F                      | CODE_F                     | `"KeyF"`           |
| G                      | CODE_G                     | `"KeyG"`           |
| H                      | CODE_H                     | `"KeyH"`           |
| I                      | CODE_I                     | `"KeyI"`           |
| J                      | CODE_J                     | `"KeyJ"`           |
| K                      | CODE_K                     | `"KeyK"`           |
| L                      | CODE_L                     | `"KeyL"`           |
| M                      | CODE_M                     | `"KeyM"`           |
| N                      | CODE_N                     | `"KeyN"`           |
| O                      | CODE_O                     | `"KeyO"`           |
| P                      | CODE_P                     | `"KeyP"`           |
| Q                      | CODE_Q                     | `"KeyQ"`           |
| R                      | CODE_R                     | `"KeyR"`           |
| S                      | CODE_S                     | `"KeyS"`           |
| T                      | CODE_T                     | `"KeyT"`           |
| U                      | CODE_U                     | `"KeyU"`           |
| V                      | CODE_V                     | `"KeyV"`           |
| W                      | CODE_W                     | `"KeyW"`           |
| X                      | CODE_X                     | `"KeyX"`           |
| Y                      | CODE_Y                     | `"KeyY"`           |
| Z                      | CODE_Z                     | `"KeyZ"`           |
| Cmd ⌘ / Window (Left)  | CODE_META_LEFT             | `"MetaLeft"`       |
| Cmd ⌘ / Window (Left)  | CODE_OS_LEFT               | `"OSLeft"`         |
| Cmd ⌘ / Window (Right) | CODE_META_RIGHT            | `"MetaRight"`      |
| Cmd ⌘ / Window (Right) | CODE_OS_RIGHT              | `"OSRight"`        |
| Context Menu           | CODE_CONTEXT_MENU          | `"ContextMenu"`    |
| Numpad 0               | CODE_NUMPAD0               | `"Numpad0"`        |
| Numpad 1               | CODE_NUMPAD1               | `"Numpad1"`        |
| Numpad 2               | CODE_NUMPAD2               | `"Numpad2"`        |
| Numpad 3               | CODE_NUMPAD3               | `"Numpad3"`        |
| Numpad 4               | CODE_NUMPAD4               | `"Numpad4"`        |
| Numpad 5               | CODE_NUMPAD5               | `"Numpad5"`        |
| Numpad 6               | CODE_NUMPAD6               | `"Numpad6"`        |
| Numpad 7               | CODE_NUMPAD7               | `"Numpad7"`        |
| Numpad 8               | CODE_NUMPAD8               | `"Numpad8"`        |
| Numpad 9               | CODE_NUMPAD9               | `"Numpad9"`        |
| Multiply               | CODE_NUMPAD_MULTIPLY       | `"NumpadMultiply"` |
| Add                    | CODE_NUMPAD_ADD            | `"NumpadAdd"`      |
| Subtract               | CODE_NUMPAD_SUBTRACT       | `"NumpadSubtract"` |
| Decimal                | CODE_NUMPAD_DECIMAL        | `"NumpadDecimal"`  |
| Divide                 | CODE_NUMPAD_DIVIDE         | `"NumpadDivide"`   |
| Numpad Enter           | CODE_NUMPAD_ENTER          | `"NumpadEnter"`    |
| F1                     | CODE_F1                    | `"F1"`             |
| F2                     | CODE_F2                    | `"F2"`             |
| F3                     | CODE_F3                    | `"F3"`             |
| F4                     | CODE_F4                    | `"F4"`             |
| F5                     | CODE_F5                    | `"F5"`             |
| F6                     | CODE_F6                    | `"F6"`             |
| F7                     | CODE_F7                    | `"F7"`             |
| F8                     | CODE_F8                    | `"F8"`             |
| F9                     | CODE_F9                    | `"F9"`             |
| F10                    | CODE_F10                   | `"F10"`            |
| F11                    | CODE_F11                   | `"F11"`            |
| F12                    | CODE_F12                   | `"F12"`            |
| F13                    | CODE_F13                   | `"F13"`            |
| F14                    | CODE_F14                   | `"F14"`            |
| F15                    | CODE_F15                   | `"F15"`            |
| F16                    | CODE_F16                   | `"F16"`            |
| F17                    | CODE_F17                   | `"F17"`            |
| F18                    | CODE_F18                   | `"F18"`            |
| F19                    | CODE_F19                   | `"F19"`            |
| F20                    | CODE_F20                   | `"F20"`            |
| F21                    | CODE_F21                   | `"F21"`            |
| F22                    | CODE_F22                   | `"F22"`            |
| F23                    | CODE_F23                   | `"F23"`            |
| F24                    | CODE_F24                   | `"F24"`            |
| Num Lock               | CODE_NUM_LOCK              | `"NumLock"`        |
| Scroll Lock            | CODE_SCROLL_LOCK           | `"ScrollLock"`     |
| Semicolon              | CODE_SEMICOLON             | `"Semicolon"`      |
| Comma                  | CODE_COMMA                 | `"Comma"`          |
| Period                 | CODE_PERIOD                | `"Period"`         |
| Slash                  | CODE_SLASH                 | `"Slash"`          |
| Back Quote             | CODE_BACK_QUOTE            | `"Backquote"`      |
| Open Bracket           | CODE_OPEN_BRACKET          | `"BracketLeft"`    |
| Back Slash             | CODE_BACK_SLASH            | `"Backslash"`      |
| Close Bracket          | CODE_CLOSE_BRACKET         | `"BracketRight"`   |
| Quote                  | CODE_QUOTE                 | `"Quote"`          |

### 2. Key code constants (numeric)

List of available numeric constants that corresponds to the browser's [`KeyboardEvent.keyCode`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) attribute.

[[Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode#Constants_for_keyCode_value)]

**Example usage**

```js
window.addEventListener('keyup', function(e) {
  console.log('Enter Key:', (e.keyCode === KeyCode.KEY_RETURN));
});
```

**List**

| Key Name              | Constant                | Value |
| --------------------- | ----------------------- | ----- |
| Cancel                | KEY_CANCEL              | 3     |
| Help                  | KEY_HELP                | 6     |
| Backspace             | KEY_BACK_SPACE          | 8     |
| Tab                   | KEY_TAB                 | 9     |
| Clear                 | KEY_CLEAR               | 12    |
| Return                | KEY_RETURN              | 13    |
| Enter (Firefox)       | KEY_FIREFOX_ENTER       | 14    |
| Shift                 | KEY_SHIFT               | 16    |
| Control               | KEY_CONTROL             | 17    |
| Alt                   | KEY_ALT                 | 18    |
| Pause                 | KEY_PAUSE               | 19    |
| Caps Lock             | KEY_CAPS_LOCK           | 20    |
| Escape                | KEY_ESCAPE              | 27    |
| Space                 | KEY_SPACE               | 32    |
| Page up               | KEY_PAGE_UP             | 33    |
| Page down             | KEY_PAGE_DOWN           | 34    |
| End                   | KEY_END                 | 35    |
| Home                  | KEY_HOME                | 36    |
| Left                  | KEY_LEFT                | 37    |
| Up                    | KEY_UP                  | 38    |
| Right                 | KEY_RIGHT               | 39    |
| Down                  | KEY_DOWN                | 40    |
| Print Screen          | KEY_PRINTSCREEN         | 44    |
| Insert                | KEY_INSERT              | 45    |
| Delete                | KEY_DELETE              | 46    |
| 0                     | KEY_0                   | 48    |
| 1                     | KEY_1                   | 49    |
| 2                     | KEY_2                   | 50    |
| 3                     | KEY_3                   | 51    |
| 4                     | KEY_4                   | 52    |
| 5                     | KEY_5                   | 53    |
| 6                     | KEY_6                   | 54    |
| 7                     | KEY_7                   | 55    |
| 8                     | KEY_8                   | 56    |
| 9                     | KEY_9                   | 57    |
| Semicolon (Firefox)   | KEY_FIREFOX_SEMICOLON   | 59    |
| Equals (Firefox)      | KEY_FIREFOX_EQUALS      | 61    |
| A                     | KEY_A                   | 65    |
| B                     | KEY_B                   | 66    |
| C                     | KEY_C                   | 67    |
| D                     | KEY_D                   | 68    |
| E                     | KEY_E                   | 69    |
| F                     | KEY_F                   | 70    |
| G                     | KEY_G                   | 71    |
| H                     | KEY_H                   | 72    |
| I                     | KEY_I                   | 73    |
| J                     | KEY_J                   | 74    |
| K                     | KEY_K                   | 75    |
| L                     | KEY_L                   | 76    |
| M                     | KEY_M                   | 77    |
| N                     | KEY_N                   | 78    |
| O                     | KEY_O                   | 79    |
| P                     | KEY_P                   | 80    |
| Q                     | KEY_Q                   | 81    |
| R                     | KEY_R                   | 82    |
| S                     | KEY_S                   | 83    |
| T                     | KEY_T                   | 84    |
| U                     | KEY_U                   | 85    |
| V                     | KEY_V                   | 86    |
| W                     | KEY_W                   | 87    |
| X                     | KEY_X                   | 88    |
| Y                     | KEY_Y                   | 89    |
| Z                     | KEY_Z                   | 90    |
| Left ⌘ / Window       | KEY_LEFT_CMD            | 91    |
| Right ⌘  / Window     | KEY_RIGHT_CMD           | 92    |
| Context Menu          | KEY_CONTEXT_MENU        | 93    |
| Numpad 0              | KEY_NUMPAD0             | 96    |
| Numpad 1              | KEY_NUMPAD1             | 97    |
| Numpad 2              | KEY_NUMPAD2             | 98    |
| Numpad 3              | KEY_NUMPAD3             | 99    |
| Numpad 4              | KEY_NUMPAD4             | 100   |
| Numpad 5              | KEY_NUMPAD5             | 101   |
| Numpad 6              | KEY_NUMPAD6             | 102   |
| Numpad 7              | KEY_NUMPAD7             | 103   |
| Numpad 8              | KEY_NUMPAD8             | 104   |
| Numpad 9              | KEY_NUMPAD9             | 105   |
| Multiply              | KEY_MULTIPLY            | 106   |
| Add                   | KEY_ADD                 | 107   |
| Separator (Firefox)   | KEY_FIREFOX_SEPARATOR   | 108   |
| Subtract              | KEY_SUBTRACT            | 109   |
| Decimal               | KEY_DECIMAL             | 110   |
| Divide                | KEY_DIVIDE              | 111   |
| F1                    | KEY_F1                  | 112   |
| F2                    | KEY_F2                  | 113   |
| F3                    | KEY_F3                  | 114   |
| F4                    | KEY_F4                  | 115   |
| F5                    | KEY_F5                  | 116   |
| F6                    | KEY_F6                  | 117   |
| F7                    | KEY_F7                  | 118   |
| F8                    | KEY_F8                  | 119   |
| F9                    | KEY_F9                  | 120   |
| F10                   | KEY_F10                 | 121   |
| F11                   | KEY_F11                 | 122   |
| F12                   | KEY_F12                 | 123   |
| F13                   | KEY_F13                 | 124   |
| F14                   | KEY_F14                 | 125   |
| F15                   | KEY_F15                 | 126   |
| F16                   | KEY_F16                 | 127   |
| F17                   | KEY_F17                 | 128   |
| F18                   | KEY_F18                 | 129   |
| F19                   | KEY_F19                 | 130   |
| F20                   | KEY_F20                 | 131   |
| F21                   | KEY_F21                 | 132   |
| F22                   | KEY_F22                 | 133   |
| F23                   | KEY_F23                 | 134   |
| F24                   | KEY_F24                 | 135   |
| Num Lock              | KEY_NUM_LOCK            | 144   |
| Scroll Lock           | KEY_SCROLL_LOCK         | 145   |
| Semicolon             | KEY_SEMICOLON           | 186   |
| Equals                | KEY_EQUALS              | 187   |
| Comma                 | KEY_COMMA               | 188   |
| Dash                  | KEY_DASH                | 189   |
| Period                | KEY_PERIOD              | 190   |
| Slash                 | KEY_SLASH               | 191   |
| Back Quote            | KEY_BACK_QUOTE          | 192   |
| Open Bracket          | KEY_OPEN_BRACKET        | 219   |
| Back Slash            | KEY_BACK_SLASH          | 220   |
| Close Bracket         | KEY_CLOSE_BRACKET       | 221   |
| Quote                 | KEY_QUOTE               | 222   |
| Meta (Firefox)        | KEY_FIREFOX_META        | 224   |

### 3. Key value constants

List of available constants that corresponds to the browser's [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) attribute.

**Example usage**

```js
window.addEventListener('keyup', function(e) {
  console.log('Enter Key:', (e.key === KeyCode.VALUE_RETURN));
});
```

**List**

| Key Name       | Constant                                          | Value           |
|----------------|---------------------------------------------------|-----------------|
| Cancel         | VALUE_CANCEL                                      | `"Cancel"`      |
| Help           | VALUE_HELP                                        | `"Help"`        |
| Backspace      | VALUE_BACK_SPACE                                  | `"Backspace"`   |
| Tab            | VALUE_TAB                                         | `"Tab"`         |
| Clear          | VALUE_CLEAR                                       | `"Clear"`       |
| Return         | VALUE_ENTER <br/> VALUE_RETURN                    | `"Enter"`       |
| Shift          | VALUE_SHIFT                                       | `"Shift"`       |
| Control        | VALUE_CONTROL                                     | `"Control"`     |
| Alt            | VALUE_ALT                                         | `"Alt"`         |
| Pause          | VALUE_PAUSE                                       | `"Pause"`       |
| Caps Lock      | VALUE_CAPS_LOCK                                   | `"CapsLock"`    |
| Escape         | VALUE_ESCAPE                                      | `"Escape"`      |
| Space          | VALUE_SPACE                                       | `" "`           |
| Page up        | VALUE_PAGE_UP                                     | `"PageUp"`      |
| Page down      | VALUE_PAGE_DOWN                                   | `"PageDown"`    |
| End            | VALUE_END                                         | `"End"`         |
| Home           | VALUE_HOME                                        | `"Home"`        |
| Left           | VALUE_LEFT                                        | `"ArrowLeft"`   |
| Up             | VALUE_UP                                          | `"ArrowUp"`     |
| Right          | VALUE_RIGHT                                       | `"ArrowRight"`  |
| Down           | VALUE_DOWN                                        | `"ArrowDown"`   |
| Print Screen   | VALUE_PRINTSCREEN                                 | `"PrintScreen"` |
| Insert         | VALUE_INSERT                                      | `"Insert"`      |
| Delete         | VALUE_DELETE                                      | `"Delete"`      |
| 0              | VALUE_0                                           | `"0"`           |
| 1              | VALUE_1                                           | `"1"`           |
| 2              | VALUE_2                                           | `"2"`           |
| 3              | VALUE_3                                           | `"3"`           |
| 4              | VALUE_4                                           | `"4"`           |
| 5              | VALUE_5                                           | `"5"`           |
| 6              | VALUE_6                                           | `"6"`           |
| 7              | VALUE_7                                           | `"7"`           |
| 8              | VALUE_8                                           | `"8"`           |
| 9              | VALUE_9                                           | `"9"`           |
| A              | VALUE_A                                           | `"a"`           |
| B              | VALUE_B                                           | `"b"`           |
| C              | VALUE_C                                           | `"c"`           |
| D              | VALUE_D                                           | `"d"`           |
| E              | VALUE_E                                           | `"e"`           |
| F              | VALUE_F                                           | `"f"`           |
| G              | VALUE_G                                           | `"g"`           |
| H              | VALUE_H                                           | `"h"`           |
| I              | VALUE_I                                           | `"i"`           |
| J              | VALUE_J                                           | `"j"`           |
| K              | VALUE_K                                           | `"k"`           |
| L              | VALUE_L                                           | `"l"`           |
| M              | VALUE_M                                           | `"m"`           |
| N              | VALUE_N                                           | `"n"`           |
| O              | VALUE_O                                           | `"o"`           |
| P              | VALUE_P                                           | `"p"`           |
| Q              | VALUE_Q                                           | `"q"`           |
| R              | VALUE_R                                           | `"r"`           |
| S              | VALUE_S                                           | `"s"`           |
| T              | VALUE_T                                           | `"t"`           |
| U              | VALUE_U                                           | `"u"`           |
| V              | VALUE_V                                           | `"v"`           |
| W              | VALUE_W                                           | `"w"`           |
| X              | VALUE_X                                           | `"x"`           |
| Y              | VALUE_Y                                           | `"y"`           |
| Z              | VALUE_Z                                           | `"z"`           |
| Cmd ⌘ / Window | VALUE_META<br/>VALUE_LEFT_CMD<br/>VALUE_RIGHT_CMD | `"Meta"`        |
| Context Menu   | VALUE_CONTEXT_MENU                                | `"ContextMenu"` |
| Numpad 0       | VALUE_NUMPAD0                                     | `"0"`           |
| Numpad 1       | VALUE_NUMPAD1                                     | `"1"`           |
| Numpad 2       | VALUE_NUMPAD2                                     | `"2"`           |
| Numpad 3       | VALUE_NUMPAD3                                     | `"3"`           |
| Numpad 4       | VALUE_NUMPAD4                                     | `"4"`           |
| Numpad 5       | VALUE_NUMPAD5                                     | `"5"`           |
| Numpad 6       | VALUE_NUMPAD6                                     | `"6"`           |
| Numpad 7       | VALUE_NUMPAD7                                     | `"7"`           |
| Numpad 8       | VALUE_NUMPAD8                                     | `"8"`           |
| Numpad 9       | VALUE_NUMPAD9                                     | `"9"`           |
| Multiply       | VALUE_MULTIPLY                                    | `"*"`           |
| Add            | VALUE_ADD                                         | `"+"`           |
| Subtract       | VALUE_SUBTRACT                                    | `"-"`           |
| Decimal        | VALUE_DECIMAL                                     | `"."`           |
| Divide         | VALUE_DIVIDE                                      | `"/"`           |
| F1             | VALUE_F1                                          | `"F1"`          |
| F2             | VALUE_F2                                          | `"F2"`          |
| F3             | VALUE_F3                                          | `"F3"`          |
| F4             | VALUE_F4                                          | `"F4"`          |
| F5             | VALUE_F5                                          | `"F5"`          |
| F6             | VALUE_F6                                          | `"F6"`          |
| F7             | VALUE_F7                                          | `"F7"`          |
| F8             | VALUE_F8                                          | `"F8"`          |
| F9             | VALUE_F9                                          | `"F9"`          |
| F10            | VALUE_F10                                         | `"F10"`         |
| F11            | VALUE_F11                                         | `"F11"`         |
| F12            | VALUE_F12                                         | `"F12"`         |
| F13            | VALUE_F13                                         | `"F13"`         |
| F14            | VALUE_F14                                         | `"F14"`         |
| F15            | VALUE_F15                                         | `"F15"`         |
| F16            | VALUE_F16                                         | `"F16"`         |
| F17            | VALUE_F17                                         | `"F17"`         |
| F18            | VALUE_F18                                         | `"F18"`         |
| F19            | VALUE_F19                                         | `"F19"`         |
| F20            | VALUE_F20                                         | `"F20"`         |
| F21            | VALUE_F21                                         | `"F21"`         |
| F22            | VALUE_F22                                         | `"F22"`         |
| F23            | VALUE_F23                                         | `"F23"`         |
| F24            | VALUE_F24                                         | `"F24"`         |
| Num Lock       | VALUE_NUM_LOCK                                    | `"NumLock"`     |
| Scroll Lock    | VALUE_SCROLL_LOCK                                 | `"ScrollLock"`  |
| Semicolon      | VALUE_SEMICOLON                                   | `";"`           |
| Equals         | VALUE_EQUALS                                      | `"="`           |
| Comma          | VALUE_COMMA                                       | `","`           |
| Dash           | VALUE_DASH                                        | `"-"`           |
| Period         | VALUE_PERIOD                                      | `"."`           |
| Slash          | VALUE_SLASH                                       | `"/"`           |
| Back Quote     | VALUE_BACK_QUOTE                                  | ``"`"``         |
| Open Bracket   | VALUE_OPEN_BRACKET                                | `"("`           |
| Back Slash     | VALUE_BACK_SLASH                                  | `"\"`           |
| Close Bracket  | VALUE_CLOSE_BRACKET                               | `")"`           |
| Quote          | VALUE_QUOTE                                       | `"'"`           |

## Contributing

All kinds of contributions are welcome. Please feel free to propose PRs, report issues and suggestions to improve.

## Changelog

Check the [CHANGELOG](CHANGELOG.md) for full release history.

## Maintainers

- [Kabir Baidhya](https://github.com/kabirbaidhya)
- [Saugat Acharya](https://github.com/mesaugat)

## License

This package is licensed under the [MIT License](LICENSE).
