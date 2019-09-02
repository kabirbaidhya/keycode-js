# KeyCode Constants

[![npm version](https://img.shields.io/npm/v/keycode-js.svg?style=flat-square)](https://www.npmjs.com/package/keycode-js)
[![deno](https://img.shields.io/badge/deno-v2.0.3-green?style=flat-square)](https://deno.land/x/keycode/README.md#usagewithdeno)
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
<script src="https://unpkg.com/keycode-js@2.0.3/dist/keycode.min.js"></script>
```

Finally:

```js
window.addEventListener('keyup', function(e) {
  if (e.keyCode === KeyCode.KEY_RETURN) {
    console.log('It was the Return key.');
    return;
  }

  console.log('It was any other key.');
});
```

## Usage with Deno

```ts
// Import all constants
import * as KeyCode from 'https://deno.land/x/keycode@v2.0.3/mod.ts';

// Import individual constants
import { KEY_ENTER } from 'https://deno.land/x/keycode@v2.0.3/mod.ts';

console.assert(KeyCode.KEY_ENTER === KEY_ENTER);
```

## Available Constants

For more information [click here](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode#Constants_for_keyCode_value).

| Key Name      | Constant          | Value |
| ------------- | ----------------- | ----- |
| Cancel        | KEY_CANCEL        | 3     |
| Help          | KEY_HELP          | 6     |
| Backspace     | KEY_BACK_SPACE    | 8     |
| Tab           | KEY_TAB           | 9     |
| Clear         | KEY_CLEAR         | 12    |
| Return        | KEY_RETURN        | 13    |
| Enter         | KEY_ENTER         | 14    |
| Shift         | KEY_SHIFT         | 16    |
| Control       | KEY_CONTROL       | 17    |
| Alt           | KEY_ALT           | 18    |
| Pause         | KEY_PAUSE         | 19    |
| Caps Lock     | KEY_CAPS_LOCK     | 20    |
| Escape        | KEY_ESCAPE        | 27    |
| Space         | KEY_SPACE         | 32    |
| Page up       | KEY_PAGE_UP       | 33    |
| Page down     | KEY_PAGE_DOWN     | 34    |
| End           | KEY_END           | 35    |
| Home          | KEY_HOME          | 36    |
| Left          | KEY_LEFT          | 37    |
| Up            | KEY_UP            | 38    |
| Right         | KEY_RIGHT         | 39    |
| Down          | KEY_DOWN          | 40    |
| Print Screen  | KEY_PRINTSCREEN   | 44    |
| Insert        | KEY_INSERT        | 45    |
| Delete        | KEY_DELETE        | 46    |
| 0             | KEY_0             | 48    |
| 1             | KEY_1             | 49    |
| 2             | KEY_2             | 50    |
| 3             | KEY_3             | 51    |
| 4             | KEY_4             | 52    |
| 5             | KEY_5             | 53    |
| 6             | KEY_6             | 54    |
| 7             | KEY_7             | 55    |
| 8             | KEY_8             | 56    |
| 9             | KEY_9             | 57    |
| Semicolon     | KEY_SEMICOLON     | 59    |
| Equals        | KEY_EQUALS        | 61    |
| A             | KEY_A             | 65    |
| B             | KEY_B             | 66    |
| C             | KEY_C             | 67    |
| D             | KEY_D             | 68    |
| E             | KEY_E             | 69    |
| F             | KEY_F             | 70    |
| G             | KEY_G             | 71    |
| H             | KEY_H             | 72    |
| I             | KEY_I             | 73    |
| J             | KEY_J             | 74    |
| K             | KEY_K             | 75    |
| L             | KEY_L             | 76    |
| M             | KEY_M             | 77    |
| N             | KEY_N             | 78    |
| O             | KEY_O             | 79    |
| P             | KEY_P             | 80    |
| Q             | KEY_Q             | 81    |
| R             | KEY_R             | 82    |
| S             | KEY_S             | 83    |
| T             | KEY_T             | 84    |
| U             | KEY_U             | 85    |
| V             | KEY_V             | 86    |
| W             | KEY_W             | 87    |
| X             | KEY_X             | 88    |
| Y             | KEY_Y             | 89    |
| Z             | KEY_Z             | 90    |
| Left ⌘        | KEY_LEFT_CMD      | 91    |
| Right ⌘       | KEY_RIGHT_CMD     | 93    |
| Context Menu  | KEY_CONTEXT_MENU  | 93    |
| Numpad 0      | KEY_NUMPAD0       | 96    |
| Numpad 1      | KEY_NUMPAD1       | 97    |
| Numpad 2      | KEY_NUMPAD2       | 98    |
| Numpad 3      | KEY_NUMPAD3       | 99    |
| Numpad 4      | KEY_NUMPAD4       | 100   |
| Numpad 5      | KEY_NUMPAD5       | 101   |
| Numpad 6      | KEY_NUMPAD6       | 102   |
| Numpad 7      | KEY_NUMPAD7       | 103   |
| Numpad 8      | KEY_NUMPAD8       | 104   |
| Numpad 9      | KEY_NUMPAD9       | 105   |
| Multiply      | KEY_MULTIPLY      | 106   |
| Add           | KEY_ADD           | 107   |
| Separator     | KEY_SEPARATOR     | 108   |
| Subtract      | KEY_SUBTRACT      | 109   |
| Decimal       | KEY_DECIMAL       | 110   |
| Divide        | KEY_DIVIDE        | 111   |
| F1            | KEY_F1            | 112   |
| F2            | KEY_F2            | 113   |
| F3            | KEY_F3            | 114   |
| F4            | KEY_F4            | 115   |
| F5            | KEY_F5            | 116   |
| F6            | KEY_F6            | 117   |
| F7            | KEY_F7            | 118   |
| F8            | KEY_F8            | 119   |
| F9            | KEY_F9            | 120   |
| F10           | KEY_F10           | 121   |
| F11           | KEY_F11           | 122   |
| F12           | KEY_F12           | 123   |
| F13           | KEY_F13           | 124   |
| F14           | KEY_F14           | 125   |
| F15           | KEY_F15           | 126   |
| F16           | KEY_F16           | 127   |
| F17           | KEY_F17           | 128   |
| F18           | KEY_F18           | 129   |
| F19           | KEY_F19           | 130   |
| F20           | KEY_F20           | 131   |
| F21           | KEY_F21           | 132   |
| F22           | KEY_F22           | 133   |
| F23           | KEY_F23           | 134   |
| F24           | KEY_F24           | 135   |
| Num Lock      | KEY_NUM_LOCK      | 144   |
| Scroll Lock   | KEY_SCROLL_LOCK   | 145   |
| Comma         | KEY_COMMA         | 188   |
| Period        | KEY_PERIOD        | 190   |
| Slash         | KEY_SLASH         | 191   |
| Back Quote    | KEY_BACK_QUOTE    | 192   |
| Open Bracket  | KEY_OPEN_BRACKET  | 219   |
| Back Slash    | KEY_BACK_SLASH    | 220   |
| Close Bracket | KEY_CLOSE_BRACKET | 221   |
| Quote         | KEY_QUOTE         | 222   |
| Meta          | KEY_META          | 224   |

## Contributing

All kinds of contributions are welcome. Please feel free to propose PRs, report issues and suggestions to improve.

## Changelog

Check the [CHANGELOG](CHANGELOG.md) for full release history.

## Maintainers

- [Kabir Baidhya](https://github.com/kabirbaidhya)
- [Saugat Acharya](https://github.com/mesaugat)

## License

This package is licensed under the [MIT License](LICENSE).
