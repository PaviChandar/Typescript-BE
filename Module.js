"use strict";
exports.__esModule = true;
var Sum = /** @class */ (function () {
    function Sum(x, y) {
        this.x = x;
        this.y = y;
    }
    Sum.prototype.Addition = function () {
        console.log("The sum is : ", (this.x + this.y));
    };
    return Sum;
}());
exports.Sum = Sum;
