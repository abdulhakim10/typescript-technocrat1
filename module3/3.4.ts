{
// instanceof guard
class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log('I am making sound');
    }
};

class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
    }

    makeBark() {
        console.log('I am barking');
    }
};

class Cat extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
    }

    makeMew() {
        console.log('I am mewing')
    }
};

// smart way to type guard
const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
}

const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
}

const getAnimal = (animal: Animal) => {
    // type guard || type narrowing
    if(isDog(animal)){ // animal instanceof Dog this condition also work
        animal.makeBark();
    } else if (isCat(animal)) { // animal instanceof Cat this condition also work
        animal.makeMew();
    } else {
        animal.makeSound();
    }
}

const dog = new Dog('Tommy', 'dog');
const cat = new Cat('Kitty', 'cat');
// 

getAnimal(dog);
}