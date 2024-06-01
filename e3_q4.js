class Shape{
    constructor(){
        if(this.constructor=== Shape){
            throw new Error("can't intialise the abstract class");
        }
    }
        area(){
            throw new Error("area must be intialised");
        }
        perimeter(){
            throw new Error("perimeter must be intialised");
        }
    }
    class Square extends Shape{
constructor(sidelengh){
super();
this.sidelengh=sidelengh;
}
area(){
    return this.sidelengh*this.sidelengh;
}
perimeter(){
    return this.sidelengh*4;
}
    }
    class Circle extends Shape {
        constructor(radius) {
          super();
          this.radius = radius;
        }
      
        area() {
          return Math.PI * this.radius * this.radius;
        }
      
        perimeter() {
          return 2 * Math.PI * this.radius;
        }
      }