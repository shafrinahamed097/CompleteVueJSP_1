const person = {
    fname: "John",
    lname: "Doe"
}

// const anotherPerson = person

const anotherPerson = Object.assign({}, person)
anotherPerson.fname = "Jane"

console.log(anotherPerson)
console.log(person)