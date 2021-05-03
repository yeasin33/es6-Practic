// apply map, filter, find on an array of object
const student = [
    {id:34, name:'faisal'},
    {id:12, name:'sujon'},
    {id:60, name:'shomon'},
    {id:37, name:'smamim'}
];

const allName = student.map(x => x.name);
const ids = student.map(x => x.id);
const lastIndex = student.find(x => x.id> 30);
const biggerObject = student.filter(x => x.id > 12);
console.log(allName);
console.log(ids);
console.log(lastIndex);
console.log(biggerObject);