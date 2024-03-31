export const point1 = [0, 0];
export const point2 = [3, 4];

export const calculateDistance = (point1, point2) => {
    let x = Math.pow((point2[0] - point1[0]), 2)
    let y = Math.pow((point2[1] - point1[1]), 2)
    return Math.sqrt(x + y)
}