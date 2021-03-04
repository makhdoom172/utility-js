const {filter, filterUpperCase} = require('./filter');

describe('Filter', () => {

    it('Filter on array with given condition', () => {
        expect(filter([], x => true)).toEqual([]);
    })

    it('Filter on array with given condition', () => {
        expect(filter([1,2,3],x => true)).toEqual([1,2,3]);
    })

    it('Filter on array with given condition', () => {
        expect(filter([1,2,3],x => false)).toEqual([]);
    })

    it('Filter on array with given condition', () => {
        expect(filter([1,2,3],x => x > 1)).toEqual([2,3]);
    })

    it('Filter on array with given condition', () => {
        expect(filter(['a','B','c','D'], filterUpperCase)).toEqual(['B','D']);
    })

})