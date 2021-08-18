import universalPromiseAll from "../src/universalPromiseAll";
import assert from 'assert';


describe('universalPromiseAll', () => {
    it('Array', async () => {
        const result: any = await universalPromiseAll([Promise.resolve(1)]);
        assert.equal(result[0], 1);
    })

    it('Object', async () => {
        const result: any = await universalPromiseAll({a: Promise.resolve(1)});
        assert.equal(result.a, 1);
    });

    it('Map', async () => {
        const result: any = await universalPromiseAll(new Map([['a', Promise.resolve(1)]]));
        assert.equal(result.get('a'), 1);
    });
});