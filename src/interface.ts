interface Animal{
    name :string
    sound():string
}
class dog implements Animal{
    name :string

    constructor(name :string){
        this.name= name
    }

    sound(): string {
        return `${this.name} sound is hap hap`
        
    }

}
const dog1 =new dog ("jessi")
console.log(dog1.sound());


