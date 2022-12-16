//function paramters 
//optional params
// function display(id:number, name:string, email?:string){
//     console.log("ID : ", id, "Name : ",name)
//     if(email!=undefined){
//         console.log("Email : ", email)
//     }
// }
// display(505, "Klaus")
// display(105, "Marcel", "marcel1963@gmail.com")
//default params
// function show(name:string, greeting:string="Hello"){
//     return greeting+" "+name
// }
// console.log(show("World"))
// console.log(show("Elijiah", "Hi"))
//rest params
function sum(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    var result = a;
    for (var i = 0; i < b.length; i++) {
        result = result + b[i];
    }
    return result;
}
var result1 = sum(2, 3);
var result2 = sum(3, 2, 4, 1);
console.log(result1 + "\n" + result2);
