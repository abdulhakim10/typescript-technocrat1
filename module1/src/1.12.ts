{
    // nullable types / unknown types / never types

    // nullable types
    const searchName = (value: string | null) => {
        if (value) {
            console.log("searching")
        } else {
            console.log("there is nothing to search");
        }
    }

    // searchName(null);

    // unknown typeof
    const getSpeedMeterPerSecond = (value: unknown) => {
        if(typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The converted speed is ${convertedSpeed} ms^-1`);
        } else if(typeof value === "string") {
            const stringToNumber = value.split(" ")
            const convertedSpeed = (parseFloat(stringToNumber[0]) * 1000) / 3600;
            console.log(`The converted speed is ${convertedSpeed} ms^-1`);
        } else {
            console.log("wrong input");
        }
    }
    getSpeedMeterPerSecond('1200 kmh^-1');

    // never type
    const throwError = (msg: string): never => {
        throw new Error(msg);
    }

    // throwError("Mushkil se error aayi hai");
// 
}