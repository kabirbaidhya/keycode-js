const assert = require('chai').assert;

const KeyCodeLib = require('./dist/keycode.cjs.js');
const KeyCodeDist = require('./dist/keycode.min.js');

// Run tests.
test(KeyCodeLib, 'KeyCode library (Common JS / EcmaScript imported module)');
test(KeyCodeDist, 'KeyCode minified build');

/**
 * Tests for KeyCode constants.
 *
 * @param {object} importedModule
 * @param {string} description
 */
function test(importedModule, description) {
  describe(description, () => {
    it('KEY_CANCEL equals 3', () => {
      assert.equal(importedModule.KEY_CANCEL, 3);
    });

    it('KEY_HELP equals 6', () => {
      assert.equal(importedModule.KEY_HELP, 6);
    });

    it('KEY_BACK_SPACE equals 8', () => {
      assert.equal(importedModule.KEY_BACK_SPACE, 8);
    });

    it('KEY_TAB equals 9', () => {
      assert.equal(importedModule.KEY_TAB, 9);
    });

    it('KEY_CLEAR equals 12', () => {
      assert.equal(importedModule.KEY_CLEAR, 12);
    });

    it('KEY_RETURN equals 13', () => {
      assert.equal(importedModule.KEY_RETURN, 13);
    });

    it('KEY_ENTER equals 14', () => {
      assert.equal(importedModule.KEY_ENTER, 14);
    });

    it('KEY_SHIFT equals 16', () => {
      assert.equal(importedModule.KEY_SHIFT, 16);
    });

    it('KEY_CONTROL equals 17', () => {
      assert.equal(importedModule.KEY_CONTROL, 17);
    });

    it('KEY_ALT equals 18', () => {
      assert.equal(importedModule.KEY_ALT, 18);
    });

    it('KEY_PAUSE equals 19', () => {
      assert.equal(importedModule.KEY_PAUSE, 19);
    });

    it('KEY_CAPS_LOCK equals 20', () => {
      assert.equal(importedModule.KEY_CAPS_LOCK, 20);
    });

    it('KEY_ESCAPE equals 27', () => {
      assert.equal(importedModule.KEY_ESCAPE, 27);
    });

    it('KEY_SPACE equals 32', () => {
      assert.equal(importedModule.KEY_SPACE, 32);
    });

    it('KEY_PAGE_UP equals 14', () => {
      assert.equal(importedModule.KEY_PAGE_UP, 33);
    });

    it('KEY_PAGE_DOWN equals 34', () => {
      assert.equal(importedModule.KEY_PAGE_DOWN, 34);
    });

    it('KEY_END equals 35', () => {
      assert.equal(importedModule.KEY_END, 35);
    });

    it('KEY_HOME equals 36', () => {
      assert.equal(importedModule.KEY_HOME, 36);
    });

    it('KEY_LEFT equals 37', () => {
      assert.equal(importedModule.KEY_LEFT, 37);
    });

    it('KEY_UP equals 38', () => {
      assert.equal(importedModule.KEY_UP, 38);
    });

    it('KEY_RIGHT equals 39', () => {
      assert.equal(importedModule.KEY_RIGHT, 39);
    });

    it('KEY_DOWN equals 40', () => {
      assert.equal(importedModule.KEY_DOWN, 40);
    });

    it('KEY_PRINTSCREEN equals 44', () => {
      assert.equal(importedModule.KEY_PRINTSCREEN, 44);
    });

    it('KEY_INSERT equals 45', () => {
      assert.equal(importedModule.KEY_INSERT, 45);
    });

    it('KEY_DELETE equals 46', () => {
      assert.equal(importedModule.KEY_DELETE, 46);
    });

    it('KEY_0 equals 48', () => {
      assert.equal(importedModule.KEY_0, 48);
    });

    it('KEY_1 equals 49', () => {
      assert.equal(importedModule.KEY_1, 49);
    });

    it('KEY_2 equals 50', () => {
      assert.equal(importedModule.KEY_2, 50);
    });

    it('KEY_3 equals 51', () => {
      assert.equal(importedModule.KEY_3, 51);
    });

    it('KEY_4 equals 52', () => {
      assert.equal(importedModule.KEY_4, 52);
    });

    it('KEY_5 equals 53', () => {
      assert.equal(importedModule.KEY_5, 53);
    });

    it('KEY_6 equals 54', () => {
      assert.equal(importedModule.KEY_6, 54);
    });

    it('KEY_7 equals 55', () => {
      assert.equal(importedModule.KEY_7, 55);
    });

    it('KEY_8 equals 56', () => {
      assert.equal(importedModule.KEY_8, 56);
    });

    it('KEY_9 equals 57', () => {
      assert.equal(importedModule.KEY_9, 57);
    });

    it('KEY_SEMICOLON equals 59', () => {
      assert.equal(importedModule.KEY_SEMICOLON, 59);
    });

    it('KEY_EQUALS equals 61', () => {
      assert.equal(importedModule.KEY_EQUALS, 61);
    });

    it('KEY_A equals 65', () => {
      assert.equal(importedModule.KEY_A, 65);
    });

    it('KEY_B equals 66', () => {
      assert.equal(importedModule.KEY_B, 66);
    });

    it('KEY_C equals 67', () => {
      assert.equal(importedModule.KEY_C, 67);
    });

    it('KEY_D equals 68', () => {
      assert.equal(importedModule.KEY_D, 68);
    });

    it('KEY_E equals 69', () => {
      assert.equal(importedModule.KEY_E, 69);
    });

    it('KEY_F equals 70', () => {
      assert.equal(importedModule.KEY_F, 70);
    });

    it('KEY_G equals 71', () => {
      assert.equal(importedModule.KEY_G, 71);
    });

    it('KEY_H equals 72', () => {
      assert.equal(importedModule.KEY_H, 72);
    });

    it('KEY_I equals 73', () => {
      assert.equal(importedModule.KEY_I, 73);
    });

    it('KEY_J equals 74', () => {
      assert.equal(importedModule.KEY_J, 74);
    });

    it('KEY_K equals 75', () => {
      assert.equal(importedModule.KEY_K, 75);
    });

    it('KEY_L equals 76', () => {
      assert.equal(importedModule.KEY_L, 76);
    });

    it('KEY_M equals 77', () => {
      assert.equal(importedModule.KEY_M, 77);
    });

    it('KEY_N equals 78', () => {
      assert.equal(importedModule.KEY_N, 78);
    });

    it('KEY_O equals 79', () => {
      assert.equal(importedModule.KEY_O, 79);
    });

    it('KEY_P equals 80', () => {
      assert.equal(importedModule.KEY_P, 80);
    });

    it('KEY_Q equals 81', () => {
      assert.equal(importedModule.KEY_Q, 81);
    });

    it('KEY_R equals 82', () => {
      assert.equal(importedModule.KEY_R, 82);
    });

    it('KEY_S equals 83', () => {
      assert.equal(importedModule.KEY_S, 83);
    });

    it('KEY_T equals 84', () => {
      assert.equal(importedModule.KEY_T, 84);
    });

    it('KEY_U equals 85', () => {
      assert.equal(importedModule.KEY_U, 85);
    });

    it('KEY_V equals 86', () => {
      assert.equal(importedModule.KEY_V, 86);
    });

    it('KEY_W equals 87', () => {
      assert.equal(importedModule.KEY_W, 87);
    });

    it('KEY_X equals 88', () => {
      assert.equal(importedModule.KEY_X, 88);
    });

    it('KEY_Y equals 89', () => {
      assert.equal(importedModule.KEY_Y, 89);
    });

    it('KEY_Z equals 90', () => {
      assert.equal(importedModule.KEY_Z, 90);
    });

    it('KEY_LEFT_CMD equals 91', () => {
      assert.equal(importedModule.KEY_LEFT_CMD, 91);
    });

    it('KEY_RIGHT_CMD equals 93', () => {
      assert.equal(importedModule.KEY_RIGHT_CMD, 93);
    });

    it('KEY_CONTEXT_MENU equals 93', () => {
      assert.equal(importedModule.KEY_CONTEXT_MENU, 93);
    });

    it('KEY_NUMPAD0 equals 96', () => {
      assert.equal(importedModule.KEY_NUMPAD0, 96);
    });

    it('KEY_NUMPAD1 equals 97', () => {
      assert.equal(importedModule.KEY_NUMPAD1, 97);
    });

    it('KEY_NUMPAD2 equals 98', () => {
      assert.equal(importedModule.KEY_NUMPAD2, 98);
    });

    it('KEY_NUMPAD3 equals 99', () => {
      assert.equal(importedModule.KEY_NUMPAD3, 99);
    });

    it('KEY_NUMPAD4 equals 100', () => {
      assert.equal(importedModule.KEY_NUMPAD4, 100);
    });

    it('KEY_NUMPAD5 equals 101', () => {
      assert.equal(importedModule.KEY_NUMPAD5, 101);
    });

    it('KEY_NUMPAD6 equals 102', () => {
      assert.equal(importedModule.KEY_NUMPAD6, 102);
    });

    it('KEY_NUMPAD7 equals 103', () => {
      assert.equal(importedModule.KEY_NUMPAD7, 103);
    });

    it('KEY_NUMPAD8 equals 104', () => {
      assert.equal(importedModule.KEY_NUMPAD8, 104);
    });

    it('KEY_NUMPAD9 equals 105', () => {
      assert.equal(importedModule.KEY_NUMPAD9, 105);
    });

    it('KEY_MULTIPLY equals 106', () => {
      assert.equal(importedModule.KEY_MULTIPLY, 106);
    });

    it('KEY_ADD equals 107', () => {
      assert.equal(importedModule.KEY_ADD, 107);
    });

    it('KEY_SEPARATOR equals 108', () => {
      assert.equal(importedModule.KEY_SEPARATOR, 108);
    });

    it('KEY_SUBTRACT equals 109', () => {
      assert.equal(importedModule.KEY_SUBTRACT, 109);
    });

    it('KEY_DECIMAL equals 110', () => {
      assert.equal(importedModule.KEY_DECIMAL, 110);
    });

    it('KEY_DIVIDE equals 111', () => {
      assert.equal(importedModule.KEY_DIVIDE, 111);
    });

    it('KEY_F1 equals 112', () => {
      assert.equal(importedModule.KEY_F1, 112);
    });

    it('KEY_F2 equals 113', () => {
      assert.equal(importedModule.KEY_F2, 113);
    });

    it('KEY_F3 equals 114', () => {
      assert.equal(importedModule.KEY_F3, 114);
    });

    it('KEY_F4 equals 115', () => {
      assert.equal(importedModule.KEY_F4, 115);
    });

    it('KEY_F5 equals 116', () => {
      assert.equal(importedModule.KEY_F5, 116);
    });

    it('KEY_F6 equals 117', () => {
      assert.equal(importedModule.KEY_F6, 117);
    });

    it('KEY_F7 equals 118', () => {
      assert.equal(importedModule.KEY_F7, 118);
    });

    it('KEY_F8 equals 119', () => {
      assert.equal(importedModule.KEY_F8, 119);
    });

    it('KEY_F9 equals 120', () => {
      assert.equal(importedModule.KEY_F9, 120);
    });

    it('KEY_F10 equals 121', () => {
      assert.equal(importedModule.KEY_F10, 121);
    });

    it('KEY_F11 equals 122', () => {
      assert.equal(importedModule.KEY_F11, 122);
    });

    it('KEY_F12 equals 123', () => {
      assert.equal(importedModule.KEY_F12, 123);
    });

    it('KEY_F13 equals 124', () => {
      assert.equal(importedModule.KEY_F13, 124);
    });

    it('KEY_F14 equals 125', () => {
      assert.equal(importedModule.KEY_F14, 125);
    });

    it('KEY_F15 equals 126', () => {
      assert.equal(importedModule.KEY_F15, 126);
    });

    it('KEY_F16 equals 127', () => {
      assert.equal(importedModule.KEY_F16, 127);
    });

    it('KEY_F17 equals 128', () => {
      assert.equal(importedModule.KEY_F17, 128);
    });

    it('KEY_F18 equals 129', () => {
      assert.equal(importedModule.KEY_F18, 129);
    });

    it('KEY_F19 equals 130', () => {
      assert.equal(importedModule.KEY_F19, 130);
    });

    it('KEY_F20 equals 131', () => {
      assert.equal(importedModule.KEY_F20, 131);
    });

    it('KEY_F21 equals 132', () => {
      assert.equal(importedModule.KEY_F21, 132);
    });

    it('KEY_F22 equals 133', () => {
      assert.equal(importedModule.KEY_F22, 133);
    });

    it('KEY_F23 equals 134', () => {
      assert.equal(importedModule.KEY_F23, 134);
    });

    it('KEY_F24 equals 135', () => {
      assert.equal(importedModule.KEY_F24, 135);
    });

    it('KEY_NUM_LOCK equals 144', () => {
      assert.equal(importedModule.KEY_NUM_LOCK, 144);
    });

    it('KEY_SCROLL_LOCK equals 145', () => {
      assert.equal(importedModule.KEY_SCROLL_LOCK, 145);
    });

    it('KEY_COMMA equals 188', () => {
      assert.equal(importedModule.KEY_COMMA, 188);
    });

    it('KEY_PERIOD equals 190', () => {
      assert.equal(importedModule.KEY_PERIOD, 190);
    });

    it('KEY_SLASH equals 191', () => {
      assert.equal(importedModule.KEY_SLASH, 191);
    });

    it('KEY_BACK_QUOTE equals 192', () => {
      assert.equal(importedModule.KEY_BACK_QUOTE, 192);
    });

    it('KEY_OPEN_BRACKET equals 219', () => {
      assert.equal(importedModule.KEY_OPEN_BRACKET, 219);
    });

    it('KEY_BACK_SLASH equals 220', () => {
      assert.equal(importedModule.KEY_BACK_SLASH, 220);
    });

    it('KEY_CLOSE_BRACKET equals 221', () => {
      assert.equal(importedModule.KEY_CLOSE_BRACKET, 221);
    });

    it('KEY_QUOTE equals 222', () => {
      assert.equal(importedModule.KEY_QUOTE, 222);
    });

    it('KEY_META equals 224', () => {
      assert.equal(importedModule.KEY_META, 224);
    });
  });
}
