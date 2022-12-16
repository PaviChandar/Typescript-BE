class Dog{
    sound="barking"
}

class Lion{
    sound="roaring"
}

class Goat{
    sound="bleat"
    swim(){
        console.log("Cannot swim!");
        
    }
}

let lion:Lion = new Dog()
let dog:Dog = new Lion()
let newLion:Lion = new Goat()
let goat:Goat = new Goat()
console.log("Lion sound : ",lion.sound );
console.log("Dog sound : ", dog.sound);
console.log("Lion sound : ", newLion.sound)
console.log("Goat sound : ", goat.sound);
console.log("Goat swim : ", goat.swim());