const fname = "John";
const lname = "Doe";

const person = {
    fname: fname,
    lname: lname,
    introduce: function () {
        console.log("Hi I am" + " " + this.fname + " " + this.lname);
    }
}

const person_es6 = {
    fname,
    lname,
    introduce() {
        // console.log("Hi I am" + " " + this.fname + " " + this.lname);

        console.log(`Hi I am ${this.fname} ${this.lname}`);
    }
}

console.log(person);
console.log(person_es6);
person.introduce();
person_es6.introduce();