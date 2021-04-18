// Arrow Function , Multiple parameter, function body;
// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function(num){
//     return   num * 3;
// }

const doubleIt = sum => sum * 3;
const result = doubleIt(10);
console.log(result);

const add = (x, y = 23) => x * y;
const result2 = add(10, 34);
console.log(result2);

const add5 = ()=> 5 * 10;
const result3 = add5();
console.log(result3);

const doMath = (x, y)=>{
    const num = (x + y);
    const diff = (x - y);
    const total = num * diff;
    return total;
}

const multiple = doMath(12, 10);
console.log(multiple);
