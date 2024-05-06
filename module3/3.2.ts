{
// oop -- inheritence
class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep (numOfHours: number) {
        console.log(`${this.name} will sleep for ${numOfHours} hours`)
    }
}

class Student extends Parent {
    constructor(name: string, age: number, address: string){
        super(name, age, address);
    }

}
const student1 = new Student('mr. student', 20, 'uganda');
student1.getSleep(4)

class Teacher extends Parent {
    // name: string;
    // age: number;
    // address: string;
    // designation: string

    constructor(name: string, age: number, address: string, public designation: string) {
        super(name, age, address);
        // this.designation= designation;
    }

    // getSleep (numOfHours: number) {
    //     console.log(`${this.name} will sleep for ${numOfHours} hours`)
    // }

    takeClass(numOfClass: number) {
        console.log(`${this.name} will take ${numOfClass} classes.`)
    }
}

const teacher1 = new Teacher('Kamal Sir', 35, 'kumilla', 'prof');

teacher1.takeClass(4);
// 
}