function add(a: number, b:number):number;

function add(a:string, b:string): string;

function add(a:any, b:any):any{
    return a+b
}

console.log("String addition : ", add("Damon", "Salvatore"));
console.log("Number addition : ", add(3,2))
console.log("Error : ", add("2","Hi"))