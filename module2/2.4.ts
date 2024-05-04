{
// interface -- generic

// generic type 
// if Y does not value it will take null by default
type Developer<T, Y = null> = {
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number
    };
    smartPhone: T;
    bike?: Y
}

interface SmartPhone {
    brand: string;
    model: string;
    display: string;
}

const poorDev: Developer<SmartPhone> = {
    name: "Tusar",
    computer: {
        brand: "Lenovo",
        model: "X1 Carbon",
        releaseYear: 2018
    },
    smartPhone: {
        brand: "POCO",
        model: "X2",
        display: "unknown"
    }
}

interface Bike {
    brand: string;
    model: string
}
const richDev: Developer<SmartPhone, Bike> = {
    name: "Hasan",
    computer: {
        brand: "Apple",
        model: "Macbook Air M1",
        releaseYear: 2020
    },
    smartPhone: {
        brand: "Xiaomi",
        model: "Note 7",
        display: "AMOLED"
    },
    bike: {
        brand: "Yamaha",
        model: "R15"

    }
}

const richDev2: Developer<SmartPhone> = {
    name: "Shahalam",
    computer: {
        brand: "Apple",
        model: "Macbook Pro",
        releaseYear: 2019
    },
    smartPhone: {
        brand: "Apple",
        model: "Iphone X",
        display: "super amoled"
    }
}

// 
}