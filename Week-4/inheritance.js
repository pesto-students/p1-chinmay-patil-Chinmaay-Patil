/*Create an object calledTeacherderived from thePersonclass, and implement a method 
calledteachwhich receives a string calledsubject, andprints out:
[teacher's name]is now teaching[subject]
*/
var Person = function () { };

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}


// creating object teacher 
const Teacher = function () {                                       
// creating function teach
    Teacher.prototype.teach = function (subject) {
        console.log(this.name + ' is now teaching ' + subject);
    }
}
// implementing inhertiance setting person as parent and teacher as child
Object.setPrototypeOf(Teacher.prototype, Person.prototype);

//creating contructor
var him = new Teacher();
him.initialize("Adam", 45);
him.teach("Inheritance");