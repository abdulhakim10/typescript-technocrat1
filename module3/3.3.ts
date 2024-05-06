{
// type guards

// typeof --> type guard => type of operator works in runtime
type Alphanumeric = string | number;
const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {

    // type guard
    if(typeof param1 === 'number' && typeof param2 === 'number'){
        return param1 + param2
    } else {
        return param1.toString() + param2.toString()
    }
}
const result1 = add(3,'4');
console.log(result1);

// in --> type guard
type NormalUser = {
    name: string;
}

interface AdminUser {
    name: string;
    role: 'admin';
}
const getUser = (user: NormalUser | AdminUser) => {
    
    // type guard
    if('role' in user) {
        console.log(`My name is ${user.name} and I'm an ${user.role}`);
    } else {
        console.log(`My name is ${user.name}`);
    }
}

const normalUser : NormalUser = {
    name: 'Normal vai'
}
const adminUser : AdminUser = {
    name: 'Admin vai',
    role: 'admin'
}

getUser(adminUser)


// 
}