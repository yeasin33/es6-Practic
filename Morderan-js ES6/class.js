// Class, Constructor, create a object  form a class

class student{
    constructor(sId, sName, Sage, ){
        this.id = sId;
        this.name = sName;
        this.age = Sage;
        this.country = 'bangladesh'
        this.school = "Bancharampur Technical School";

    }

}

const student1 = new student(12, "hasanMia", 23 );
const student2 = new student(14, "arafat", 22);
const student3 = new student( 15, "faisal", 24);
console.log(student1.age, student2, student3);
