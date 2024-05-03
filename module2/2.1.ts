{
// 
// type assertion
let anything: any;

anything = 'hello';
anything = true;
(anything as string);
(anything as number);

const kgToGm = (value: string | number): string | number | undefined => {
    if(typeof value === 'number'){
        const convertedVAlue = value * 1000;
        return `The coverted value is ${convertedVAlue}`;
    } else if(typeof value === 'string'){
        const numToSt = (parseFloat(value)) * 1000;
        return `The coverted value is ${numToSt}`;
    }
}

const result1 = kgToGm(1199) as number;
const result2 = kgToGm('2111') as string;

// type assertion with try catch
type CustomError = {
    message: string
}

try{

} catch(error){
    console.log((error as CustomError).message)
}
// 
}