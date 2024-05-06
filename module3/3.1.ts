{
// oop -- class

class Animal {
    // properties
    // name: string;
    // species: string;
    // sound: string;

    // constructor function
    constructor(public name: string, public species: string, public sound: string) { //parameter properties
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }

    // method
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);
    }
}

const dog = new Animal("German Shepard", "dog", "ghew ghew");

dog.makeSound();

// 
}