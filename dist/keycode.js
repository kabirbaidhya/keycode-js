window["KeyCode"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(/*! ./lib/KeyCode.js */ 1).default;

/***/ },
/* 1 */
/*!************************!*\
  !*** ./lib/KeyCode.js ***!
  \************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function () {
	
	    function KeyCode() {}
	
	    KeyCode.KEY_CANCEL = 3;
	    KeyCode.KEY_HELP = 6;
	    KeyCode.KEY_BACK_SPACE = 8;
	    KeyCode.KEY_TAB = 9;
	    KeyCode.KEY_CLEAR = 12;
	    KeyCode.KEY_RETURN = 13;
	    KeyCode.KEY_ENTER = 14;
	    KeyCode.KEY_SHIFT = 16;
	    KeyCode.KEY_CONTROL = 17;
	    KeyCode.KEY_ALT = 18;
	    KeyCode.KEY_PAUSE = 19;
	    KeyCode.KEY_CAPS_LOCK = 20;
	    KeyCode.KEY_ESCAPE = 27;
	    KeyCode.KEY_SPACE = 32;
	    KeyCode.KEY_PAGE_UP = 33;
	    KeyCode.KEY_PAGE_DOWN = 34;
	    KeyCode.KEY_END = 35;
	    KeyCode.KEY_HOME = 36;
	    KeyCode.KEY_LEFT = 37;
	    KeyCode.KEY_UP = 38;
	    KeyCode.KEY_RIGHT = 39;
	    KeyCode.KEY_DOWN = 40;
	    KeyCode.KEY_PRINTSCREEN = 44;
	    KeyCode.KEY_INSERT = 45;
	    KeyCode.KEY_DELETE = 46;
	    KeyCode.KEY_0 = 48;
	    KeyCode.KEY_1 = 49;
	    KeyCode.KEY_2 = 50;
	    KeyCode.KEY_3 = 51;
	    KeyCode.KEY_4 = 52;
	    KeyCode.KEY_5 = 53;
	    KeyCode.KEY_6 = 54;
	    KeyCode.KEY_7 = 55;
	    KeyCode.KEY_8 = 56;
	    KeyCode.KEY_9 = 57;
	    KeyCode.KEY_SEMICOLON = 59;
	    KeyCode.KEY_EQUALS = 61;
	    KeyCode.KEY_A = 65;
	    KeyCode.KEY_B = 66;
	    KeyCode.KEY_C = 67;
	    KeyCode.KEY_D = 68;
	    KeyCode.KEY_E = 69;
	    KeyCode.KEY_F = 70;
	    KeyCode.KEY_G = 71;
	    KeyCode.KEY_H = 72;
	    KeyCode.KEY_I = 73;
	    KeyCode.KEY_J = 74;
	    KeyCode.KEY_K = 75;
	    KeyCode.KEY_L = 76;
	    KeyCode.KEY_M = 77;
	    KeyCode.KEY_N = 78;
	    KeyCode.KEY_O = 79;
	    KeyCode.KEY_P = 80;
	    KeyCode.KEY_Q = 81;
	    KeyCode.KEY_R = 82;
	    KeyCode.KEY_S = 83;
	    KeyCode.KEY_T = 84;
	    KeyCode.KEY_U = 85;
	    KeyCode.KEY_V = 86;
	    KeyCode.KEY_W = 87;
	    KeyCode.KEY_X = 88;
	    KeyCode.KEY_Y = 89;
	    KeyCode.KEY_Z = 90;
	    KeyCode.KEY_CONTEXT_MENU = 93;
	    KeyCode.KEY_NUMPAD0 = 96;
	    KeyCode.KEY_NUMPAD1 = 97;
	    KeyCode.KEY_NUMPAD2 = 98;
	    KeyCode.KEY_NUMPAD3 = 99;
	    KeyCode.KEY_NUMPAD4 = 100;
	    KeyCode.KEY_NUMPAD5 = 101;
	    KeyCode.KEY_NUMPAD6 = 102;
	    KeyCode.KEY_NUMPAD7 = 103;
	    KeyCode.KEY_NUMPAD8 = 104;
	    KeyCode.KEY_NUMPAD9 = 105;
	    KeyCode.KEY_MULTIPLY = 106;
	    KeyCode.KEY_ADD = 107;
	    KeyCode.KEY_SEPARATOR = 108;
	    KeyCode.KEY_SUBTRACT = 109;
	    KeyCode.KEY_DECIMAL = 110;
	    KeyCode.KEY_DIVIDE = 111;
	    KeyCode.KEY_F1 = 112;
	    KeyCode.KEY_F2 = 113;
	    KeyCode.KEY_F3 = 114;
	    KeyCode.KEY_F4 = 115;
	    KeyCode.KEY_F5 = 116;
	    KeyCode.KEY_F6 = 117;
	    KeyCode.KEY_F7 = 118;
	    KeyCode.KEY_F8 = 119;
	    KeyCode.KEY_F9 = 120;
	    KeyCode.KEY_F10 = 121;
	    KeyCode.KEY_F11 = 122;
	    KeyCode.KEY_F12 = 123;
	    KeyCode.KEY_F13 = 124;
	    KeyCode.KEY_F14 = 125;
	    KeyCode.KEY_F15 = 126;
	    KeyCode.KEY_F16 = 127;
	    KeyCode.KEY_F17 = 128;
	    KeyCode.KEY_F18 = 129;
	    KeyCode.KEY_F19 = 130;
	    KeyCode.KEY_F20 = 131;
	    KeyCode.KEY_F21 = 132;
	    KeyCode.KEY_F22 = 133;
	    KeyCode.KEY_F23 = 134;
	    KeyCode.KEY_F24 = 135;
	    KeyCode.KEY_NUM_LOCK = 144;
	    KeyCode.KEY_SCROLL_LOCK = 145;
	    KeyCode.KEY_COMMA = 188;
	    KeyCode.KEY_PERIOD = 190;
	    KeyCode.KEY_SLASH = 191;
	    KeyCode.KEY_BACK_QUOTE = 192;
	    KeyCode.KEY_OPEN_BRACKET = 219;
	    KeyCode.KEY_BACK_SLASH = 220;
	    KeyCode.KEY_CLOSE_BRACKET = 221;
	    KeyCode.KEY_QUOTE = 222;
	    KeyCode.KEY_META = 224;
	
	    return KeyCode;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=keycode.js.map