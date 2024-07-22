class Rectangle {
    constructor (private width :number,private height :number){}

    get area(){
        return this.width * this.height
    }
}
const rectangle =new Rectangle (20,30)
console.log(rectangle.area);
