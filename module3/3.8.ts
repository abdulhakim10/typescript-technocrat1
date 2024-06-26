{
// polymorphism
class Person {
    getSleep() {
        console.log('Sleep 8 hours');
    }
}

class Student extends Person {
    getSleep() {
        console.log('sleep 6 hours');
    }
}

class Developer extends Person {
    getSleep(){
        console.log('sleep 4 hours');
    }
}

const getSleepingHours = (param: Person) => {
    param.getSleep();
}

const person1 = new Person;
const person2 = new Student();
const person3 = new Developer();

getSleepingHours(person1);
getSleepingHours(person2);
getSleepingHours(person3);

class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    redius: number;
    constructor(redius: number) {
        super();
        this.redius = redius;
    }

    getArea(): number {
        return Math.PI * this.redius * this.redius;
    }
}

class Ractangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number){
        super();
        this.height = height;
        this.width = width;
    }

    getArea(): number {
        return this.height * this.width;
    }
}

const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
}

const shape1 = new Circle(15);
const shape2 = new Ractangle(6,7);

getShapeArea(shape1);
getShapeArea(shape2);
// 
}