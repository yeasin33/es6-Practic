// window ,global Scope, global variable;

// const fastName = "abdul kuddus";
// function add(x , y){
//      window.result  = x + y;
//     console.log('result Inside:', fastName);
//     function double(num){
//     return num * 2;
//     }
//     const total1 = double(result)
//     return total1;
// }
// const total = add(12, 40);
// console.log(total);
// console.log('result outside:', fastName);
// console.log('result outside', result);

// const second = () => console.log('i am yeasin');


// const third = () => console.log(' i am jamal');

// const fast = () => {
//     console.log('i am fast')
//     setTimeout(second, 3000);
//     new Promise((resolve)=>
//     resolve('i am write after third, before second ')
//     ).than((resolve) => console.log(resolve));
//     third();

// };
//  fast();

// function process(num){
// console.log(num)
// };

// [1,2,3,4,5].forEach((i) =>{
//     process(i);
// });

// function foo(b){
//     let a = 10;
//     return a + b + 11;
// }

// function bar(y){
//     let x = 3 ;
//     return foo(x * y);
// }

// console.log(bar(7));

const  start = new Date();
let sum = 0;
for(let i = 0; i<1000000; i++){
    sum ++;
}

const end = new Date();
console.log('time elapsed',end-start);