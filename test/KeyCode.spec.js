import { assert } from 'chai';
import KeyCode from '../src/KeyCode';

/**
 * KeyCode test.
 */
describe('KeyCode', () => {
    it('KEY_CANCEL should return 3', () => {
        assert.equal(KeyCode.KEY_CANCEL, 3);
    });

    it('KEY_HELP should return 6', () => {
        assert.equal(KeyCode.KEY_HELP, 6);
    });

    it('KEY_BACK_SPACE should return 8', () => {
        assert.equal(KeyCode.KEY_BACK_SPACE, 8);
    });

    it('KEY_TAB should return 9', () => {
        assert.equal(KeyCode.KEY_TAB, 9);
    });

    it('KEY_CLEAR should return 12', () => {
        assert.equal(KeyCode.KEY_CLEAR, 12);
    });

    it('KEY_RETURN should return 13', () => {
        assert.equal(KeyCode.KEY_RETURN, 13);
    });

    it('KEY_ENTER should return 14', () => {
        assert.equal(KeyCode.KEY_ENTER, 14);
    });

    it('KEY_SHIFT should return 16', () => {
        assert.equal(KeyCode.KEY_SHIFT, 16);
    });

    it('KEY_CONTROL should return 17', () => {
        assert.equal(KeyCode.KEY_CONTROL, 17);
    });

    it('KEY_ALT should return 18', () => {
        assert.equal(KeyCode.KEY_ALT, 18);
    });

    it('KEY_PAUSE should return 19', () => {
        assert.equal(KeyCode.KEY_PAUSE, 19);
    });

    it('KEY_CAPS_LOCK should return 20', () => {
        assert.equal(KeyCode.KEY_CAPS_LOCK, 20);
    });

    it('KEY_ESCAPE should return 27', () => {
        assert.equal(KeyCode.KEY_ESCAPE, 27);
    });

    it('KEY_SPACE should return 32', () => {
        assert.equal(KeyCode.KEY_SPACE, 32);
    });

    it('KEY_PAGE_UP should return 14', () => {
        assert.equal(KeyCode.KEY_PAGE_UP, 33);
    });

    it('KEY_PAGE_DOWN should return 34', () => {
        assert.equal(KeyCode.KEY_PAGE_DOWN, 34);
    });

    it('KEY_END should return 35', () => {
        assert.equal(KeyCode.KEY_END, 35);
    });

    it('KEY_HOME should return 36', () => {
        assert.equal(KeyCode.KEY_HOME, 36);
    });

    it('KEY_LEFT should return 37', () => {
        assert.equal(KeyCode.KEY_LEFT, 37);
    });

    it('KEY_UP should return 38', () => {
        assert.equal(KeyCode.KEY_UP, 38);
    });

    it('KEY_RIGHT should return 39', () => {
        assert.equal(KeyCode.KEY_RIGHT, 39);
    });

    it('KEY_DOWN should return 40', () => {
        assert.equal(KeyCode.KEY_DOWN, 40);
    });

    it('KEY_PRINTSCREEN should return 44', () => {
        assert.equal(KeyCode.KEY_PRINTSCREEN, 44);
    });

    it('KEY_INSERT should return 45', () => {
        assert.equal(KeyCode.KEY_INSERT, 45);
    });

    it('KEY_DELETE should return 46', () => {
        assert.equal(KeyCode.KEY_DELETE, 46);
    });

    it('KEY_0 should return 48', () => {
        assert.equal(KeyCode.KEY_0, 48);
    });

    it('KEY_1 should return 49', () => {
        assert.equal(KeyCode.KEY_1, 49);
    });

    it('KEY_2 should return 50', () => {
        assert.equal(KeyCode.KEY_2, 50);
    });

    it('KEY_3 should return 51', () => {
        assert.equal(KeyCode.KEY_3, 51);
    });

    it('KEY_4 should return 52', () => {
        assert.equal(KeyCode.KEY_4, 52);
    });

    it('KEY_5 should return 53', () => {
        assert.equal(KeyCode.KEY_5, 53);
    });

    it('KEY_6 should return 54', () => {
        assert.equal(KeyCode.KEY_6, 54);
    });

    it('KEY_7 should return 55', () => {
        assert.equal(KeyCode.KEY_7, 55);
    });

    it('KEY_8 should return 56', () => {
        assert.equal(KeyCode.KEY_8, 56);
    });

    it('KEY_9 should return 57', () => {
        assert.equal(KeyCode.KEY_9, 57);
    });

    it('KEY_SEMICOLON should return 59', () => {
        assert.equal(KeyCode.KEY_SEMICOLON, 59);
    });

    it('KEY_EQUALS should return 61', () => {
        assert.equal(KeyCode.KEY_EQUALS, 61);
    });

    it('KEY_A should return 65', () => {
        assert.equal(KeyCode.KEY_A, 65);
    });

    it('KEY_B should return 66', () => {
        assert.equal(KeyCode.KEY_B, 66);
    });

    it('KEY_C should return 67', () => {
        assert.equal(KeyCode.KEY_C, 67);
    });

    it('KEY_D should return 68', () => {
        assert.equal(KeyCode.KEY_D, 68);
    });

    it('KEY_E should return 69', () => {
        assert.equal(KeyCode.KEY_E, 69);
    });

    it('KEY_F should return 70', () => {
        assert.equal(KeyCode.KEY_F, 70);
    });

    it('KEY_G should return 71', () => {
        assert.equal(KeyCode.KEY_G, 71);
    });

    it('KEY_H should return 72', () => {
        assert.equal(KeyCode.KEY_H, 72);
    });

    it('KEY_I should return 73', () => {
        assert.equal(KeyCode.KEY_I, 73);
    });

    it('KEY_J should return 74', () => {
        assert.equal(KeyCode.KEY_J, 74);
    });

    it('KEY_K should return 75', () => {
        assert.equal(KeyCode.KEY_K, 75);
    });

    it('KEY_L should return 76', () => {
        assert.equal(KeyCode.KEY_L, 76);
    });

    it('KEY_M should return 77', () => {
        assert.equal(KeyCode.KEY_M, 77);
    });

    it('KEY_N should return 78', () => {
        assert.equal(KeyCode.KEY_N, 78);
    });

    it('KEY_O should return 79', () => {
        assert.equal(KeyCode.KEY_O, 79);
    });

    it('KEY_P should return 80', () => {
        assert.equal(KeyCode.KEY_P, 80);
    });

    it('KEY_Q should return 81', () => {
        assert.equal(KeyCode.KEY_Q, 81);
    });

    it('KEY_R should return 82', () => {
        assert.equal(KeyCode.KEY_R, 82);
    });

    it('KEY_S should return 83', () => {
        assert.equal(KeyCode.KEY_S, 83);
    });

    it('KEY_T should return 84', () => {
        assert.equal(KeyCode.KEY_T, 84);
    });

    it('KEY_U should return 85', () => {
        assert.equal(KeyCode.KEY_U, 85);
    });

    it('KEY_V should return 86', () => {
        assert.equal(KeyCode.KEY_V, 86);
    });

    it('KEY_W should return 87', () => {
        assert.equal(KeyCode.KEY_W, 87);
    });

    it('KEY_X should return 88', () => {
        assert.equal(KeyCode.KEY_X, 88);
    });
    it('KEY_Y should return 89', () => {
        assert.equal(KeyCode.KEY_Y, 89);
    });

    it('KEY_Z should return 90', () => {
        assert.equal(KeyCode.KEY_Z, 90);
    });

    it('KEY_CONTEXT_MENU should return 93', () => {
        assert.equal(KeyCode.KEY_CONTEXT_MENU, 93);
    });

    it('KEY_NUMPAD0 should return 96', () => {
        assert.equal(KeyCode.KEY_NUMPAD0, 96);
    });

    it('KEY_NUMPAD1 should return 97', () => {
        assert.equal(KeyCode.KEY_NUMPAD1, 97);
    });

    it('KEY_NUMPAD2 should return 98', () => {
        assert.equal(KeyCode.KEY_NUMPAD2, 98);
    });

    it('KEY_NUMPAD3 should return 99', () => {
        assert.equal(KeyCode.KEY_NUMPAD3, 99);
    });

    it('KEY_NUMPAD4 should return 100', () => {
        assert.equal(KeyCode.KEY_NUMPAD4, 100);
    });

    it('KEY_NUMPAD5 should return 101', () => {
        assert.equal(KeyCode.KEY_NUMPAD5, 101);
    });

    it('KEY_NUMPAD6 should return 102', () => {
        assert.equal(KeyCode.KEY_NUMPAD6, 102);
    });

    it('KEY_NUMPAD7 should return 103', () => {
        assert.equal(KeyCode.KEY_NUMPAD7, 103);
    });

    it('KEY_NUMPAD8 should return 104', () => {
        assert.equal(KeyCode.KEY_NUMPAD8, 104);
    });

    it('KEY_NUMPAD9 should return 105', () => {
        assert.equal(KeyCode.KEY_NUMPAD9, 105);
    });

    it('KEY_MULTIPLY should return 106', () => {
        assert.equal(KeyCode.KEY_MULTIPLY, 106);
    });

    it('KEY_ADD should return 107', () => {
        assert.equal(KeyCode.KEY_ADD, 107);
    });

    it('KEY_SEPARATOR should return 108', () => {
        assert.equal(KeyCode.KEY_SEPARATOR, 108);
    });

    it('KEY_SUBTRACT should return 109', () => {
        assert.equal(KeyCode.KEY_SUBTRACT, 109);
    });

    it('KEY_DECIMAL should return 110', () => {
        assert.equal(KeyCode.KEY_DECIMAL, 110);
    });

    it('KEY_DIVIDE should return 111', () => {
        assert.equal(KeyCode.KEY_DIVIDE, 111);
    });

    it('KEY_F1 should return 112', () => {
        assert.equal(KeyCode.KEY_F1, 112);
    });

    it('KEY_F2 should return 113', () => {
        assert.equal(KeyCode.KEY_F2, 113);
    });

    it('KEY_F3 should return 114', () => {
        assert.equal(KeyCode.KEY_F3, 114);
    });

    it('KEY_F4 should return 115', () => {
        assert.equal(KeyCode.KEY_F4, 115);
    });

    it('KEY_F5 should return 116', () => {
        assert.equal(KeyCode.KEY_F5, 116);
    });

    it('KEY_F6 should return 117', () => {
        assert.equal(KeyCode.KEY_F6, 117);
    });

    it('KEY_F7 should return 118', () => {
        assert.equal(KeyCode.KEY_F7, 118);
    });

    it('KEY_F8 should return 119', () => {
        assert.equal(KeyCode.KEY_F8, 119);
    });

    it('KEY_F9 should return 120', () => {
        assert.equal(KeyCode.KEY_F9, 120);
    });

    it('KEY_F10 should return 121', () => {
        assert.equal(KeyCode.KEY_F10, 121);
    });

    it('KEY_F11 should return 122', () => {
        assert.equal(KeyCode.KEY_F11, 122);
    });

    it('KEY_F12 should return 123', () => {
        assert.equal(KeyCode.KEY_F12, 123);
    });

    it('KEY_F13 should return 124', () => {
        assert.equal(KeyCode.KEY_F13, 124);
    });

    it('KEY_F14 should return 125', () => {
        assert.equal(KeyCode.KEY_F14, 125);
    });

    it('KEY_F15 should return 126', () => {
        assert.equal(KeyCode.KEY_F15, 126);
    });

    it('KEY_F16 should return 127', () => {
        assert.equal(KeyCode.KEY_F16, 127);
    });

    it('KEY_F17 should return 128', () => {
        assert.equal(KeyCode.KEY_F17, 128);
    });

    it('KEY_F18 should return 129', () => {
        assert.equal(KeyCode.KEY_F18, 129);
    });

    it('KEY_F19 should return 130', () => {
        assert.equal(KeyCode.KEY_F19, 130);
    });

    it('KEY_F20 should return 131', () => {
        assert.equal(KeyCode.KEY_F20, 131);
    });

    it('KEY_F21 should return 132', () => {
        assert.equal(KeyCode.KEY_F21, 132);
    });

    it('KEY_F22 should return 133', () => {
        assert.equal(KeyCode.KEY_F22, 133);
    });

    it('KEY_F23 should return 134', () => {
        assert.equal(KeyCode.KEY_F23, 134);
    });

    it('KEY_F24 should return 135', () => {
        assert.equal(KeyCode.KEY_F24, 135);
    });

    it('KEY_NUM_LOCK should return 144', () => {
        assert.equal(KeyCode.KEY_NUM_LOCK, 144);
    });

    it('KEY_SCROLL_LOCK should return 145', () => {
        assert.equal(KeyCode.KEY_SCROLL_LOCK, 145);
    });

    it('KEY_COMMA should return 188', () => {
        assert.equal(KeyCode.KEY_COMMA, 188);
    });

    it('KEY_PERIOD should return 190', () => {
        assert.equal(KeyCode.KEY_PERIOD, 190);
    });

    it('KEY_SLASH should return 191', () => {
        assert.equal(KeyCode.KEY_SLASH, 191);
    });

    it('KEY_BACK_QUOTE should return 192', () => {
        assert.equal(KeyCode.KEY_BACK_QUOTE, 192);
    });

    it('KEY_OPEN_BRACKET should return 219', () => {
        assert.equal(KeyCode.KEY_OPEN_BRACKET, 219);
    });

    it('KEY_BACK_SLASH should return 220', () => {
        assert.equal(KeyCode.KEY_BACK_SLASH, 220);
    });

    it('KEY_CLOSE_BRACKET should return 221', () => {
        assert.equal(KeyCode.KEY_CLOSE_BRACKET, 221);
    });

    it('KEY_QUOTE should return 222', () => {
        assert.equal(KeyCode.KEY_QUOTE, 222);
    });

    it('KEY_META should return 224', () => {
        assert.equal(KeyCode.KEY_META, 224);
    });

});
