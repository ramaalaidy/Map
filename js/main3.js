const calculateSumAndAverage = (arr) => {

    const sumOfSquares = arr.map(num => num ** 2).reduce((total, square) => total + square, 0);

    const average = sumOfSquares / arr.length;

    return average;
}

const numbers = [1, 2, 3, 4, 5];

const result = calculateSumAndAverage(numbers);

console.log("The average of the sum of squares is:", result);
