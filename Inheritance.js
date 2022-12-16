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
var Car = /** @class */ (function () {
    function Car(color) {
        this.color = color;
    }
    return Car;
}());
var Renault = /** @class */ (function (_super) {
    __extends(Renault, _super);
    function Renault(color, price) {
        var _this = _super.call(this, color) || this;
        _this.price = price;
        return _this;
    }
    Renault.prototype.display = function () {
        console.log("Color of Renault : ", this.color);
        console.log("Price of Renault : ", this.price);
    };
    return Renault;
}(Car));
var object = new Renault("Black", 750000);
object.display();
