class Car {
    color: string
    constructor(color: string) {
        this.color = color
    }
}

class Renault extends Car {
    price: number
    constructor(color: string, price: number) {
        super(color);
        this.price = price
    }

    display() : void{
        console.log("Color of Renault : ", this.color);
        console.log("Price of Renault : ", this.price);
    }
}

let object = new Renault("Black", 750000)
object.display()