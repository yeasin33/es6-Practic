// Null Vs Undefine . you can get different way undefine;
// fast way you can be get undefine
// let $name;
// console.log($name); here dose not  set value;
// second way
function add(num1 , num2){
    console.log(num1 + num2); // here we anything don't return;
    
}
 const result =   add(12, 30);
 console.log(result);

 function add(num1 , num2){
    return // here we function parameter don't return;
    
}
 const result1 =   add(12, 30);
 console.log(result1);

 function add(num1 , num2 ){
   return num1 , num2;    
    
}
 const result2 =   add(12 );// here don't puss parameter value
 console.log(result2);


 const parson = {name: 'arafat', id:45, phone:057453, city:'bangladesh' }
//  console.log(parson.city);

 if(parson.city == 'bangladesh'){
     console.log("that's good");
 }
 else{
     return false
 }

 console.log(parson);

 const fun = undefined;
 console.log(fun);

