import Hashmap from "./hashmap.js";

const hashmap = new Hashmap();

console.log(hashmap.hash("test"));
console.log(hashmap.buckets);
console.log(hashmap.set("John", "Smith"));