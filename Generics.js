// function getArray(items: any[]):any[]{
//     return new Array().concat(items)
// }
// let numberArray = getArray([1,2,3])
// let stringArrray = getArray(["Damon", "Stefan", "Enzo"])
// numberArray.push(4)
// numberArray.push("Noah")
// stringArrray.push("Alaric")
// stringArrray.push(5)
// console.log("Number array : ", numberArray)
// console.log("String Array : ", stringArrray)
//runners - react
function getArray(items) {
    return new Array().concat(items);
}

var numberArray = getArray([1, 2, 3]);
var stringArrray = getArray(["Damon", "Stefan", "Enzo"]);
numberArray.push(4);
numberArray.push("Noah");
stringArrray.push("Alaric");
stringArrray.push(5);
console.log("Number array : ", numberArray);
console.log("String Array : ", stringArrray);