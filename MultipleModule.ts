export class Multiplication {
    constructor(private a: number, private b: number) {
    }
    Multiply() {
        console.log("The multiplied value is : ", (this.a * this.b))
    }
}

export class Division {
    constructor(private l: number, private m: number) {
    }
    Divide() {
        console.log("The divided value is : ", (this.l / this.m))
    }
}