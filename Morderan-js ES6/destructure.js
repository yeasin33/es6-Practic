const parson = {name:'Mohammad Faisal', id:45, age:22, country:'bangladesh', address:'bancharampur', job:'student', gender:'Male', friend:'yesin'};

const {address, id , age} = parson;
// const name = parson.name;
// const country = parson.country;
// const job = parson.job;
console.log(address ,id, age);
// console.log(job);
// console.log(country);

const friends = ['khalid', 'saifullah', 'faisal', 'rakib', 'jahid', 'kawsir'];
const [ outFast , ...oldsadik] = friends;
console.log(oldsadik);

const khalid = friends[5];
console.log(khalid);

const friends2 = {
    id: 45,
    name:'yeasin',
    info:{
        city:'dhaka',
        address:'bashgari',
        wife:'unmerid',
        job:'cleaner'
    }
}

// const { city} = friends2.info;
// console.log(city);

// let a, b, all;

// [a, b, ...all] = [10, 20, 40, 30, 50, 100];
// // console.log(all);

// ({a, b, ...all} = {a:10, b:30, c:40, d:50, g:100});
// console.log(a,b,all);

// let x, y;
// [x, y] = [1, 2];
// [y, x] = [x, y]
// console.log(x);

// let x , y;
// [x=4, y=8]
// console.log(x, y);

// let a = 1;
// let b = 3;

// [a, b] = [b, a];
// console.log(a); // 3
// console.log(b); // 1

// const arr = [1,2,3];
// let a = 1;
// let b = 3;

// [a, b] = [b, a];
// console.log(a); // 3
// console.log(b); // 1

// const arr = [1,2,3];
// [arr[1], arr[2]] = [arr[2], arr[1]];
// console.log(arr);

// function f(){
//     return [3 , 5,3];
// }
// let a, b;
// [,,]  = f();
// console.log(a , b);
// [c] = f();
// console.log(c);

// let a, b;
// ({a, b, ...all}  = {a: 5, b: 10, c:40, })

// console.log(all);

// const {a: aa= 20, b: bb= 40} = {a:10};
// console.log(aa, bb);

const user = {
    id: 42,
    age: 33,
    displayName: 'jdoe',
    fullName: {
      firstName: 'John',
      lastName: 'Doe'
    }
  };
  
  function userId({age}) {
    return age;
  }
  
  function isName({age, fullName:{fastName: name}}){
      return `${age} is ${ name}`;
  }
  
  console.log(userId(user)); // 42
  console.log(inName(user));  // "jdoe is John"