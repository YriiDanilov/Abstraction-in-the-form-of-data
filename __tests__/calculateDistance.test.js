import { calculateDistance } from '../src/calculateDistance.js';

describe('distance', () => {
    test('To find distance between two points', () => {
        expect(calculateDistance([0, 0], [3, 4])).toBe(5);
        expect(() => calculateDistance([0], [3, 4])).toThrow(
            'Type correct point',
        );
        expect(calculateDistance([-1, -4], [-1, -10])).toBe(6);
    });
});
