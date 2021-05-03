// break-continue in a for loop;

// let num = [1,2,3,4,5,6,7,8,9, 10];
// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
//     if(num[i]> 3){
//         break;
//     };
    
// }

let number = [1,2,3,4,5,6,7,8,9, 10];
for (let i = 0; i < number.length; i++) {
    if(number[i]<5){
        continue;
    };
    console.log(number[i]);
}