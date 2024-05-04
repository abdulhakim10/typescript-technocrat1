{
// 
// generic type
type GenericArray<T> = Array<T>;

const stArray : GenericArray<string> = ['a', 'b', 'c'];

const numArray : GenericArray<number> = [4, 5, 6, 7];

const boolArray : GenericArray<boolean> = [true, false, true];

const user: GenericArray<{name: string, age: number}> = [
    {
        name: "mesba",
        age: 23
    }
]

// generic tuple
type GenericTuple<X, Y> = [X,Y];

const userWithId: GenericTuple<number, {name: string, email: string}> = [2334, {name: 'rimon', email: 'r@gmail.com'}]
// 
}