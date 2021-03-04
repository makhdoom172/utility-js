const reduce = require('./reduce');

describe('Reduce', () => {

    it('Reduce on array with given condition', () => {
        expect(reduce([], (x,y)=>x+y)).toEqual(undefined);
    })

    it('Reduce on array with given condition', () => {
        expect(reduce([], (x,y)=>x+y, 10)).toEqual(10);
    })

    it('Reduce on array with given condition', () => {
        expect(reduce(['a','b','c'], (x,y)=>x+y)).toEqual("abc");
    })

    it('Reduce on array with given condition', () => {
        expect(reduce(['a','b','c'], (x,y)=>x+y, 'z')).toEqual("zabc");
    })

})