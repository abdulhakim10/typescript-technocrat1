{
// promise
type Somthing = {
    something: string
}

// simulate
const createPromise = (): Promise<Somthing> => {
    return new Promise<Somthing>((resolved, reject) => {
        const data: Somthing = {something: 'something'}
        if(data) {
            resolved(data)
        } else {
            reject(data)
        }
    })
}
// calling create promise function
const showData = async (): Promise<Somthing> => {
    const data: Somthing = await createPromise();
    console.log(data)
    return data
}
showData();

type ToDo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

const getToDo = async(): Promise<ToDo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data);
    return(data)
}
getToDo();
// 
}