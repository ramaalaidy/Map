const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers); 

const divisibleBy2or5 = numbers.filter(num => num % 2 === 0 || num % 5 === 0);
console.log(divisibleBy2or5); 

const divisibleBy3Squared = numbers.filter(num => num % 3 === 0).map(num => num * num);
console.log(divisibleBy3Squared); 

const sumSquaredDivisibleBy5 = numbers.filter(num => num % 5 === 0).map(num => num * num).reduce((total, num) => total + num, 0);
console.log(sumSquaredDivisibleBy5); 
