// class Shape {
//     area(): void {
//         console.log("Displaying area of shapes");
//     }
// }

// class Rectangle extends Shape {
//     area1(): void {
//         console.log("Displaying area of rectangle");
//     }
// }

// class Circle extends Rectangle {
//     area2(): void {
//         console.log("Displaying area of circle");
//     }
// }

// let circle = new Circle()
// circle.area()
// circle.area1()
// circle.area2()

class NewCar {
car() {
    console.log("Class Car");
}
vehicleType(): void{
    console.log("Vehicle type : car");
}
}

class Nissan extends NewCar{
    nissan(){
        console.log("Class Nissan");
    }
    brand(): void{
        console.log("Brand : Nissan");        
    }
    speed():void{
        console.log("Max speed : 95Kmph")
    }
}

class Sunny extends Nissan{
    sunny(){
        console.log("Nissan model : Sunny")
    }
    speed(): void {
        console.log("Max speed : 85Kmph")
    }
}

let obj = new Sunny()
obj.vehicleType();
obj.brand();
obj.speed()
