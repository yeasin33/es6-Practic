const number = [2, 8, 5, 9, 4,7];
const number1 = []
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result = element * element;
//     number1.push(result);
    
// }

console.log(number1);

//  const Multiple = number.map(function(x, index, array){
//     return x * x;
// })
// console.log(Multiple);

const result = number.map(x => x * x);
console.log(result);

const bigger = number.filter(x => x > 4);
console.log(bigger);
const small = number.filter(x => x < 4);
console.log(small);

const isThere = number.find(x => x>5);
console.log(isThere);

number.forEach(function(x,index, array){
    array[index] = x + 9;
})

console.log(number);
