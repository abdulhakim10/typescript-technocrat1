{
// function with generics
const createArray = (param: string): string[] => {
    return [param];
};

const createArrayWithGenerics = <T>(param: T): T[] => {
    return [param];
}

type User = {
    name: string;
    phone: number;
    email?: string
}

const res2 = createArrayWithGenerics<User>(
    {name: "Hakim", phone: 345}
)
const res1 = createArray("Bangladesh");

const createArrayWithGenericsTupple = <T,Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
};

const res3 = createArrayWithGenericsTupple<string, number>("Bangladesh",2222);
const res4 = createArrayWithGenericsTupple<{name: string}, number>({name: "Bangladesh"}, 456);

const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
        ...student,
        course
    }
}

const student1 = addCourseToStudent({
    name: "X",
    email: "x@mail.com",
    phone: 345678
});

const student2 = addCourseToStudent({
    name: "Y",
    email: "y@mail.com",
    address: "be3/3 tyuio"
})

// 
}