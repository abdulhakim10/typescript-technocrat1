{
// generic constraint with keyof operator
type Vehical ={
    bike: string;
    car: string;
    ship: string;
}

type Owner = "bike" | "car" | "ship" // manually

type Owner2 = keyof Vehical; // with operator

const person1: Owner2 = "bike"

const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key]
}

const user = {
    naem: "hasan",
    age: 24,
    address: "ghjkl;"
}

const result = getPropertyValue(user, 'address')
// 
}