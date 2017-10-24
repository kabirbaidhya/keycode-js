const assert = require('chai').assert;
const KeyCode = require('../index');

/**
 * KeyCode test.
 */
describe('KeyCode', () => {
    it('KEY_CANCEL equals 3', () => {
        assert.equal(KeyCode.KEY_CANCEL, 3);
    });

    it('KEY_HELP equals 6', () => {
        assert.equal(KeyCode.KEY_HELP, 6);
    });

    it('KEY_BACK_SPACE equals 8', () => {
        assert.equal(KeyCode.KEY_BACK_SPACE, 8);
    });

    it('KEY_TAB equals 9', () => {
        assert.equal(KeyCode.KEY_TAB, 9);
    });

    it('KEY_CLEAR equals 12', () => {
        assert.equal(KeyCode.KEY_CLEAR, 12);
    });

    it('KEY_RETURN equals 13', () => {
        assert.equal(KeyCode.KEY_RETURN, 13);
    });

    it('KEY_ENTER equals 14', () => {
        assert.equal(KeyCode.KEY_ENTER, 14);
    });

    it('KEY_SHIFT equals 16', () => {
        assert.equal(KeyCode.KEY_SHIFT, 16);
    });

    it('KEY_CONTROL equals 17', () => {
        assert.equal(KeyCode.KEY_CONTROL, 17);
    });

    it('KEY_ALT equals 18', () => {
        assert.equal(KeyCode.KEY_ALT, 18);
    });

    it('KEY_PAUSE equals 19', () => {
        assert.equal(KeyCode.KEY_PAUSE, 19);
    });

    it('KEY_CAPS_LOCK equals 20', () => {
        assert.equal(KeyCode.KEY_CAPS_LOCK, 20);
    });

    it('KEY_ESCAPE equals 27', () => {
        assert.equal(KeyCode.KEY_ESCAPE, 27);
    });

    it('KEY_SPACE equals 32', () => {
        assert.equal(KeyCode.KEY_SPACE, 32);
    });

    it('KEY_PAGE_UP equals 14', () => {
        assert.equal(KeyCode.KEY_PAGE_UP, 33);
    });

    it('KEY_PAGE_DOWN equals 34', () => {
        assert.equal(KeyCode.KEY_PAGE_DOWN, 34);
    });

    it('KEY_END equals 35', () => {
        assert.equal(KeyCode.KEY_END, 35);
    });

    it('KEY_HOME equals 36', () => {
        assert.equal(KeyCode.KEY_HOME, 36);
    });

    it('KEY_LEFT equals 37', () => {
        assert.equal(KeyCode.KEY_LEFT, 37);
    });

    it('KEY_UP equals 38', () => {
        assert.equal(KeyCode.KEY_UP, 38);
    });

    it('KEY_RIGHT equals 39', () => {
        assert.equal(KeyCode.KEY_RIGHT, 39);
    });

    it('KEY_DOWN equals 40', () => {
        assert.equal(KeyCode.KEY_DOWN, 40);
    });

    it('KEY_PRINTSCREEN equals 44', () => {
        assert.equal(KeyCode.KEY_PRINTSCREEN, 44);
    });

    it('KEY_INSERT equals 45', () => {
        assert.equal(KeyCode.KEY_INSERT, 45);
    });

    it('KEY_DELETE equals 46', () => {
        assert.equal(KeyCode.KEY_DELETE, 46);
    });

    it('KEY_0 equals 48', () => {
        assert.equal(KeyCode.KEY_0, 48);
    });

    it('KEY_1 equals 49', () => {
        assert.equal(KeyCode.KEY_1, 49);
    });

    it('KEY_2 equals 50', () => {
        assert.equal(KeyCode.KEY_2, 50);
    });

    it('KEY_3 equals 51', () => {
        assert.equal(KeyCode.KEY_3, 51);
    });

    it('KEY_4 equals 52', () => {
        assert.equal(KeyCode.KEY_4, 52);
    });

    it('KEY_5 equals 53', () => {
        assert.equal(KeyCode.KEY_5, 53);
    });

    it('KEY_6 equals 54', () => {
        assert.equal(KeyCode.KEY_6, 54);
    });

    it('KEY_7 equals 55', () => {
        assert.equal(KeyCode.KEY_7, 55);
    });

    it('KEY_8 equals 56', () => {
        assert.equal(KeyCode.KEY_8, 56);
    });

    it('KEY_9 equals 57', () => {
        assert.equal(KeyCode.KEY_9, 57);
    });

    it('KEY_SEMICOLON equals 59', () => {
        assert.equal(KeyCode.KEY_SEMICOLON, 59);
    });

    it('KEY_EQUALS equals 61', () => {
        assert.equal(KeyCode.KEY_EQUALS, 61);
    });

    it('KEY_A equals 65', () => {
        assert.equal(KeyCode.KEY_A, 65);
    });

    it('KEY_B equals 66', () => {
        assert.equal(KeyCode.KEY_B, 66);
    });

    it('KEY_C equals 67', () => {
        assert.equal(KeyCode.KEY_C, 67);
    });

    it('KEY_D equals 68', () => {
        assert.equal(KeyCode.KEY_D, 68);
    });

    it('KEY_E equals 69', () => {
        assert.equal(KeyCode.KEY_E, 69);
    });

    it('KEY_F equals 70', () => {
        assert.equal(KeyCode.KEY_F, 70);
    });

    it('KEY_G equals 71', () => {
        assert.equal(KeyCode.KEY_G, 71);
    });

    it('KEY_H equals 72', () => {
        assert.equal(KeyCode.KEY_H, 72);
    });

    it('KEY_I equals 73', () => {
        assert.equal(KeyCode.KEY_I, 73);
    });

    it('KEY_J equals 74', () => {
        assert.equal(KeyCode.KEY_J, 74);
    });

    it('KEY_K equals 75', () => {
        assert.equal(KeyCode.KEY_K, 75);
    });

    it('KEY_L equals 76', () => {
        assert.equal(KeyCode.KEY_L, 76);
    });

    it('KEY_M equals 77', () => {
        assert.equal(KeyCode.KEY_M, 77);
    });

    it('KEY_N equals 78', () => {
        assert.equal(KeyCode.KEY_N, 78);
    });

    it('KEY_O equals 79', () => {
        assert.equal(KeyCode.KEY_O, 79);
    });

    it('KEY_P equals 80', () => {
        assert.equal(KeyCode.KEY_P, 80);
    });

    it('KEY_Q equals 81', () => {
        assert.equal(KeyCode.KEY_Q, 81);
    });

    it('KEY_R equals 82', () => {
        assert.equal(KeyCode.KEY_R, 82);
    });

    it('KEY_S equals 83', () => {
        assert.equal(KeyCode.KEY_S, 83);
    });

    it('KEY_T equals 84', () => {
        assert.equal(KeyCode.KEY_T, 84);
    });

    it('KEY_U equals 85', () => {
        assert.equal(KeyCode.KEY_U, 85);
    });

    it('KEY_V equals 86', () => {
        assert.equal(KeyCode.KEY_V, 86);
    });

    it('KEY_W equals 87', () => {
        assert.equal(KeyCode.KEY_W, 87);
    });

    it('KEY_X equals 88', () => {
        assert.equal(KeyCode.KEY_X, 88);
    });
    it('KEY_Y equals 89', () => {
        assert.equal(KeyCode.KEY_Y, 89);
    });

    it('KEY_Z equals 90', () => {
        assert.equal(KeyCode.KEY_Z, 90);
    });

    it('KEY_CONTEXT_MENU equals 93', () => {
        assert.equal(KeyCode.KEY_CONTEXT_MENU, 93);
    });

    it('KEY_NUMPAD0 equals 96', () => {
        assert.equal(KeyCode.KEY_NUMPAD0, 96);
    });

    it('KEY_NUMPAD1 equals 97', () => {
        assert.equal(KeyCode.KEY_NUMPAD1, 97);
    });

    it('KEY_NUMPAD2 equals 98', () => {
        assert.equal(KeyCode.KEY_NUMPAD2, 98);
    });

    it('KEY_NUMPAD3 equals 99', () => {
        assert.equal(KeyCode.KEY_NUMPAD3, 99);
    });

    it('KEY_NUMPAD4 equals 100', () => {
        assert.equal(KeyCode.KEY_NUMPAD4, 100);
    });

    it('KEY_NUMPAD5 equals 101', () => {
        assert.equal(KeyCode.KEY_NUMPAD5, 101);
    });

    it('KEY_NUMPAD6 equals 102', () => {
        assert.equal(KeyCode.KEY_NUMPAD6, 102);
    });

    it('KEY_NUMPAD7 equals 103', () => {
        assert.equal(KeyCode.KEY_NUMPAD7, 103);
    });

    it('KEY_NUMPAD8 equals 104', () => {
        assert.equal(KeyCode.KEY_NUMPAD8, 104);
    });

    it('KEY_NUMPAD9 equals 105', () => {
        assert.equal(KeyCode.KEY_NUMPAD9, 105);
    });

    it('KEY_MULTIPLY equals 106', () => {
        assert.equal(KeyCode.KEY_MULTIPLY, 106);
    });

    it('KEY_ADD equals 107', () => {
        assert.equal(KeyCode.KEY_ADD, 107);
    });

    it('KEY_SEPARATOR equals 108', () => {
        assert.equal(KeyCode.KEY_SEPARATOR, 108);
    });

    it('KEY_SUBTRACT equals 109', () => {
        assert.equal(KeyCode.KEY_SUBTRACT, 109);
    });

    it('KEY_DECIMAL equals 110', () => {
        assert.equal(KeyCode.KEY_DECIMAL, 110);
    });

    it('KEY_DIVIDE equals 111', () => {
        assert.equal(KeyCode.KEY_DIVIDE, 111);
    });

    it('KEY_F1 equals 112', () => {
        assert.equal(KeyCode.KEY_F1, 112);
    });

    it('KEY_F2 equals 113', () => {
        assert.equal(KeyCode.KEY_F2, 113);
    });

    it('KEY_F3 equals 114', () => {
        assert.equal(KeyCode.KEY_F3, 114);
    });

    it('KEY_F4 equals 115', () => {
        assert.equal(KeyCode.KEY_F4, 115);
    });

    it('KEY_F5 equals 116', () => {
        assert.equal(KeyCode.KEY_F5, 116);
    });

    it('KEY_F6 equals 117', () => {
        assert.equal(KeyCode.KEY_F6, 117);
    });

    it('KEY_F7 equals 118', () => {
        assert.equal(KeyCode.KEY_F7, 118);
    });

    it('KEY_F8 equals 119', () => {
        assert.equal(KeyCode.KEY_F8, 119);
    });

    it('KEY_F9 equals 120', () => {
        assert.equal(KeyCode.KEY_F9, 120);
    });

    it('KEY_F10 equals 121', () => {
        assert.equal(KeyCode.KEY_F10, 121);
    });

    it('KEY_F11 equals 122', () => {
        assert.equal(KeyCode.KEY_F11, 122);
    });

    it('KEY_F12 equals 123', () => {
        assert.equal(KeyCode.KEY_F12, 123);
    });

    it('KEY_F13 equals 124', () => {
        assert.equal(KeyCode.KEY_F13, 124);
    });

    it('KEY_F14 equals 125', () => {
        assert.equal(KeyCode.KEY_F14, 125);
    });

    it('KEY_F15 equals 126', () => {
        assert.equal(KeyCode.KEY_F15, 126);
    });

    it('KEY_F16 equals 127', () => {
        assert.equal(KeyCode.KEY_F16, 127);
    });

    it('KEY_F17 equals 128', () => {
        assert.equal(KeyCode.KEY_F17, 128);
    });

    it('KEY_F18 equals 129', () => {
        assert.equal(KeyCode.KEY_F18, 129);
    });

    it('KEY_F19 equals 130', () => {
        assert.equal(KeyCode.KEY_F19, 130);
    });

    it('KEY_F20 equals 131', () => {
        assert.equal(KeyCode.KEY_F20, 131);
    });

    it('KEY_F21 equals 132', () => {
        assert.equal(KeyCode.KEY_F21, 132);
    });

    it('KEY_F22 equals 133', () => {
        assert.equal(KeyCode.KEY_F22, 133);
    });

    it('KEY_F23 equals 134', () => {
        assert.equal(KeyCode.KEY_F23, 134);
    });

    it('KEY_F24 equals 135', () => {
        assert.equal(KeyCode.KEY_F24, 135);
    });

    it('KEY_NUM_LOCK equals 144', () => {
        assert.equal(KeyCode.KEY_NUM_LOCK, 144);
    });

    it('KEY_SCROLL_LOCK equals 145', () => {
        assert.equal(KeyCode.KEY_SCROLL_LOCK, 145);
    });

    it('KEY_COMMA equals 188', () => {
        assert.equal(KeyCode.KEY_COMMA, 188);
    });

    it('KEY_PERIOD equals 190', () => {
        assert.equal(KeyCode.KEY_PERIOD, 190);
    });

    it('KEY_SLASH equals 191', () => {
        assert.equal(KeyCode.KEY_SLASH, 191);
    });

    it('KEY_BACK_QUOTE equals 192', () => {
        assert.equal(KeyCode.KEY_BACK_QUOTE, 192);
    });

    it('KEY_OPEN_BRACKET equals 219', () => {
        assert.equal(KeyCode.KEY_OPEN_BRACKET, 219);
    });

    it('KEY_BACK_SLASH equals 220', () => {
        assert.equal(KeyCode.KEY_BACK_SLASH, 220);
    });

    it('KEY_CLOSE_BRACKET equals 221', () => {
        assert.equal(KeyCode.KEY_CLOSE_BRACKET, 221);
    });

    it('KEY_QUOTE equals 222', () => {
        assert.equal(KeyCode.KEY_QUOTE, 222);
    });

    it('KEY_META equals 224', () => {
        assert.equal(KeyCode.KEY_META, 224);
    });

});
