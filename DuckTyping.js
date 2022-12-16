var Dog = /** @class */ (function () {
    function Dog() {
        this.sound = "barking";
    }
    return Dog;
}());
var Lion = /** @class */ (function () {
    function Lion() {
        this.sound = "roaring";
    }
    return Lion;
}());
var Goat = /** @class */ (function () {
    function Goat() {
        this.sound = "bleat";
    }
    Goat.prototype.swim = function () {
        console.log("Cannot swim!");
    };
    return Goat;
}());
var lion = new Dog();
var dog = new Lion();
var newLion = new Goat();
var goat = new Goat();
console.log("Lion sound : ", lion.sound);
console.log("Dog sound : ", dog.sound);
console.log("Lion sound : ", newLion.sound);
console.log("Goat sound : ", goat.sound);
console.log("Goat swim : ", goat.swim());
