let map = new Map()

map.set('1', 'Damon')
map.set(1,'www.google.com')
map.set(true, 'isLogin')
map.set('2','Stefan')

console.log("Value 1 : ", map.get(1));
console.log("Value 2 : ",map.get('1'));
console.log("Key is present : ", map.has(3));
console.log("Size of map : ", map.size);
console.log("Deleted value : ", map.delete(1));
console.log("New map size : ", map.size);

