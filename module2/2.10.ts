{
// mapped type

const arrayOfNumbers: number[] = [1, 2, 3, 4, 5,];

const arrayOfStrings: string[] = arrayOfNumbers.map(number => number.toString());
console.log(arrayOfStrings);

type Height = AreaNumber['height']; //look up type

type AreaNumber = {
    height: number;
    width: number;
}

// mapped type
type AreaString<T> = {
    [key in keyof T]: T[key];
}

const res1: AreaString<{height: boolean; width: number}> = {
    height: true,
    width: 2
}
// 
}