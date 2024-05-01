{
    // destructuring

    // object destructuring
    const user = {
        name: {
            firstName: "Mezbaul",
            middleName: "Abedin",
            lastName: "Persian"
        },
        contactNo: "01700000000",
        address: "Uganda"
    }

    const {
        contactNo, name: {middleName}
    } = user

    // array destructuring

    const myFriends = ["Omayer", "Qamrul", "A.Khaleq", "Tawhid", "Rafiq", "Ridwan", "Sajjad"];

    const [, , goodFriend, ...rest] = myFriends; // here first two elements are skipped and third element is assigned to goodFriend and rest of the elements are assigned to rest array.
    
}