{
// abstraction => 1. interface 2. abstract

// abstraction using interface
// idea
// interface Vehicle {
//     startEngine(): void;
//     stopEngine(): void;
//     move(): void;
// };
type Vehicle = {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
};

// real implementation
class Car implements Vehicle {
    startEngine(): void {
        console.log('I am starting the car');
    };
    stopEngine(): void {
        console.log('I am stoping the car');
    };
    move(): void {
        console.log('I am moving the car');
    };  
    test(): void {
        console.log('I am testing');
    };
};

const toyotaCar = new Car();

toyotaCar.test();

// abstraction using abstract
// idea
abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    abstract test(): void;
};

// real implementation
class ToyotaCar extends Car2 {
    startEngine(): void {
        console.log('I am starting the car');
    };
    stopEngine(): void {
        console.log('I am stoping the car');
    };
    move(): void {
        console.log('I am moving the car');
    };  
    test(): void {
        console.log('I am testing');
    };
}

const newCar = new ToyotaCar();

newCar.startEngine();

// 
}