"use strict";
exports.__esModule = true;
var Multiplication = /** @class */ (function () {
    function Multiplication(a, b) {
        this.a = a;
        this.b = b;
    }
    Multiplication.prototype.Multiply = function () {
        console.log("The multiplied value is : ", (this.a * this.b));
    };
    return Multiplication;
}());
exports.Multiplication = Multiplication;
var Division = /** @class */ (function () {
    function Division(l, m) {
        this.l = l;
        this.m = m;
    }
    Division.prototype.Divide = function () {
        console.log("The divided value is : ", (this.l / this.m));
    };
    return Division;
}());
exports.Division = Division;
