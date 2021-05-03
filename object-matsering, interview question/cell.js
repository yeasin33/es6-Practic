
// // Object Method review property.

const bigParson = {
    FastName: 'Mohammad',  
    lastName:'yeasin',
    salary: 50000,
    getFullName: function(){
        console.log(this.FastName,  this.lastName)
    },
    ChargeAmount: function(amount, tax , tips){
        console.log(this);
        this.salary = this.salary - amount, tax , tips;
        return this.salary;

    }
}

// const cutAmount = bigParson.ChargeAmount(1000);
// console.log(cutAmount);

// console.log(bigParson.getFullName());
// bigParson.ChargeAmount(5000);
// bigParson.ChargeAmount(10000);
// console.log(bigParson.salary);


const phoneCase = {
    name:'whiteCase',
    color: 'White',
    salary:2000 
}

const mobilePhone = {
    name:'iPhone',
    color: 'Black',
    salary: 30000 
}
// bind method 

// const discountPrice = bigParson.ChargeAmount.bind(phoneCase);
// discountPrice(300);
// discountPrice(500);
// console.log(phoneCase.salary + ' Taka');


// cell method
 
// bigParson.ChargeAmount.call(phoneCase, 800);
// bigParson.ChargeAmount.call(mobilePhone, 800);
// console.log(phoneCase.salary);
// console.log(mobilePhone.salary);

// apply method 

bigParson.ChargeAmount.apply(phoneCase,[ 400, 200, 50])
bigParson.ChargeAmount.apply(mobilePhone, [600, 40, 10]);
console.log(phoneCase.salary);
console.log(mobilePhone.salary);





// const normalParson = {
//     fastName: 'Mohammad',
//     lastName: 'Yeaisn',
//     salary : 20000,
//     getFullName: function(){
//         console.log(this.fastName, this.lastName);
//     },
//      chargeBill: function(amount,tax, tips){
//           console.log(this);
//         this.salary = this.salary - amount - tax - tips;
//         return  this.salary;
//      }
// }

// // console.log(normalParson.getFullName());
 
// // normalParson.chargeBill(5000);
// // normalParson.chargeBill(100)
// // console.log(normalParson.salary);

// // object use bind to borrow method form another object;

// const heroParson = {
//     fastName :  'Hero',
//     lastName : 'Alam',
//     salary: 30000
// }


// const friendlyParson = {
//     fastName : 'hero',
//     lastName: 'Golam',
//     salary: 30000
// }

// //  const heroParsonChargeBill = normalParson.chargeBill.bind(heroParson);

// //  heroParsonChargeBill(5000);
// //  heroParsonChargeBill(5000);
// //  console.log(heroParson.salary);
// //  console.log(normalParson.salary);

// // difference between bind, cell and apply Method

// // normalParson.chargeBill.call(heroParson, 4000, 300, 100);
// // normalParson.chargeBill.call(friendlyParson, 3000, 0, 0);
// // console.log(friendlyParson.salary);
// // console.log(heroParson.salary);

// // apply Method 

// normalParson.chargeBill.apply(heroParson ,[ 500, 100, 50]);
// console.log(heroParson.salary);
