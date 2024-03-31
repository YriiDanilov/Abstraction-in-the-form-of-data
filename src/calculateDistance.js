export const point1 = [0, 0];
export const point2 = [3, 4];

export const calculateDistance = (pointOne, pointTwo) => {
    if (pointOne.length < 2 || pointTwo.length < 2) {
        throw new Error('Type correct point');
    }
    const x = (pointTwo[0] - pointOne[0]) ** 2;
    const y = (pointTwo[1] - pointOne[1]) ** 2;
    return Math.sqrt(x + y);
};
