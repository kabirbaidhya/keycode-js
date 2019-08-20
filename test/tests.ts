/**
 * Test utilities expected from the test runner.
 */
export interface TestUtils {
  test: (name: string, fn: () => void) => void;
  assertEquals: (actual: any, expected: any, msg?: string) => void;
}

/**
 * Tests.
 *
 * @param {*} mod
 * @param {TestUtils} { test, assertEquals }
 */
export function beginTests(mod: any, { test, assertEquals }: TestUtils): void {
  test('KEY_CANCEL equals 3', () => {
    assertEquals(mod.KEY_CANCEL, 3);
  });

  test('KEY_HELP equals 6', () => {
    assertEquals(mod.KEY_HELP, 6);
  });

  test('KEY_BACK_SPACE equals 8', () => {
    assertEquals(mod.KEY_BACK_SPACE, 8);
  });

  test('KEY_TAB equals 9', () => {
    assertEquals(mod.KEY_TAB, 9);
  });

  test('KEY_CLEAR equals 12', () => {
    assertEquals(mod.KEY_CLEAR, 12);
  });

  test('KEY_RETURN equals 13', () => {
    assertEquals(mod.KEY_RETURN, 13);
  });

  test('KEY_ENTER equals 14', () => {
    assertEquals(mod.KEY_ENTER, 14);
  });

  test('KEY_SHIFT equals 16', () => {
    assertEquals(mod.KEY_SHIFT, 16);
  });

  test('KEY_CONTROL equals 17', () => {
    assertEquals(mod.KEY_CONTROL, 17);
  });

  test('KEY_ALT equals 18', () => {
    assertEquals(mod.KEY_ALT, 18);
  });

  test('KEY_PAUSE equals 19', () => {
    assertEquals(mod.KEY_PAUSE, 19);
  });

  test('KEY_CAPS_LOCK equals 20', () => {
    assertEquals(mod.KEY_CAPS_LOCK, 20);
  });

  test('KEY_ESCAPE equals 27', () => {
    assertEquals(mod.KEY_ESCAPE, 27);
  });

  test('KEY_SPACE equals 32', () => {
    assertEquals(mod.KEY_SPACE, 32);
  });

  test('KEY_PAGE_UP equals 14', () => {
    assertEquals(mod.KEY_PAGE_UP, 33);
  });

  test('KEY_PAGE_DOWN equals 34', () => {
    assertEquals(mod.KEY_PAGE_DOWN, 34);
  });

  test('KEY_END equals 35', () => {
    assertEquals(mod.KEY_END, 35);
  });

  test('KEY_HOME equals 36', () => {
    assertEquals(mod.KEY_HOME, 36);
  });

  test('KEY_LEFT equals 37', () => {
    assertEquals(mod.KEY_LEFT, 37);
  });

  test('KEY_UP equals 38', () => {
    assertEquals(mod.KEY_UP, 38);
  });

  test('KEY_RIGHT equals 39', () => {
    assertEquals(mod.KEY_RIGHT, 39);
  });

  test('KEY_DOWN equals 40', () => {
    assertEquals(mod.KEY_DOWN, 40);
  });

  test('KEY_PRINTSCREEN equals 44', () => {
    assertEquals(mod.KEY_PRINTSCREEN, 44);
  });

  test('KEY_INSERT equals 45', () => {
    assertEquals(mod.KEY_INSERT, 45);
  });

  test('KEY_DELETE equals 46', () => {
    assertEquals(mod.KEY_DELETE, 46);
  });

  test('KEY_0 equals 48', () => {
    assertEquals(mod.KEY_0, 48);
  });

  test('KEY_1 equals 49', () => {
    assertEquals(mod.KEY_1, 49);
  });

  test('KEY_2 equals 50', () => {
    assertEquals(mod.KEY_2, 50);
  });

  test('KEY_3 equals 51', () => {
    assertEquals(mod.KEY_3, 51);
  });

  test('KEY_4 equals 52', () => {
    assertEquals(mod.KEY_4, 52);
  });

  test('KEY_5 equals 53', () => {
    assertEquals(mod.KEY_5, 53);
  });

  test('KEY_6 equals 54', () => {
    assertEquals(mod.KEY_6, 54);
  });

  test('KEY_7 equals 55', () => {
    assertEquals(mod.KEY_7, 55);
  });

  test('KEY_8 equals 56', () => {
    assertEquals(mod.KEY_8, 56);
  });

  test('KEY_9 equals 57', () => {
    assertEquals(mod.KEY_9, 57);
  });

  test('KEY_SEMICOLON equals 59', () => {
    assertEquals(mod.KEY_SEMICOLON, 59);
  });

  test('KEY_EQUALS equals 61', () => {
    assertEquals(mod.KEY_EQUALS, 61);
  });

  test('KEY_A equals 65', () => {
    assertEquals(mod.KEY_A, 65);
  });

  test('KEY_B equals 66', () => {
    assertEquals(mod.KEY_B, 66);
  });

  test('KEY_C equals 67', () => {
    assertEquals(mod.KEY_C, 67);
  });

  test('KEY_D equals 68', () => {
    assertEquals(mod.KEY_D, 68);
  });

  test('KEY_E equals 69', () => {
    assertEquals(mod.KEY_E, 69);
  });

  test('KEY_F equals 70', () => {
    assertEquals(mod.KEY_F, 70);
  });

  test('KEY_G equals 71', () => {
    assertEquals(mod.KEY_G, 71);
  });

  test('KEY_H equals 72', () => {
    assertEquals(mod.KEY_H, 72);
  });

  test('KEY_I equals 73', () => {
    assertEquals(mod.KEY_I, 73);
  });

  test('KEY_J equals 74', () => {
    assertEquals(mod.KEY_J, 74);
  });

  test('KEY_K equals 75', () => {
    assertEquals(mod.KEY_K, 75);
  });

  test('KEY_L equals 76', () => {
    assertEquals(mod.KEY_L, 76);
  });

  test('KEY_M equals 77', () => {
    assertEquals(mod.KEY_M, 77);
  });

  test('KEY_N equals 78', () => {
    assertEquals(mod.KEY_N, 78);
  });

  test('KEY_O equals 79', () => {
    assertEquals(mod.KEY_O, 79);
  });

  test('KEY_P equals 80', () => {
    assertEquals(mod.KEY_P, 80);
  });

  test('KEY_Q equals 81', () => {
    assertEquals(mod.KEY_Q, 81);
  });

  test('KEY_R equals 82', () => {
    assertEquals(mod.KEY_R, 82);
  });

  test('KEY_S equals 83', () => {
    assertEquals(mod.KEY_S, 83);
  });

  test('KEY_T equals 84', () => {
    assertEquals(mod.KEY_T, 84);
  });

  test('KEY_U equals 85', () => {
    assertEquals(mod.KEY_U, 85);
  });

  test('KEY_V equals 86', () => {
    assertEquals(mod.KEY_V, 86);
  });

  test('KEY_W equals 87', () => {
    assertEquals(mod.KEY_W, 87);
  });

  test('KEY_X equals 88', () => {
    assertEquals(mod.KEY_X, 88);
  });

  test('KEY_Y equals 89', () => {
    assertEquals(mod.KEY_Y, 89);
  });

  test('KEY_Z equals 90', () => {
    assertEquals(mod.KEY_Z, 90);
  });

  test('KEY_LEFT_CMD equals 91', () => {
    assertEquals(mod.KEY_LEFT_CMD, 91);
  });

  test('KEY_RIGHT_CMD equals 93', () => {
    assertEquals(mod.KEY_RIGHT_CMD, 93);
  });

  test('KEY_CONTEXT_MENU equals 93', () => {
    assertEquals(mod.KEY_CONTEXT_MENU, 93);
  });

  test('KEY_NUMPAD0 equals 96', () => {
    assertEquals(mod.KEY_NUMPAD0, 96);
  });

  test('KEY_NUMPAD1 equals 97', () => {
    assertEquals(mod.KEY_NUMPAD1, 97);
  });

  test('KEY_NUMPAD2 equals 98', () => {
    assertEquals(mod.KEY_NUMPAD2, 98);
  });

  test('KEY_NUMPAD3 equals 99', () => {
    assertEquals(mod.KEY_NUMPAD3, 99);
  });

  test('KEY_NUMPAD4 equals 100', () => {
    assertEquals(mod.KEY_NUMPAD4, 100);
  });

  test('KEY_NUMPAD5 equals 101', () => {
    assertEquals(mod.KEY_NUMPAD5, 101);
  });

  test('KEY_NUMPAD6 equals 102', () => {
    assertEquals(mod.KEY_NUMPAD6, 102);
  });

  test('KEY_NUMPAD7 equals 103', () => {
    assertEquals(mod.KEY_NUMPAD7, 103);
  });

  test('KEY_NUMPAD8 equals 104', () => {
    assertEquals(mod.KEY_NUMPAD8, 104);
  });

  test('KEY_NUMPAD9 equals 105', () => {
    assertEquals(mod.KEY_NUMPAD9, 105);
  });

  test('KEY_MULTIPLY equals 106', () => {
    assertEquals(mod.KEY_MULTIPLY, 106);
  });

  test('KEY_ADD equals 107', () => {
    assertEquals(mod.KEY_ADD, 107);
  });

  test('KEY_SEPARATOR equals 108', () => {
    assertEquals(mod.KEY_SEPARATOR, 108);
  });

  test('KEY_SUBTRACT equals 109', () => {
    assertEquals(mod.KEY_SUBTRACT, 109);
  });

  test('KEY_DECIMAL equals 110', () => {
    assertEquals(mod.KEY_DECIMAL, 110);
  });

  test('KEY_DIVIDE equals 111', () => {
    assertEquals(mod.KEY_DIVIDE, 111);
  });

  test('KEY_F1 equals 112', () => {
    assertEquals(mod.KEY_F1, 112);
  });

  test('KEY_F2 equals 113', () => {
    assertEquals(mod.KEY_F2, 113);
  });

  test('KEY_F3 equals 114', () => {
    assertEquals(mod.KEY_F3, 114);
  });

  test('KEY_F4 equals 115', () => {
    assertEquals(mod.KEY_F4, 115);
  });

  test('KEY_F5 equals 116', () => {
    assertEquals(mod.KEY_F5, 116);
  });

  test('KEY_F6 equals 117', () => {
    assertEquals(mod.KEY_F6, 117);
  });

  test('KEY_F7 equals 118', () => {
    assertEquals(mod.KEY_F7, 118);
  });

  test('KEY_F8 equals 119', () => {
    assertEquals(mod.KEY_F8, 119);
  });

  test('KEY_F9 equals 120', () => {
    assertEquals(mod.KEY_F9, 120);
  });

  test('KEY_F10 equals 121', () => {
    assertEquals(mod.KEY_F10, 121);
  });

  test('KEY_F11 equals 122', () => {
    assertEquals(mod.KEY_F11, 122);
  });

  test('KEY_F12 equals 123', () => {
    assertEquals(mod.KEY_F12, 123);
  });

  test('KEY_F13 equals 124', () => {
    assertEquals(mod.KEY_F13, 124);
  });

  test('KEY_F14 equals 125', () => {
    assertEquals(mod.KEY_F14, 125);
  });

  test('KEY_F15 equals 126', () => {
    assertEquals(mod.KEY_F15, 126);
  });

  test('KEY_F16 equals 127', () => {
    assertEquals(mod.KEY_F16, 127);
  });

  test('KEY_F17 equals 128', () => {
    assertEquals(mod.KEY_F17, 128);
  });

  test('KEY_F18 equals 129', () => {
    assertEquals(mod.KEY_F18, 129);
  });

  test('KEY_F19 equals 130', () => {
    assertEquals(mod.KEY_F19, 130);
  });

  test('KEY_F20 equals 131', () => {
    assertEquals(mod.KEY_F20, 131);
  });

  test('KEY_F21 equals 132', () => {
    assertEquals(mod.KEY_F21, 132);
  });

  test('KEY_F22 equals 133', () => {
    assertEquals(mod.KEY_F22, 133);
  });

  test('KEY_F23 equals 134', () => {
    assertEquals(mod.KEY_F23, 134);
  });

  test('KEY_F24 equals 135', () => {
    assertEquals(mod.KEY_F24, 135);
  });

  test('KEY_NUM_LOCK equals 144', () => {
    assertEquals(mod.KEY_NUM_LOCK, 144);
  });

  test('KEY_SCROLL_LOCK equals 145', () => {
    assertEquals(mod.KEY_SCROLL_LOCK, 145);
  });

  test('KEY_COMMA equals 188', () => {
    assertEquals(mod.KEY_COMMA, 188);
  });

  test('KEY_PERIOD equals 190', () => {
    assertEquals(mod.KEY_PERIOD, 190);
  });

  test('KEY_SLASH equals 191', () => {
    assertEquals(mod.KEY_SLASH, 191);
  });

  test('KEY_BACK_QUOTE equals 192', () => {
    assertEquals(mod.KEY_BACK_QUOTE, 192);
  });

  test('KEY_OPEN_BRACKET equals 219', () => {
    assertEquals(mod.KEY_OPEN_BRACKET, 219);
  });

  test('KEY_BACK_SLASH equals 220', () => {
    assertEquals(mod.KEY_BACK_SLASH, 220);
  });

  test('KEY_CLOSE_BRACKET equals 221', () => {
    assertEquals(mod.KEY_CLOSE_BRACKET, 221);
  });

  test('KEY_QUOTE equals 222', () => {
    assertEquals(mod.KEY_QUOTE, 222);
  });

  test('KEY_META equals 224', () => {
    assertEquals(mod.KEY_META, 224);
  });
}
