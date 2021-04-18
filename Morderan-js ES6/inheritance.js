// inheritance , extends class , super, class method

class parent{
    constructor() {
        this.fatherName = "farid Miah";
    }
    
}

class Child extends parent{
    constructor(name){
        super();
        this.name =name;
        this.gender = "Male";
        this.color = "brawn";

    }

    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("shamim");
const baby2 = new Child("faruk");
const baby3= new Child('yeaisn arafat');
console.log(baby.getFullName());
console.log(baby2.getFullName() , baby3);
