import { assert } from 'chai';
import KeyCode from '../src/KeyCode';

/**
 * KeyCode test.
 */
describe('KeyCode', () => {
    it('KEY_CANCEL equals 3', () => {
        assert.equal(KeyCode.KEY_CANCEL, 3);
    });
});
