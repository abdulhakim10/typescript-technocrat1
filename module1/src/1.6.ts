// Learning Function
// Normal Function
// Arrow Function

function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(2, 3);

const addArrow = (num1: number, num2: number): number => {
    return num1 + num2;
}

// object --> function = method

const  poorUser = {
    name: 'sachin',
    balance: 100,
    addBalance(money: number): string {
        return `my new balance is ${this.balance + money}`
    }
}

const arr : number[] = [1, 2, 3, 4, 5];

const newArray : number[] = arr.map((elem: number): number => elem * elem)