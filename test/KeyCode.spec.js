import {assert} from 'chai';
import KeyCode from '../src/KeyCode';

/**
 * Simulate a key press event in the DOM.
 * @param {number} key
 */
function keyPress(key) {
    let event = document.createEvent('Event');
    event.keyCode = key;
    event.initEvent('keydown');

    document.dispatchEvent(event);
}

/**
 * KeyCode test.
 */
describe('KeyCode', () => {

    it('should match the key code for the key pressed', () => {
        let items = [
            {
                key: 13,
                name: 'KEY_RETURN'
            }, {
                key: 36,
                name: 'KEY_HOME'
            }, {
                key: 121,
                name: 'KEY_F10'
            }, {
                key: 222,
                name: 'KEY_QUOTE'
            }
        ];

        let keyPressed = null;
        let randomItem = items[Math.floor(Math.random() * items.length)];

        document.addEventListener('keydown', event => {
            keyPressed = event.keyCode;
        });

        // Trigger a key press
        keyPress(randomItem.key);

        assert(keyPressed === KeyCode[randomItem.name]);
    });

});
