const {map, cube, identity} = require('./map');

describe('Map', () => {

    it('Cube of [] is []', () => {
        expect(map([], cube)).toEqual([]);
    })

    it('Identity of [1,2,3] is [1,2,3]', () => {
        expect(map([1,2,3], identity)).toEqual([1,2,3]);
    })

    it('Cube of [1,2,3] is [1,8,27]', () => {
        expect(map([1,2,3], cube)).toEqual([1,8,27]);
    })

    it('Map on given condition', () => {
        expect(map([{x : 10}], someObject => someObject.x + 1)).toEqual([11]);
    })

})
