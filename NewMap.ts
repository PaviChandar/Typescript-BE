let newmap = new Map()
newmap.set("Damon", 180)
newmap.set("Stefan", 171)
newmap.set("Enzo", 160)

for(let key of newmap.keys()){
    console.log("Map keys : "+key);    
}

for(let value of newmap.values()){
    console.log("Map values : "+value);
}

console.log("The map entries are : ");
for(let entry of newmap.entries()){
    console.log(entry[0]);    
}