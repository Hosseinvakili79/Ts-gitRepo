abstract class vehicle {
  constructor(public model: string, public year: number) {}

  abstract move(): void;

  printdetail() {
    console.log(`model :${this.model},year :${this.year}`);
  }
}

class car extends vehicle {
  constructor(model: string, year: number, public fueltype: string) {
    super(model, year);
  }
  move(): void {
    console.log(`${this.model}is driving`);
  }
}
class bycycle extends vehicle {
  constructor(model:string, year:number, public gearCount: number) {
    super(model, year);
  }
  move(): void {
    console.log(`${this.model}is pedaling`);
  }
}
const car1 =new car("pejo",2000,"petrol")
car1.printdetail()
car1.move()
const flash =new bycycle("flash",2005,8)
flash.printdetail()
flash.move();

