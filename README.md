# KeyCode Constants [![NPM Version][npm-image]][npm-url]
[npm-image]: https://badge.fury.io/js/keycode-js.svg
[npm-url]: https://www.npmjs.com/package/keycode-js

A minimal javascript package with Key Code constants.

## Installation

```bash
$ npm install keycode-js --save
```
## Usage
Include the package using common js `require()`:
```javascript
var KeyCode = require('keycode-js');
```
Or, using `<script>` tags:
```html
<script type="text/javascript" src="/path/to/keycode-js/dist/keycode.min.js"></script>
```
Here you go:
```javascript
window.addEventListener('keyup', function(e) {
    if (e.keyCode === KeyCode.KEY_ENTER) {
        console.log('It was the Enter key.');
    } else {
        console.log('It was any other key.');
    }
});
```
