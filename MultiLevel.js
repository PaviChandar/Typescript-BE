// class Shape {
//     area(): void {
//         console.log("Displaying area of shapes");
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var NewCar = /** @class */ (function () {
    function NewCar() {
    }
    NewCar.prototype.car = function () {
        console.log("Class Car");
    };
    NewCar.prototype.vehicleType = function () {
        console.log("Vehicle type : car");
    };
    return NewCar;
}());
var Nissan = /** @class */ (function (_super) {
    __extends(Nissan, _super);
    function Nissan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nissan.prototype.nissan = function () {
        console.log("Class Nissan");
    };
    Nissan.prototype.brand = function () {
        console.log("Brand : Nissan");
    };
    Nissan.prototype.speed = function () {
        console.log("Max speed : 95Kmph");
    };
    return Nissan;
}(NewCar));
var Sunny = /** @class */ (function (_super) {
    __extends(Sunny, _super);
    function Sunny() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sunny.prototype.sunny = function () {
        console.log("Nissan model : Sunny");
    };
    Sunny.prototype.speed = function () {
        console.log("Max speed : 85Kmph");
    };
    return Sunny;
}(Nissan));
var obj = new Sunny();
obj.vehicleType();
obj.brand();
obj.speed();
