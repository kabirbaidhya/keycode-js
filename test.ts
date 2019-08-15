import { test, runTests } from 'https://deno.land/std/testing/mod.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

import * as KeyCode from './mod.ts';

/**
 * Deno tests for KeyCode constants.
 */

test(function KEY_CANCEL() {
  assertEquals(KeyCode.KEY_CANCEL, 3);
});

test(function KEY_HELP() {
  assertEquals(KeyCode.KEY_HELP, 6);
});

test(function KEY_BACK_SPACE() {
  assertEquals(KeyCode.KEY_BACK_SPACE, 8);
});

test(function KEY_TAB() {
  assertEquals(KeyCode.KEY_TAB, 9);
});

test(function KEY_CLEAR() {
  assertEquals(KeyCode.KEY_CLEAR, 12);
});

test(function KEY_RETURN() {
  assertEquals(KeyCode.KEY_RETURN, 13);
});

test(function KEY_ENTER() {
  assertEquals(KeyCode.KEY_ENTER, 14);
});

test(function KEY_SHIFT() {
  assertEquals(KeyCode.KEY_SHIFT, 16);
});

test(function KEY_CONTROL() {
  assertEquals(KeyCode.KEY_CONTROL, 17);
});

test(function KEY_ALT() {
  assertEquals(KeyCode.KEY_ALT, 18);
});

test(function KEY_PAUSE() {
  assertEquals(KeyCode.KEY_PAUSE, 19);
});

test(function KEY_CAPS_LOCK() {
  assertEquals(KeyCode.KEY_CAPS_LOCK, 20);
});

test(function KEY_ESCAPE() {
  assertEquals(KeyCode.KEY_ESCAPE, 27);
});

test(function KEY_SPACE() {
  assertEquals(KeyCode.KEY_SPACE, 32);
});

test(function KEY_PAGE_UP() {
  assertEquals(KeyCode.KEY_PAGE_UP, 33);
});

test(function KEY_PAGE_DOWN() {
  assertEquals(KeyCode.KEY_PAGE_DOWN, 34);
});

test(function KEY_END() {
  assertEquals(KeyCode.KEY_END, 35);
});

test(function KEY_HOME() {
  assertEquals(KeyCode.KEY_HOME, 36);
});

test(function KEY_LEFT() {
  assertEquals(KeyCode.KEY_LEFT, 37);
});

test(function KEY_UP() {
  assertEquals(KeyCode.KEY_UP, 38);
});

test(function KEY_RIGHT() {
  assertEquals(KeyCode.KEY_RIGHT, 39);
});

test(function KEY_DOWN() {
  assertEquals(KeyCode.KEY_DOWN, 40);
});

test(function KEY_PRINTSCREEN() {
  assertEquals(KeyCode.KEY_PRINTSCREEN, 44);
});

test(function KEY_INSERT() {
  assertEquals(KeyCode.KEY_INSERT, 45);
});

test(function KEY_DELETE() {
  assertEquals(KeyCode.KEY_DELETE, 46);
});

test(function KEY_0() {
  assertEquals(KeyCode.KEY_0, 48);
});

test(function KEY_1() {
  assertEquals(KeyCode.KEY_1, 49);
});

test(function KEY_2() {
  assertEquals(KeyCode.KEY_2, 50);
});

test(function KEY_3() {
  assertEquals(KeyCode.KEY_3, 51);
});

test(function KEY_4() {
  assertEquals(KeyCode.KEY_4, 52);
});

test(function KEY_5() {
  assertEquals(KeyCode.KEY_5, 53);
});

test(function KEY_6() {
  assertEquals(KeyCode.KEY_6, 54);
});

test(function KEY_7() {
  assertEquals(KeyCode.KEY_7, 55);
});

test(function KEY_8() {
  assertEquals(KeyCode.KEY_8, 56);
});

test(function KEY_9() {
  assertEquals(KeyCode.KEY_9, 57);
});

test(function KEY_SEMICOLON() {
  assertEquals(KeyCode.KEY_SEMICOLON, 59);
});

test(function KEY_EQUALS() {
  assertEquals(KeyCode.KEY_EQUALS, 61);
});

test(function KEY_A() {
  assertEquals(KeyCode.KEY_A, 65);
});

test(function KEY_B() {
  assertEquals(KeyCode.KEY_B, 66);
});

test(function KEY_C() {
  assertEquals(KeyCode.KEY_C, 67);
});

test(function KEY_D() {
  assertEquals(KeyCode.KEY_D, 68);
});

test(function KEY_E() {
  assertEquals(KeyCode.KEY_E, 69);
});

test(function KEY_F() {
  assertEquals(KeyCode.KEY_F, 70);
});

test(function KEY_G() {
  assertEquals(KeyCode.KEY_G, 71);
});

test(function KEY_H() {
  assertEquals(KeyCode.KEY_H, 72);
});

test(function KEY_I() {
  assertEquals(KeyCode.KEY_I, 73);
});

test(function KEY_J() {
  assertEquals(KeyCode.KEY_J, 74);
});

test(function KEY_K() {
  assertEquals(KeyCode.KEY_K, 75);
});

test(function KEY_L() {
  assertEquals(KeyCode.KEY_L, 76);
});

test(function KEY_M() {
  assertEquals(KeyCode.KEY_M, 77);
});

test(function KEY_N() {
  assertEquals(KeyCode.KEY_N, 78);
});

test(function KEY_O() {
  assertEquals(KeyCode.KEY_O, 79);
});

test(function KEY_P() {
  assertEquals(KeyCode.KEY_P, 80);
});

test(function KEY_Q() {
  assertEquals(KeyCode.KEY_Q, 81);
});

test(function KEY_R() {
  assertEquals(KeyCode.KEY_R, 82);
});

test(function KEY_S() {
  assertEquals(KeyCode.KEY_S, 83);
});

test(function KEY_T() {
  assertEquals(KeyCode.KEY_T, 84);
});

test(function KEY_U() {
  assertEquals(KeyCode.KEY_U, 85);
});

test(function KEY_V() {
  assertEquals(KeyCode.KEY_V, 86);
});

test(function KEY_W() {
  assertEquals(KeyCode.KEY_W, 87);
});

test(function KEY_X() {
  assertEquals(KeyCode.KEY_X, 88);
});

test(function KEY_Y() {
  assertEquals(KeyCode.KEY_Y, 89);
});

test(function KEY_Z() {
  assertEquals(KeyCode.KEY_Z, 90);
});

test(function KEY_LEFT_CMD() {
  assertEquals(KeyCode.KEY_LEFT_CMD, 91);
});

test(function KEY_RIGHT_CMD() {
  assertEquals(KeyCode.KEY_RIGHT_CMD, 93);
});

test(function KEY_CONTEXT_MENU() {
  assertEquals(KeyCode.KEY_CONTEXT_MENU, 93);
});

test(function KEY_NUMPAD0() {
  assertEquals(KeyCode.KEY_NUMPAD0, 96);
});

test(function KEY_NUMPAD1() {
  assertEquals(KeyCode.KEY_NUMPAD1, 97);
});

test(function KEY_NUMPAD2() {
  assertEquals(KeyCode.KEY_NUMPAD2, 98);
});

test(function KEY_NUMPAD3() {
  assertEquals(KeyCode.KEY_NUMPAD3, 99);
});

test(function KEY_NUMPAD4() {
  assertEquals(KeyCode.KEY_NUMPAD4, 100);
});

test(function KEY_NUMPAD5() {
  assertEquals(KeyCode.KEY_NUMPAD5, 101);
});

test(function KEY_NUMPAD6() {
  assertEquals(KeyCode.KEY_NUMPAD6, 102);
});

test(function KEY_NUMPAD7() {
  assertEquals(KeyCode.KEY_NUMPAD7, 103);
});

test(function KEY_NUMPAD8() {
  assertEquals(KeyCode.KEY_NUMPAD8, 104);
});

test(function KEY_NUMPAD9() {
  assertEquals(KeyCode.KEY_NUMPAD9, 105);
});

test(function KEY_MULTIPLY() {
  assertEquals(KeyCode.KEY_MULTIPLY, 106);
});

test(function KEY_ADD() {
  assertEquals(KeyCode.KEY_ADD, 107);
});

test(function KEY_SEPARATOR() {
  assertEquals(KeyCode.KEY_SEPARATOR, 108);
});

test(function KEY_SUBTRACT() {
  assertEquals(KeyCode.KEY_SUBTRACT, 109);
});

test(function KEY_DECIMAL() {
  assertEquals(KeyCode.KEY_DECIMAL, 110);
});

test(function KEY_DIVIDE() {
  assertEquals(KeyCode.KEY_DIVIDE, 111);
});

test(function KEY_F1() {
  assertEquals(KeyCode.KEY_F1, 112);
});

test(function KEY_F2() {
  assertEquals(KeyCode.KEY_F2, 113);
});

test(function KEY_F3() {
  assertEquals(KeyCode.KEY_F3, 114);
});

test(function KEY_F4() {
  assertEquals(KeyCode.KEY_F4, 115);
});

test(function KEY_F5() {
  assertEquals(KeyCode.KEY_F5, 116);
});

test(function KEY_F6() {
  assertEquals(KeyCode.KEY_F6, 117);
});

test(function KEY_F7() {
  assertEquals(KeyCode.KEY_F7, 118);
});

test(function KEY_F8() {
  assertEquals(KeyCode.KEY_F8, 119);
});

test(function KEY_F9() {
  assertEquals(KeyCode.KEY_F9, 120);
});

test(function KEY_F10() {
  assertEquals(KeyCode.KEY_F10, 121);
});

test(function KEY_F11() {
  assertEquals(KeyCode.KEY_F11, 122);
});

test(function KEY_F12() {
  assertEquals(KeyCode.KEY_F12, 123);
});

test(function KEY_F13() {
  assertEquals(KeyCode.KEY_F13, 124);
});

test(function KEY_F14() {
  assertEquals(KeyCode.KEY_F14, 125);
});

test(function KEY_F15() {
  assertEquals(KeyCode.KEY_F15, 126);
});

test(function KEY_F16() {
  assertEquals(KeyCode.KEY_F16, 127);
});

test(function KEY_F17() {
  assertEquals(KeyCode.KEY_F17, 128);
});

test(function KEY_F18() {
  assertEquals(KeyCode.KEY_F18, 129);
});

test(function KEY_F19() {
  assertEquals(KeyCode.KEY_F19, 130);
});

test(function KEY_F20() {
  assertEquals(KeyCode.KEY_F20, 131);
});

test(function KEY_F21() {
  assertEquals(KeyCode.KEY_F21, 132);
});

test(function KEY_F22() {
  assertEquals(KeyCode.KEY_F22, 133);
});

test(function KEY_F23() {
  assertEquals(KeyCode.KEY_F23, 134);
});

test(function KEY_F24() {
  assertEquals(KeyCode.KEY_F24, 135);
});

test(function KEY_NUM_LOCK() {
  assertEquals(KeyCode.KEY_NUM_LOCK, 144);
});

test(function KEY_SCROLL_LOCK() {
  assertEquals(KeyCode.KEY_SCROLL_LOCK, 145);
});

test(function KEY_COMMA() {
  assertEquals(KeyCode.KEY_COMMA, 188);
});

test(function KEY_PERIOD() {
  assertEquals(KeyCode.KEY_PERIOD, 190);
});

test(function KEY_SLASH() {
  assertEquals(KeyCode.KEY_SLASH, 191);
});

test(function KEY_BACK_QUOTE() {
  assertEquals(KeyCode.KEY_BACK_QUOTE, 192);
});

test(function KEY_OPEN_BRACKET() {
  assertEquals(KeyCode.KEY_OPEN_BRACKET, 219);
});

test(function KEY_BACK_SLASH() {
  assertEquals(KeyCode.KEY_BACK_SLASH, 220);
});

test(function KEY_CLOSE_BRACKET() {
  assertEquals(KeyCode.KEY_CLOSE_BRACKET, 221);
});

test(function KEY_QUOTE() {
  assertEquals(KeyCode.KEY_QUOTE, 222);
});

test(function KEY_META() {
  assertEquals(KeyCode.KEY_META, 224);
});

runTests();
