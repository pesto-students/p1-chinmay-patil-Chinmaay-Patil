const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const person2 = {
    firstName: "Chinmay",
    lastName: "Patil"
}
const person3 = {
    firstName: "Jena",
    lastName: "Berry"
}
/* demonstrating call function*/
console.log(person.fullName.call(person2));

/* demonstrating apply function*/

console.log(person.fullName.apply(person3));

/* demonstrating bind function*/
const member = {
    firstName: "Hendrix",
    lastName: "Gill",
}

let fullName = person.fullName.bind(member);
console.log(fullName());
