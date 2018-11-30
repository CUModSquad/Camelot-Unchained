"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var keyCodes_1 = require("./keyCodes");
var VK_KeyCodes_1 = require("./VK_KeyCodes");
function getVirtualKeyCode(jsCode) {
    switch (jsCode) {
        case keyCodes_1.default.KEY_Backspace:
            return VK_KeyCodes_1.default.VK_BACK;
        case keyCodes_1.default.KEY_Tab:
            return VK_KeyCodes_1.default.VK_TAB;
        case keyCodes_1.default.KEY_Enter:
            return VK_KeyCodes_1.default.VK_RETURN;
        case keyCodes_1.default.KEY_Shift:
            return VK_KeyCodes_1.default.VK_SHIFT;
        case keyCodes_1.default.KEY_Ctrl:
            return VK_KeyCodes_1.default.VK_CONTROL;
        case keyCodes_1.default.KEY_Alt:
            return VK_KeyCodes_1.default.VK_MENU;
        case keyCodes_1.default.KEY_PauseBreak:
            return VK_KeyCodes_1.default.VK_PAUSE;
        case keyCodes_1.default.KEY_CapsLock:
            return VK_KeyCodes_1.default.VK_CAPITAL;
        case keyCodes_1.default.KEY_Escape:
            return VK_KeyCodes_1.default.VK_ESCAPE;
        case keyCodes_1.default.KEY_Spacebar:
            return VK_KeyCodes_1.default.VK_SPACE;
        case keyCodes_1.default.KEY_PageUp:
            return VK_KeyCodes_1.default.VK_PRIOR;
        case keyCodes_1.default.KEY_PageDown:
            return VK_KeyCodes_1.default.VK_NEXT;
        case keyCodes_1.default.KEY_End:
            return VK_KeyCodes_1.default.VK_END;
        case keyCodes_1.default.KEY_Home:
            return VK_KeyCodes_1.default.VK_HOME;
        case keyCodes_1.default.KEY_LeftArrow:
            return VK_KeyCodes_1.default.VK_LEFT;
        case keyCodes_1.default.KEY_UpArrow:
            return VK_KeyCodes_1.default.VK_UP;
        case keyCodes_1.default.KEY_RightArrow:
            return VK_KeyCodes_1.default.VK_RIGHT;
        case keyCodes_1.default.KEY_DownArrow:
            return VK_KeyCodes_1.default.VK_DOWN;
        case keyCodes_1.default.KEY_PrintScrn:
            return VK_KeyCodes_1.default.VK_PRINT;
        case keyCodes_1.default.KEY_Insert:
            return VK_KeyCodes_1.default.VK_INSERT;
        case keyCodes_1.default.KEY_Delete:
            return VK_KeyCodes_1.default.VK_DELETE;
        case keyCodes_1.default.KEY_Zero:
            return VK_KeyCodes_1.default.VK_0;
        case keyCodes_1.default.KEY_One:
            return VK_KeyCodes_1.default.VK_1;
        case keyCodes_1.default.KEY_Two:
            return VK_KeyCodes_1.default.VK_2;
        case keyCodes_1.default.KEY_Three:
            return VK_KeyCodes_1.default.VK_3;
        case keyCodes_1.default.KEY_Four:
            return VK_KeyCodes_1.default.VK_4;
        case keyCodes_1.default.KEY_Five:
            return VK_KeyCodes_1.default.VK_5;
        case keyCodes_1.default.KEY_Six:
            return VK_KeyCodes_1.default.VK_6;
        case keyCodes_1.default.KEY_Seven:
            return VK_KeyCodes_1.default.VK_7;
        case keyCodes_1.default.KEY_Eight:
            return VK_KeyCodes_1.default.VK_8;
        case keyCodes_1.default.KEY_Nine:
            return VK_KeyCodes_1.default.VK_9;
        case keyCodes_1.default.KEY_a:
            return VK_KeyCodes_1.default.VK_A;
        case keyCodes_1.default.KEY_b:
            return VK_KeyCodes_1.default.VK_B;
        case keyCodes_1.default.KEY_c:
            return VK_KeyCodes_1.default.VK_C;
        case keyCodes_1.default.KEY_d:
            return VK_KeyCodes_1.default.VK_D;
        case keyCodes_1.default.KEY_e:
            return VK_KeyCodes_1.default.VK_E;
        case keyCodes_1.default.KEY_f:
            return VK_KeyCodes_1.default.VK_F;
        case keyCodes_1.default.KEY_g:
            return VK_KeyCodes_1.default.VK_G;
        case keyCodes_1.default.KEY_h:
            return VK_KeyCodes_1.default.VK_H;
        case keyCodes_1.default.KEY_i:
            return VK_KeyCodes_1.default.VK_I;
        case keyCodes_1.default.KEY_j:
            return VK_KeyCodes_1.default.VK_J;
        case keyCodes_1.default.KEY_k:
            return VK_KeyCodes_1.default.VK_K;
        case keyCodes_1.default.KEY_l:
            return VK_KeyCodes_1.default.VK_L;
        case keyCodes_1.default.KEY_m:
            return VK_KeyCodes_1.default.VK_M;
        case keyCodes_1.default.KEY_n:
            return VK_KeyCodes_1.default.VK_N;
        case keyCodes_1.default.KEY_o:
            return VK_KeyCodes_1.default.VK_O;
        case keyCodes_1.default.KEY_p:
            return VK_KeyCodes_1.default.VK_P;
        case keyCodes_1.default.KEY_q:
            return VK_KeyCodes_1.default.VK_Q;
        case keyCodes_1.default.KEY_r:
            return VK_KeyCodes_1.default.VK_R;
        case keyCodes_1.default.KEY_s:
            return VK_KeyCodes_1.default.VK_S;
        case keyCodes_1.default.KEY_t:
            return VK_KeyCodes_1.default.VK_T;
        case keyCodes_1.default.KEY_u:
            return VK_KeyCodes_1.default.VK_U;
        case keyCodes_1.default.KEY_v:
            return VK_KeyCodes_1.default.VK_V;
        case keyCodes_1.default.KEY_w:
            return VK_KeyCodes_1.default.VK_W;
        case keyCodes_1.default.KEY_x:
            return VK_KeyCodes_1.default.VK_X;
        case keyCodes_1.default.KEY_y:
            return VK_KeyCodes_1.default.VK_Y;
        case keyCodes_1.default.KEY_z:
            return VK_KeyCodes_1.default.VK_Z;
        case keyCodes_1.default.KEY_LeftWindowKey:
            return VK_KeyCodes_1.default.VK_LWIN;
        case keyCodes_1.default.KEY_RightWindowKey:
            return VK_KeyCodes_1.default.VK_RWIN;
        case keyCodes_1.default.KEY_SelectKey:
            return VK_KeyCodes_1.default.VK_SELECT;
        case keyCodes_1.default.KEY_Numpad0:
            return VK_KeyCodes_1.default.VK_NUMPAD0;
        case keyCodes_1.default.KEY_Numpad1:
            return VK_KeyCodes_1.default.VK_NUMPAD1;
        case keyCodes_1.default.KEY_Numpad2:
            return VK_KeyCodes_1.default.VK_NUMPAD2;
        case keyCodes_1.default.KEY_Numpad3:
            return VK_KeyCodes_1.default.VK_NUMPAD3;
        case keyCodes_1.default.KEY_Numpad4:
            return VK_KeyCodes_1.default.VK_NUMPAD4;
        case keyCodes_1.default.KEY_Numpad5:
            return VK_KeyCodes_1.default.VK_NUMPAD5;
        case keyCodes_1.default.KEY_Numpad6:
            return VK_KeyCodes_1.default.VK_NUMPAD6;
        case keyCodes_1.default.KEY_Numpad7:
            return VK_KeyCodes_1.default.VK_NUMPAD7;
        case keyCodes_1.default.KEY_Numpad8:
            return VK_KeyCodes_1.default.VK_NUMPAD8;
        case keyCodes_1.default.KEY_Numpad9:
            return VK_KeyCodes_1.default.VK_NUMPAD9;
        case keyCodes_1.default.KEY_Multiply:
            return VK_KeyCodes_1.default.VK_MULTIPLY;
        case keyCodes_1.default.KEY_NumpadPlus:
            return VK_KeyCodes_1.default.VK_ADD;
        case keyCodes_1.default.KEY_NumpadMinus:
            return VK_KeyCodes_1.default.VK_SUBTRACT;
        case keyCodes_1.default.KEY_DecimalPoint:
            return VK_KeyCodes_1.default.VK_DECIMAL;
        case keyCodes_1.default.KEY_Divide:
            return VK_KeyCodes_1.default.VK_DIVIDE;
        case keyCodes_1.default.KEY_F1:
            return VK_KeyCodes_1.default.VK_F1;
        case keyCodes_1.default.KEY_F2:
            return VK_KeyCodes_1.default.VK_F2;
        case keyCodes_1.default.KEY_F3:
            return VK_KeyCodes_1.default.VK_F3;
        case keyCodes_1.default.KEY_F4:
            return VK_KeyCodes_1.default.VK_F4;
        case keyCodes_1.default.KEY_F5:
            return VK_KeyCodes_1.default.VK_F5;
        case keyCodes_1.default.KEY_F6:
            return VK_KeyCodes_1.default.VK_F6;
        case keyCodes_1.default.KEY_F7:
            return VK_KeyCodes_1.default.VK_F7;
        case keyCodes_1.default.KEY_F8:
            return VK_KeyCodes_1.default.VK_F8;
        case keyCodes_1.default.KEY_F9:
            return VK_KeyCodes_1.default.VK_F9;
        case keyCodes_1.default.KEY_F10:
            return VK_KeyCodes_1.default.VK_F10;
        case keyCodes_1.default.KEY_F11:
            return VK_KeyCodes_1.default.VK_F11;
        case keyCodes_1.default.KEY_F12:
            return VK_KeyCodes_1.default.VK_F12;
        case keyCodes_1.default.KEY_NumLock:
            return VK_KeyCodes_1.default.VK_NUMLOCK;
        case keyCodes_1.default.KEY_ScrollLock:
            return VK_KeyCodes_1.default.VK_SCROLL;
        case keyCodes_1.default.KEY_Semicolon:
            return VK_KeyCodes_1.default.VK_OEM_1;
        case keyCodes_1.default.KEY_Equals:
            return VK_KeyCodes_1.default.VK_OEM_PLUS;
        case keyCodes_1.default.KEY_Comma:
            return VK_KeyCodes_1.default.VK_OEM_COMMA;
        case keyCodes_1.default.KEY_LessThan:
            return VK_KeyCodes_1.default.VK_OEM_COMMA;
        case keyCodes_1.default.KEY_Minus:
            return VK_KeyCodes_1.default.VK_OEM_MINUS;
        case keyCodes_1.default.KEY_Period:
            return VK_KeyCodes_1.default.VK_OEM_PERIOD;
        case keyCodes_1.default.KEY_GreaterThan:
            return VK_KeyCodes_1.default.VK_OEM_PERIOD;
        case keyCodes_1.default.KEY_ForwardSlash:
            return VK_KeyCodes_1.default.VK_OEM_2;
        case keyCodes_1.default.KEY_QuestionMark:
            return VK_KeyCodes_1.default.VK_OEM_2;
        case keyCodes_1.default.KEY_GraveAccent:
            return VK_KeyCodes_1.default.VK_OEM_3;
        case keyCodes_1.default.KEY_Tilde:
            return VK_KeyCodes_1.default.VK_OEM_3;
        case keyCodes_1.default.KEY_OpenCurlyBracket:
            return VK_KeyCodes_1.default.VK_OEM_4;
        case keyCodes_1.default.KEY_OpenSquareBracket:
            return VK_KeyCodes_1.default.VK_OEM_4;
        case keyCodes_1.default.KEY_BackSlash:
            return VK_KeyCodes_1.default.VK_OEM_5;
        case keyCodes_1.default.KEY_VerticalPipe:
            return VK_KeyCodes_1.default.VK_OEM_5;
        case keyCodes_1.default.KEY_CloseCurlyBracket:
            return VK_KeyCodes_1.default.VK_OEM_6;
        case keyCodes_1.default.KEY_CloseSquareBracket:
            return VK_KeyCodes_1.default.VK_OEM_6;
        case keyCodes_1.default.KEY_Quote:
            return VK_KeyCodes_1.default.VK_OEM_7;
        case keyCodes_1.default.KEY_CommandFF:
            return VK_KeyCodes_1.default.VK_OEM_7;
    }
    return 0;
}
exports.getVirtualKeyCode = getVirtualKeyCode;
function getJSKeyCode(vkCode) {
    switch (vkCode) {
        case VK_KeyCodes_1.default.VK_LBUTTON:
            return 0; // Left mouse button
        case VK_KeyCodes_1.default.VK_RBUTTON:
            return 0; // Right mouse button
        case VK_KeyCodes_1.default.VK_CANCEL:
            return keyCodes_1.default.KEY_PauseBreak; // Control-break processing
        case VK_KeyCodes_1.default.VK_MBUTTON:
            return 0; // Middle mouse button (three-button mouse)
        case VK_KeyCodes_1.default.VK_XBUTTON1:
            return 0; // X1 mouse button
        case VK_KeyCodes_1.default.VK_XBUTTON2:
            return 0; // X2 mouse button
        case VK_KeyCodes_1.default.VK_BACK:
            return keyCodes_1.default.KEY_Backspace; // BACKSPACE key
        case VK_KeyCodes_1.default.VK_TAB:
            return keyCodes_1.default.KEY_Tab; // TAB key
        case VK_KeyCodes_1.default.VK_CLEAR:
            return keyCodes_1.default.KEY_NumLock; // CLEAR key
        case VK_KeyCodes_1.default.VK_RETURN:
            return keyCodes_1.default.KEY_Enter; // ENTER key
        case VK_KeyCodes_1.default.VK_SHIFT:
            return keyCodes_1.default.KEY_Shift; // SHIFT key
        case VK_KeyCodes_1.default.VK_CONTROL:
            return keyCodes_1.default.KEY_Ctrl; // CTRL key
        case VK_KeyCodes_1.default.VK_MENU:
            return keyCodes_1.default.KEY_Alt; // ALT key
        case VK_KeyCodes_1.default.VK_PAUSE:
            return keyCodes_1.default.KEY_PauseBreak; // PAUSE key
        case VK_KeyCodes_1.default.VK_CAPITAL:
            return keyCodes_1.default.KEY_CapsLock; // CAPS LOCK key
        case VK_KeyCodes_1.default.VK_KANA:
            return 0; // IME Kana mode
        case VK_KeyCodes_1.default.VK_JUNJA:
            return 0; // IME Junja mode
        case VK_KeyCodes_1.default.VK_FINAL:
            return 0; // IME final mode
        case VK_KeyCodes_1.default.VK_HANJA:
            return 0; // IME Hanja mode
        case VK_KeyCodes_1.default.VK_KANJI:
            return 0; // IME Kanji mode
        case VK_KeyCodes_1.default.VK_ESCAPE:
            return keyCodes_1.default.KEY_Escape; // ESC key
        case VK_KeyCodes_1.default.VK_CONVERT:
            return 0; // IME convert
        case VK_KeyCodes_1.default.VK_NONCONVERT:
            return 0; // IME nonconvert
        case VK_KeyCodes_1.default.VK_ACCEPT:
            return 0; // IME accept
        case VK_KeyCodes_1.default.VK_MODECHANGE:
            return 0; // IME mode change request
        case VK_KeyCodes_1.default.VK_SPACE:
            return keyCodes_1.default.KEY_Spacebar; // SPACEBAR
        case VK_KeyCodes_1.default.VK_PRIOR:
            return keyCodes_1.default.KEY_PageUp; // PAGE UP key
        case VK_KeyCodes_1.default.VK_NEXT:
            return keyCodes_1.default.KEY_PageDown; // PAGE DOWN key
        case VK_KeyCodes_1.default.VK_END:
            return keyCodes_1.default.KEY_End; // END key
        case VK_KeyCodes_1.default.VK_HOME:
            return keyCodes_1.default.KEY_Home; // HOME key
        case VK_KeyCodes_1.default.VK_LEFT:
            return keyCodes_1.default.KEY_LeftArrow; // LEFT ARROW key
        case VK_KeyCodes_1.default.VK_UP:
            return keyCodes_1.default.KEY_UpArrow; // UP ARROW key
        case VK_KeyCodes_1.default.VK_RIGHT:
            return keyCodes_1.default.KEY_RightArrow; // RIGHT ARROW key
        case VK_KeyCodes_1.default.VK_DOWN:
            return keyCodes_1.default.KEY_DownArrow; // DOWN ARROW key
        case VK_KeyCodes_1.default.VK_SELECT:
            return keyCodes_1.default.KEY_SelectKey; // SELECT key
        case VK_KeyCodes_1.default.VK_PRINT:
            return keyCodes_1.default.KEY_PrintScrn; // PRINT key
        case VK_KeyCodes_1.default.VK_EXECUTE:
            return 0; // EXECUTE key
        case VK_KeyCodes_1.default.VK_SNAPSHOT:
            return keyCodes_1.default.KEY_PrintScrn; // PRINT SCREEN key
        case VK_KeyCodes_1.default.VK_INSERT:
            return keyCodes_1.default.KEY_Insert; // INS key
        case VK_KeyCodes_1.default.VK_DELETE:
            return keyCodes_1.default.KEY_Delete; // DEL key
        case VK_KeyCodes_1.default.VK_HELP:
            return 0; // HELP key
        case VK_KeyCodes_1.default.VK_0:
            return keyCodes_1.default.KEY_Zero;
        case VK_KeyCodes_1.default.VK_1:
            return keyCodes_1.default.KEY_One;
        case VK_KeyCodes_1.default.VK_2:
            return keyCodes_1.default.KEY_Two;
        case VK_KeyCodes_1.default.VK_3:
            return keyCodes_1.default.KEY_Three;
        case VK_KeyCodes_1.default.VK_4:
            return keyCodes_1.default.KEY_Four;
        case VK_KeyCodes_1.default.VK_5:
            return keyCodes_1.default.KEY_Five;
        case VK_KeyCodes_1.default.VK_6:
            return keyCodes_1.default.KEY_Six;
        case VK_KeyCodes_1.default.VK_7:
            return keyCodes_1.default.KEY_Seven;
        case VK_KeyCodes_1.default.VK_8:
            return keyCodes_1.default.KEY_Eight;
        case VK_KeyCodes_1.default.VK_9:
            return keyCodes_1.default.KEY_Nine;
        case VK_KeyCodes_1.default.VK_A:
            return keyCodes_1.default.KEY_a;
        case VK_KeyCodes_1.default.VK_B:
            return keyCodes_1.default.KEY_b;
        case VK_KeyCodes_1.default.VK_C:
            return keyCodes_1.default.KEY_c;
        case VK_KeyCodes_1.default.VK_D:
            return keyCodes_1.default.KEY_d;
        case VK_KeyCodes_1.default.VK_E:
            return keyCodes_1.default.KEY_e;
        case VK_KeyCodes_1.default.VK_F:
            return keyCodes_1.default.KEY_f;
        case VK_KeyCodes_1.default.VK_G:
            return keyCodes_1.default.KEY_g;
        case VK_KeyCodes_1.default.VK_H:
            return keyCodes_1.default.KEY_h;
        case VK_KeyCodes_1.default.VK_I:
            return keyCodes_1.default.KEY_i;
        case VK_KeyCodes_1.default.VK_J:
            return keyCodes_1.default.KEY_j;
        case VK_KeyCodes_1.default.VK_K:
            return keyCodes_1.default.KEY_k;
        case VK_KeyCodes_1.default.VK_L:
            return keyCodes_1.default.KEY_l;
        case VK_KeyCodes_1.default.VK_M:
            return keyCodes_1.default.KEY_m;
        case VK_KeyCodes_1.default.VK_N:
            return keyCodes_1.default.KEY_n;
        case VK_KeyCodes_1.default.VK_O:
            return keyCodes_1.default.KEY_o;
        case VK_KeyCodes_1.default.VK_P:
            return keyCodes_1.default.KEY_p;
        case VK_KeyCodes_1.default.VK_Q:
            return keyCodes_1.default.KEY_q;
        case VK_KeyCodes_1.default.VK_R:
            return keyCodes_1.default.KEY_r;
        case VK_KeyCodes_1.default.VK_S:
            return keyCodes_1.default.KEY_s;
        case VK_KeyCodes_1.default.VK_T:
            return keyCodes_1.default.KEY_t;
        case VK_KeyCodes_1.default.VK_U:
            return keyCodes_1.default.KEY_u;
        case VK_KeyCodes_1.default.VK_V:
            return keyCodes_1.default.KEY_v;
        case VK_KeyCodes_1.default.VK_W:
            return keyCodes_1.default.KEY_w;
        case VK_KeyCodes_1.default.VK_X:
            return keyCodes_1.default.KEY_x;
        case VK_KeyCodes_1.default.VK_Y:
            return keyCodes_1.default.KEY_y;
        case VK_KeyCodes_1.default.VK_Z:
            return keyCodes_1.default.KEY_z;
        case VK_KeyCodes_1.default.VK_LWIN:
            return keyCodes_1.default.KEY_LeftWindowKey; // Left Windows key (Natural keyboard)
        case VK_KeyCodes_1.default.VK_RWIN:
            return keyCodes_1.default.KEY_RightWindowKey; // Right Windows key (Natural keyboard)
        case VK_KeyCodes_1.default.VK_APPS:
            return 0; // Applications key (Natural keyboard)
        case VK_KeyCodes_1.default.VK_SLEEP:
            return 0; // Computer Sleep key
        case VK_KeyCodes_1.default.VK_NUMPAD0:
            return keyCodes_1.default.KEY_Numpad0; // Numeric keypad 0 key
        case VK_KeyCodes_1.default.VK_NUMPAD1:
            return keyCodes_1.default.KEY_Numpad1; // Numeric keypad 1 key
        case VK_KeyCodes_1.default.VK_NUMPAD2:
            return keyCodes_1.default.KEY_Numpad2; // Numeric keypad 2 key
        case VK_KeyCodes_1.default.VK_NUMPAD3:
            return keyCodes_1.default.KEY_Numpad3; // Numeric keypad 3 key
        case VK_KeyCodes_1.default.VK_NUMPAD4:
            return keyCodes_1.default.KEY_Numpad4; // Numeric keypad 4 key
        case VK_KeyCodes_1.default.VK_NUMPAD5:
            return keyCodes_1.default.KEY_Numpad5; // Numeric keypad 5 key
        case VK_KeyCodes_1.default.VK_NUMPAD6:
            return keyCodes_1.default.KEY_Numpad6; // Numeric keypad 6 key
        case VK_KeyCodes_1.default.VK_NUMPAD7:
            return keyCodes_1.default.KEY_Numpad7; // Numeric keypad 7 key
        case VK_KeyCodes_1.default.VK_NUMPAD8:
            return keyCodes_1.default.KEY_Numpad8; // Numeric keypad 8 key
        case VK_KeyCodes_1.default.VK_NUMPAD9:
            return keyCodes_1.default.KEY_Numpad9; // Numeric keypad 9 key
        case VK_KeyCodes_1.default.VK_MULTIPLY:
            return keyCodes_1.default.KEY_Multiply; // Multiply key
        case VK_KeyCodes_1.default.VK_ADD:
            return keyCodes_1.default.KEY_NumpadPlus; // Add key
        case VK_KeyCodes_1.default.VK_SEPARATOR:
            return 0; // Separator key
        case VK_KeyCodes_1.default.VK_SUBTRACT:
            return keyCodes_1.default.KEY_NumpadMinus; // Subtract key
        case VK_KeyCodes_1.default.VK_DECIMAL:
            return keyCodes_1.default.KEY_DecimalPoint; // Decimal key
        case VK_KeyCodes_1.default.VK_DIVIDE:
            return keyCodes_1.default.KEY_Divide; // Divide key
        case VK_KeyCodes_1.default.VK_F1:
            return keyCodes_1.default.KEY_F1; // F1 key
        case VK_KeyCodes_1.default.VK_F2:
            return keyCodes_1.default.KEY_F2; // F2 key
        case VK_KeyCodes_1.default.VK_F3:
            return keyCodes_1.default.KEY_F3; // F3 key
        case VK_KeyCodes_1.default.VK_F4:
            return keyCodes_1.default.KEY_F4; // F4 key
        case VK_KeyCodes_1.default.VK_F5:
            return keyCodes_1.default.KEY_F5; // F5 key
        case VK_KeyCodes_1.default.VK_F6:
            return keyCodes_1.default.KEY_F6; // F6 key
        case VK_KeyCodes_1.default.VK_F7:
            return keyCodes_1.default.KEY_F7; // F7 key
        case VK_KeyCodes_1.default.VK_F8:
            return keyCodes_1.default.KEY_F8; // F8 key
        case VK_KeyCodes_1.default.VK_F9:
            return keyCodes_1.default.KEY_F9; // F9 key
        case VK_KeyCodes_1.default.VK_F10:
            return keyCodes_1.default.KEY_F10; // F10 key
        case VK_KeyCodes_1.default.VK_F11:
            return keyCodes_1.default.KEY_F11; // F11 key
        case VK_KeyCodes_1.default.VK_F12:
            return keyCodes_1.default.KEY_F12; // F12 key
        case VK_KeyCodes_1.default.VK_F13:
            return 0; // F13 key
        case VK_KeyCodes_1.default.VK_F14:
            return 0; // F14 key
        case VK_KeyCodes_1.default.VK_F15:
            return 0; // F15 key
        case VK_KeyCodes_1.default.VK_F16:
            return 0; // F16 key
        case VK_KeyCodes_1.default.VK_F17:
            return 0; // F17 key
        case VK_KeyCodes_1.default.VK_F18:
            return 0; // F18 key
        case VK_KeyCodes_1.default.VK_F19:
            return 0; // F19 key
        case VK_KeyCodes_1.default.VK_F20:
            return 0; // F20 key
        case VK_KeyCodes_1.default.VK_F21:
            return 0; // F21 key
        case VK_KeyCodes_1.default.VK_F22:
            return 0; // F22 key
        case VK_KeyCodes_1.default.VK_F23:
            return 0; // F23 key
        case VK_KeyCodes_1.default.VK_F24:
            return 0; // F24 key
        case VK_KeyCodes_1.default.VK_NUMLOCK:
            return keyCodes_1.default.KEY_NumLock; // NUM LOCK key
        case VK_KeyCodes_1.default.VK_SCROLL:
            return keyCodes_1.default.KEY_ScrollLock; // SCROLL LOCK key
        case VK_KeyCodes_1.default.VK_LSHIFT:
            return keyCodes_1.default.KEY_Shift; // Left SHIFT key
        case VK_KeyCodes_1.default.VK_RSHIFT:
            return keyCodes_1.default.KEY_Shift; // Right SHIFT key
        case VK_KeyCodes_1.default.VK_LCONTROL:
            return keyCodes_1.default.KEY_Ctrl; // Left CONTROL key
        case VK_KeyCodes_1.default.VK_RCONTROL:
            return keyCodes_1.default.KEY_Ctrl; // Right CONTROL key
        case VK_KeyCodes_1.default.VK_LMENU:
            return keyCodes_1.default.KEY_Alt; // Left MENU key
        case VK_KeyCodes_1.default.VK_RMENU:
            return keyCodes_1.default.KEY_Alt; // Right MENU key
        case VK_KeyCodes_1.default.VK_BROWSER_BACK:
            return 0; // Browser Back key
        case VK_KeyCodes_1.default.VK_BROWSER_FORWARD:
            return 0; // Browser Forward key
        case VK_KeyCodes_1.default.VK_BROWSER_REFRESH:
            return 0; // Browser Refresh key
        case VK_KeyCodes_1.default.VK_BROWSER_STOP:
            return 0; // Browser Stop key
        case VK_KeyCodes_1.default.VK_BROWSER_SEARCH:
            return 0; // Browser Search key
        case VK_KeyCodes_1.default.VK_BROWSER_FAVORITES:
            return 0; // Browser Favorites key
        case VK_KeyCodes_1.default.VK_BROWSER_HOME:
            return 0; // Browser Start and Home key
        case VK_KeyCodes_1.default.VK_VOLUME_MUTE:
            return 0; // Volume Mute key
        case VK_KeyCodes_1.default.VK_VOLUME_DOWN:
            return 0; // Volume Down key
        case VK_KeyCodes_1.default.VK_VOLUME_UP:
            return 0; // Volume Up key
        case VK_KeyCodes_1.default.VK_MEDIA_NEXT_TRACK:
            return 0; // Next Track key
        case VK_KeyCodes_1.default.VK_MEDIA_PREV_TRACK:
            return 0; // Previous Track key
        case VK_KeyCodes_1.default.VK_MEDIA_STOP:
            return 0; // Stop Media key
        case VK_KeyCodes_1.default.VK_MEDIA_PLAY_PAUSE:
            return 0; // Play/Pause Media key
        case VK_KeyCodes_1.default.VK_LAUNCH_MAIL:
            return 0; // Start Mail key
        case VK_KeyCodes_1.default.VK_LAUNCH_MEDIA_SELECT:
            return 0; // Select Media key
        case VK_KeyCodes_1.default.VK_LAUNCH_APP1:
            return 0; // Start Application 1 key
        case VK_KeyCodes_1.default.VK_LAUNCH_APP2:
            return 0; // Start Application 2 key
        case VK_KeyCodes_1.default.VK_OEM_1:
            return keyCodes_1.default.KEY_Semicolon; // Used for miscellaneous characters; it can vary by keyboard.
        // For the US standard keyboard, the ';:' key
        case VK_KeyCodes_1.default.VK_OEM_PLUS:
            return keyCodes_1.default.KEY_Equals; // For any country/region, the '+' key
        case VK_KeyCodes_1.default.VK_OEM_COMMA:
            return keyCodes_1.default.KEY_Comma; // For any country/region, the ',' key
        case VK_KeyCodes_1.default.VK_OEM_MINUS:
            return keyCodes_1.default.KEY_Minus; // For any country/region, the '-' key
        case VK_KeyCodes_1.default.VK_OEM_PERIOD:
            return keyCodes_1.default.KEY_Period; // For any country/region, the '.' key
        case VK_KeyCodes_1.default.VK_OEM_2:
            return keyCodes_1.default.KEY_ForwardSlash; // Used for miscellaneous characters; it can vary by keyboard.
        // For the US standard keyboard, the '/?' key
        case VK_KeyCodes_1.default.VK_OEM_3:
            return keyCodes_1.default.KEY_GraveAccent; // Used for miscellaneous characters; it can vary by keyboard.
        // For the US standard keyboard, the '`~' key
        case VK_KeyCodes_1.default.VK_OEM_4:
            return keyCodes_1.default.KEY_OpenSquareBracket; // Used for miscellaneous characters; it can vary by keyboard.
        // For the US standard keyboard, the '[{' key
        case VK_KeyCodes_1.default.VK_OEM_5:
            return keyCodes_1.default.KEY_BackSlash; // Used for miscellaneous characters; it can vary by keyboard.
        // For the US standard keyboard, the '\|' key
        case VK_KeyCodes_1.default.VK_OEM_6:
            return keyCodes_1.default.KEY_CloseSquareBracket; // Used for miscellaneous characters; it can vary by keyboard.
        // For the US standard keyboard, the ']}' key
        case VK_KeyCodes_1.default.VK_OEM_7:
            return keyCodes_1.default.KEY_Quote; // Used for miscellaneous characters; it can vary by keyboard.
        // For the US standard keyboard, the 'single-quote/double-quote' key
        case VK_KeyCodes_1.default.VK_OEM_8:
            return 0; // Used for miscellaneous characters; it can vary by keyboard.
        case VK_KeyCodes_1.default.VK_OEM_102:
            return keyCodes_1.default.KEY_BackSlash;
        // Either the angle bracket key or the backslash key on the RT 102-key keyboard
        case VK_KeyCodes_1.default.VK_PROCESSKEY:
            return 0; // IME PROCESS key
        case VK_KeyCodes_1.default.VK_PACKET:
            return 0; // case vk.Used to pass Unicode characters as if they were keystrokes.
        // The VK_PACKET key is the low word of a 32-bit Virtual Key value used for non-keyboard input methods.
        // For more information, see Remark in KEYBDINPUT, SendInput, WM_KEYDOWN, and WM_KEYUP
        case VK_KeyCodes_1.default.VK_CRSEL:
            return 0; // CrSel key
        case VK_KeyCodes_1.default.VK_EXSEL:
            return 0; // ExSel key
        case VK_KeyCodes_1.default.VK_EREOF:
            return 0; // Erase EOF key
        case VK_KeyCodes_1.default.VK_PLAY:
            return 0; // Play key
        case VK_KeyCodes_1.default.VK_ZOOM:
            return 0; // Zoom key
        case VK_KeyCodes_1.default.VK_NONAME:
            return 0; // Reserved
        case VK_KeyCodes_1.default.VK_PA1:
            return 0; // PA1 key
        case VK_KeyCodes_1.default.VK_OEM_CLEAR:
            return 0; // Clear key
    }
    return 0;
}
exports.getJSKeyCode = getJSKeyCode;