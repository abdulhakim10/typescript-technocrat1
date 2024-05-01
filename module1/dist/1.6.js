"use strict";
// Learning Function
// Normal Function
// Arrow Function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
const addArrow = (num1, num2) => {
    return num1 + num2;
};
// object --> function = method
const poorUser = {
    name: 'sachin',
    balance: 100,
    addBalance(money) {
        return `my new balance is ${this.balance + money}`;
    }
};
console.log(poorUser.addBalance(200));
