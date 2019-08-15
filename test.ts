import { test, runTests } from 'https://deno.land/std/testing/mod.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

import * as KeyCode from './mod.ts';

/**
 * Deno tests for KeyCode constants.
 */

test('KEY_CANCEL', () => {
  assertEquals(KeyCode.KEY_CANCEL, 3);
});

test('KEY_HELP', () => {
  assertEquals(KeyCode.KEY_HELP, 6);
});

test('KEY_BACK_SPACE', () => {
  assertEquals(KeyCode.KEY_BACK_SPACE, 8);
});

test('KEY_TAB', () => {
  assertEquals(KeyCode.KEY_TAB, 9);
});

test('KEY_CLEAR', () => {
  assertEquals(KeyCode.KEY_CLEAR, 12);
});

test('KEY_RETURN', () => {
  assertEquals(KeyCode.KEY_RETURN, 13);
});

test('KEY_ENTER', () => {
  assertEquals(KeyCode.KEY_ENTER, 14);
});

test('KEY_SHIFT', () => {
  assertEquals(KeyCode.KEY_SHIFT, 16);
});

test('KEY_CONTROL', () => {
  assertEquals(KeyCode.KEY_CONTROL, 17);
});

test('KEY_ALT', () => {
  assertEquals(KeyCode.KEY_ALT, 18);
});

test('KEY_PAUSE', () => {
  assertEquals(KeyCode.KEY_PAUSE, 19);
});

test('KEY_CAPS_LOCK', () => {
  assertEquals(KeyCode.KEY_CAPS_LOCK, 20);
});

test('KEY_ESCAPE', () => {
  assertEquals(KeyCode.KEY_ESCAPE, 27);
});

test('KEY_SPACE', () => {
  assertEquals(KeyCode.KEY_SPACE, 32);
});

test('KEY_PAGE_UP', () => {
  assertEquals(KeyCode.KEY_PAGE_UP, 33);
});

test('KEY_PAGE_DOWN', () => {
  assertEquals(KeyCode.KEY_PAGE_DOWN, 34);
});

test('KEY_END', () => {
  assertEquals(KeyCode.KEY_END, 35);
});

test('KEY_HOME', () => {
  assertEquals(KeyCode.KEY_HOME, 36);
});

test('KEY_LEFT', () => {
  assertEquals(KeyCode.KEY_LEFT, 37);
});

test('KEY_UP', () => {
  assertEquals(KeyCode.KEY_UP, 38);
});

test('KEY_RIGHT', () => {
  assertEquals(KeyCode.KEY_RIGHT, 39);
});

test('KEY_DOWN', () => {
  assertEquals(KeyCode.KEY_DOWN, 40);
});

test('KEY_PRINTSCREEN', () => {
  assertEquals(KeyCode.KEY_PRINTSCREEN, 44);
});

test('KEY_INSERT', () => {
  assertEquals(KeyCode.KEY_INSERT, 45);
});

test('KEY_DELETE', () => {
  assertEquals(KeyCode.KEY_DELETE, 46);
});

test('KEY_0', () => {
  assertEquals(KeyCode.KEY_0, 48);
});

test('KEY_1', () => {
  assertEquals(KeyCode.KEY_1, 49);
});

test('KEY_2', () => {
  assertEquals(KeyCode.KEY_2, 50);
});

test('KEY_3', () => {
  assertEquals(KeyCode.KEY_3, 51);
});

test('KEY_4', () => {
  assertEquals(KeyCode.KEY_4, 52);
});

test('KEY_5', () => {
  assertEquals(KeyCode.KEY_5, 53);
});

test('KEY_6', () => {
  assertEquals(KeyCode.KEY_6, 54);
});

test('KEY_7', () => {
  assertEquals(KeyCode.KEY_7, 55);
});

test('KEY_8', () => {
  assertEquals(KeyCode.KEY_8, 56);
});

test('KEY_9', () => {
  assertEquals(KeyCode.KEY_9, 57);
});

test('KEY_SEMICOLON', () => {
  assertEquals(KeyCode.KEY_SEMICOLON, 59);
});

test('KEY_EQUALS', () => {
  assertEquals(KeyCode.KEY_EQUALS, 61);
});

test('KEY_A', () => {
  assertEquals(KeyCode.KEY_A, 65);
});

test('KEY_B', () => {
  assertEquals(KeyCode.KEY_B, 66);
});

test('KEY_C', () => {
  assertEquals(KeyCode.KEY_C, 67);
});

test('KEY_D', () => {
  assertEquals(KeyCode.KEY_D, 68);
});

test('KEY_E', () => {
  assertEquals(KeyCode.KEY_E, 69);
});

test('KEY_F', () => {
  assertEquals(KeyCode.KEY_F, 70);
});

test('KEY_G', () => {
  assertEquals(KeyCode.KEY_G, 71);
});

test('KEY_H', () => {
  assertEquals(KeyCode.KEY_H, 72);
});

test('KEY_I', () => {
  assertEquals(KeyCode.KEY_I, 73);
});

test('KEY_J', () => {
  assertEquals(KeyCode.KEY_J, 74);
});

test('KEY_K', () => {
  assertEquals(KeyCode.KEY_K, 75);
});

test('KEY_L', () => {
  assertEquals(KeyCode.KEY_L, 76);
});

test('KEY_M', () => {
  assertEquals(KeyCode.KEY_M, 77);
});

test('KEY_N', () => {
  assertEquals(KeyCode.KEY_N, 78);
});

test('KEY_O', () => {
  assertEquals(KeyCode.KEY_O, 79);
});

test('KEY_P', () => {
  assertEquals(KeyCode.KEY_P, 80);
});

test('KEY_Q', () => {
  assertEquals(KeyCode.KEY_Q, 81);
});

test('KEY_R', () => {
  assertEquals(KeyCode.KEY_R, 82);
});

test('KEY_S', () => {
  assertEquals(KeyCode.KEY_S, 83);
});

test('KEY_T', () => {
  assertEquals(KeyCode.KEY_T, 84);
});

test('KEY_U', () => {
  assertEquals(KeyCode.KEY_U, 85);
});

test('KEY_V', () => {
  assertEquals(KeyCode.KEY_V, 86);
});

test('KEY_W', () => {
  assertEquals(KeyCode.KEY_W, 87);
});

test('KEY_X', () => {
  assertEquals(KeyCode.KEY_X, 88);
});

test('KEY_Y', () => {
  assertEquals(KeyCode.KEY_Y, 89);
});

test('KEY_Z', () => {
  assertEquals(KeyCode.KEY_Z, 90);
});

test('KEY_LEFT_CMD', () => {
  assertEquals(KeyCode.KEY_LEFT_CMD, 91);
});

test('KEY_RIGHT_CMD', () => {
  assertEquals(KeyCode.KEY_RIGHT_CMD, 93);
});

test('KEY_CONTEXT_MENU', () => {
  assertEquals(KeyCode.KEY_CONTEXT_MENU, 93);
});

test('KEY_NUMPAD0', () => {
  assertEquals(KeyCode.KEY_NUMPAD0, 96);
});

test('KEY_NUMPAD1', () => {
  assertEquals(KeyCode.KEY_NUMPAD1, 97);
});

test('KEY_NUMPAD2', () => {
  assertEquals(KeyCode.KEY_NUMPAD2, 98);
});

test('KEY_NUMPAD3', () => {
  assertEquals(KeyCode.KEY_NUMPAD3, 99);
});

test('KEY_NUMPAD4', () => {
  assertEquals(KeyCode.KEY_NUMPAD4, 100);
});

test('KEY_NUMPAD5', () => {
  assertEquals(KeyCode.KEY_NUMPAD5, 101);
});

test('KEY_NUMPAD6', () => {
  assertEquals(KeyCode.KEY_NUMPAD6, 102);
});

test('KEY_NUMPAD7', () => {
  assertEquals(KeyCode.KEY_NUMPAD7, 103);
});

test('KEY_NUMPAD8', () => {
  assertEquals(KeyCode.KEY_NUMPAD8, 104);
});

test('KEY_NUMPAD9', () => {
  assertEquals(KeyCode.KEY_NUMPAD9, 105);
});

test('KEY_MULTIPLY', () => {
  assertEquals(KeyCode.KEY_MULTIPLY, 106);
});

test('KEY_ADD', () => {
  assertEquals(KeyCode.KEY_ADD, 107);
});

test('KEY_SEPARATOR', () => {
  assertEquals(KeyCode.KEY_SEPARATOR, 108);
});

test('KEY_SUBTRACT', () => {
  assertEquals(KeyCode.KEY_SUBTRACT, 109);
});

test('KEY_DECIMAL', () => {
  assertEquals(KeyCode.KEY_DECIMAL, 110);
});

test('KEY_DIVIDE', () => {
  assertEquals(KeyCode.KEY_DIVIDE, 111);
});

test('KEY_F1', () => {
  assertEquals(KeyCode.KEY_F1, 112);
});

test('KEY_F2', () => {
  assertEquals(KeyCode.KEY_F2, 113);
});

test('KEY_F3', () => {
  assertEquals(KeyCode.KEY_F3, 114);
});

test('KEY_F4', () => {
  assertEquals(KeyCode.KEY_F4, 115);
});

test('KEY_F5', () => {
  assertEquals(KeyCode.KEY_F5, 116);
});

test('KEY_F6', () => {
  assertEquals(KeyCode.KEY_F6, 117);
});

test('KEY_F7', () => {
  assertEquals(KeyCode.KEY_F7, 118);
});

test('KEY_F8', () => {
  assertEquals(KeyCode.KEY_F8, 119);
});

test('KEY_F9', () => {
  assertEquals(KeyCode.KEY_F9, 120);
});

test('KEY_F10', () => {
  assertEquals(KeyCode.KEY_F10, 121);
});

test('KEY_F11', () => {
  assertEquals(KeyCode.KEY_F11, 122);
});

test('KEY_F12', () => {
  assertEquals(KeyCode.KEY_F12, 123);
});

test('KEY_F13', () => {
  assertEquals(KeyCode.KEY_F13, 124);
});

test('KEY_F14', () => {
  assertEquals(KeyCode.KEY_F14, 125);
});

test('KEY_F15', () => {
  assertEquals(KeyCode.KEY_F15, 126);
});

test('KEY_F16', () => {
  assertEquals(KeyCode.KEY_F16, 127);
});

test('KEY_F17', () => {
  assertEquals(KeyCode.KEY_F17, 128);
});

test('KEY_F18', () => {
  assertEquals(KeyCode.KEY_F18, 129);
});

test('KEY_F19', () => {
  assertEquals(KeyCode.KEY_F19, 130);
});

test('KEY_F20', () => {
  assertEquals(KeyCode.KEY_F20, 131);
});

test('KEY_F21', () => {
  assertEquals(KeyCode.KEY_F21, 132);
});

test('KEY_F22', () => {
  assertEquals(KeyCode.KEY_F22, 133);
});

test('KEY_F23', () => {
  assertEquals(KeyCode.KEY_F23, 134);
});

test('KEY_F24', () => {
  assertEquals(KeyCode.KEY_F24, 135);
});

test('KEY_NUM_LOCK', () => {
  assertEquals(KeyCode.KEY_NUM_LOCK, 144);
});

test('KEY_SCROLL_LOCK', () => {
  assertEquals(KeyCode.KEY_SCROLL_LOCK, 145);
});

test('KEY_COMMA', () => {
  assertEquals(KeyCode.KEY_COMMA, 188);
});

test('KEY_PERIOD', () => {
  assertEquals(KeyCode.KEY_PERIOD, 190);
});

test('KEY_SLASH', () => {
  assertEquals(KeyCode.KEY_SLASH, 191);
});

test('KEY_BACK_QUOTE', () => {
  assertEquals(KeyCode.KEY_BACK_QUOTE, 192);
});

test('KEY_OPEN_BRACKET', () => {
  assertEquals(KeyCode.KEY_OPEN_BRACKET, 219);
});

test('KEY_BACK_SLASH', () => {
  assertEquals(KeyCode.KEY_BACK_SLASH, 220);
});

test('KEY_CLOSE_BRACKET', () => {
  assertEquals(KeyCode.KEY_CLOSE_BRACKET, 221);
});

test('KEY_QUOTE', () => {
  assertEquals(KeyCode.KEY_QUOTE, 222);
});

test('KEY_META', () => {
  assertEquals(KeyCode.KEY_META, 224);
});

runTests();
