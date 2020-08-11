const HashTable = require("./HashTable");

let HT = new HashTable();
HT.set("red", "#ff0000");       //79
HT.set("black", "#000000");     //33
HT.set("orange", "#ffa500");    //33

console.log("red", HT.get("red"));
console.log("black", HT.get("black"));
console.log("orange", HT.get("orange"));

// red #ff0000
// black #000000
// orange #ffa500