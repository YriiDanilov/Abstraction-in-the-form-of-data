import calculateDistance from '../src/calculateDistance.js';

describe('distance', () => {

    let point1;
    let point2;

    beforeEach(()=> {
        point1 = [0, 0];
        point2 = [3, 4]
    })

    test('To find distance between two points', () => {
        expect(calculateDistance(point1, point2)).toBe(5)
    })
})
