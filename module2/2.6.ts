{
// constraints
const addCourseToStudent = <T extends {id: number; name: string; email: string}>(student: T) => {
    const course = "Next Level Web Development";
    return {
        ...student,
        course
    }
}

const std = addCourseToStudent({
    id: 7,
    name: 'rimon',
    email: 'r4rtyuio',
    address: 'gyu',
    phone: 457

})

const st1 = addCourseToStudent({
    id: 2,
    name: "mr",
    email: "mr@mail.com",
    dvt: "normal"
});

const st2 = addCourseToStudent({
    id: 3,
    name: "Ur",
    email: "ur@gmail.com",
    phone: 345678
});
// 
}