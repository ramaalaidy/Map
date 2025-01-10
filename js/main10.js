let nums = [11, 22, 33, 46, 75, 86, 97, 98];

let squaredEvenNums = nums.filter(num => num % 2 === 0).map(num => num * num);
console.log(`squaredEvenNums: ${squaredEvenNums}`); 

let sum = nums.reduce((total, num) => total + num, 0);
console.log(`Sum of array elements: ${sum}`);  
