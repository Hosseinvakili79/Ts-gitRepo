class person {
    constructor(private firstName: string, private lastName: string) {}
  
    get fullname():string{
      return `${this.firstName},${this.lastName}`
    }
  
  }
  const person1 =new person("hossein","vakili")
  console.log(person1.fullname);