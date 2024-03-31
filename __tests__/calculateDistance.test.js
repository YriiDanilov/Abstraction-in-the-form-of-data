import { calculateDistance } from '../src/calculateDistance.js';

describe('distance', () => {

    let point1;
    let point2;

    test('To find distance between two points', () => {
        point1 = [0, 0];
        point2 = [3, 4]
        expect(calculateDistance(point1, point2)).toBe(5)
    })

    test('Point is not full', () => {
        point1 = [0, ];
        point2 = [3, 4]
        expect(() => calculateDistance(point1, point2)).toThrow('Type correct point')
    })

    test('To find distance between two points', () => {
        point1 = [-1, -4]; //
        point2 = [-1, -10] //
        expect(calculateDistance(point1, point2)).toBe(6)
    })

})
