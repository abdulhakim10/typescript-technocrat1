{
//
// type alias
type User1 = {
    name: string;
    age: number;
};

// type interface
interface User2 {
    name: string;
    age: number;
};

// intersection
type UserWithRole = User2 & {role: string};

interface UserWithRole1 extends User1 {
    role: string;
}

const newUser : UserWithRole1 = {
    name: 'Taymur',
    age: 23,
    role: 'user'
}

// type alias for array
type Roll = number[];

// type interface for array
interface Roll1 {
    [index: number] : number
}

const rollNumber: Roll1 = [1, 2, 3, 4, ]

// type alias for function
type Add1 = (num1: number, num2: number) => number;

// type interface for function
interface Add2 {
    (num1: number, num2: number) : number;
}

const addNumber: Add2 = (num1, num2) => num1 + num2;

// 
}