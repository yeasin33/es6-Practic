// new keywords , class and object difference

class  parson{
    constructor(fastName, lastName, salary, companyName){
        this.fastName =  fastName,
        this.lastName = lastName,
        this.salary = salary;
        this.companyName = companyName
    }
}
const heroParson = new parson('Mohammad', 'Yeasin', 40000, 'Saudi Milk');
const friendParson = new parson('khalid','islam', 5000, 'RSCM')
console.log(heroParson);
console.log(friendParson);

function Parson(fastName, lastName, salary, age){
this.fastName = fastName;
this.lastName = lastName;
this.salary = salary;
this.age = age;
}

const oldParson = new parson('faisla', 'hasan', 4000, 23);
console.log(oldParson);