let setentries = new Set()

setentries.add("Elena")
setentries.add("Bonnie")
setentries.add("Caroline")
setentries.add("Hayley")
setentries.add("Rebekah")
setentries.add("Freya")

console.log("The set entries are : ",setentries);

console.log(setentries.has("Rebekah"));
console.log(setentries.has(5));

console.log(setentries.size)

console.log(setentries.delete("Rebekah"));
// console.log(setentries.clear());

console.log("Final entries are : ",setentries);
