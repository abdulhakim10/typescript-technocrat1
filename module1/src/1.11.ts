{
    // Ternary Operator || optional chaining || nullish coalescing Operator = (?)

    // Ternary Operator
    const age = 21;

    const isAdult = age >= 18 ? "adult" : "not adult";
    // console.log(isAdult);

    // nullish coalescing operator
    // null or undefined ----> decision making

    const isAuthenticated = '';

    const result1 = isAuthenticated ?? "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";

    // console.log({result1}, {result2});

    // optional chaining

    type User = {
        name: string;
        email: string;
        gender: 'male' | 'female';
        age: number;
        address: {
            presentAddress: string;
            permanentAddress?: string;
        }
    }

    const user: User = {
        name: 'Mezbaul',
        email: 'mezbaul@me.com',
        gender: 'male',
        age: 21,
        address: {
            presentAddress: 'Uganda'
        }
    }

    const result3 = user?.address?.permanentAddress ?? "Not Available";
    console.log(result3);
}