class Person {
  private _firstName;
  private _lastName;
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value: string) {
    if (value.length > 0) {
      this._firstName = value;
    } else console.log("you cant enter empty firtsname");
  }
  get lastName() {
    return this._lastName;
  }

  set lastName(value: string) {
    if (value.length > 0) {
      this.lastName = value;
    } else console.log("you cant enter empty lastname ");
  }

  getfullName() {
    return `${this._firstName},${this._lastName}`;
  }
}
function testPerson() {
  let Person1 = new Person("hossein", "vakili");
  console.log(Person1.getfullName());

  console.log(Person1.firstName);
  console.log(Person1.lastName);

  Person1.firstName = "ali";
  Person1.lastName = "rahi";
  console.log(Person1.getfullName());

  Person1.firstName = "";
  Person1.lastName = "";

  console.log(Person1.getfullName());
}
testPerson();
