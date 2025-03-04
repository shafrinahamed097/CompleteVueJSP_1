// const data = [12, 4, 16, 9, 23]

// const [a, b, ...c] = data;
// console.log(a, b, c)

const person = {
    fname: "John",
    lname: "Doe",
    age: 32,
    sex: 'M'


}

const { fname, lname, ...rest } = person
console.log(fname, lname, rest);
console.log(rest.age);

function getData() {
    const country = "Bangladesh"
    const capital = "Dhaka"

    return { country, capital }
}

const details = getData()
console.log(details);

const { country, capital } = getData()
console.log(country, capital)