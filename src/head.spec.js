const head = require('./head');

describe('Head', () => {

    it('head of [1,2,3] is 1', () => {
        expect(head([1,2,3])).toEqual(1);
    });

    it('head of [] is null', () => {
        expect(head([])).toEqual(null);
    });

})