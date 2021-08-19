import universalPromiseAll from "../src/universalPromiseAll";
import assert from 'assert';


describe('universalPromiseAll', () => {
    it('Array', async () => {
        const result = await universalPromiseAll([Promise.resolve(1)]);
        assert.equal(result[0], 1);
    })

    it('Object', async () => {
        const {a} = await universalPromiseAll({a: Promise.resolve(1)});
        assert.equal(a, 1);
    });
});