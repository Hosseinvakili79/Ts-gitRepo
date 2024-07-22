"use strict";
class person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullname() {
        return `${this.firstName},${this.lastName}`;
    }
}
const person1 = new person("hossein", "vakili");
console.log(person1.fullname);
