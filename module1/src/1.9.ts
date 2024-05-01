{
    // Type Alias

    // Type alias with object
    type Student = {
        name: string;
        age: number;
        contactNo?: number;
        gender: string;
        address: string;
    };

    const student1 : Student = {
        name: "Mezbaul",
        age: 21,
        gender: "Male",
        address: "Uganda",
        contactNo: 123456789
    }

    const student2 : Student = {
        name: "Sajjad",
        age: 21,
        gender: "Male",
        address: "Uganda",
        // contactNo: 123456789
    }


    type UserName = string;
    type IsAdmin = boolean;

    const userName: UserName = "Mezbaul";
    const isAdmin: IsAdmin = true;

    // Type alias with function
    type Add = (num1: number, num2: number) => number;

    const add : Add = (num1, num2) => num1 + num2
}