//Spread operator, concatenate multiple arrays, array max
const num1 = [23, 12, 45, 64, 68, 67, 87, 99];
const num2 = [14, 16, 32, 45];
const num3 = [12, 33, 98, 57, 29];
const allNum =num1.concat(num2).concat([10]).concat(num3);
const allName = [...num1, ...num2, ...num3]
console.log(allName);

const takaPoisha = [23, 10, 56, 86, 96];
const miximimum = Math.max(...takaPoisha)
    console.log(miximimum);