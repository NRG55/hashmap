import Hashmap from "./hashmap.js";

const hashmap = new Hashmap();

hashmap.set('apple', 'red')
hashmap.set('banana', 'yellow')
hashmap.set('carrot', 'orange')
hashmap.set('dog', 'brown')
hashmap.set('elephant', 'gray')
hashmap.set('frog', 'green')
hashmap.set('grape', 'purple')
hashmap.set('hat', 'black')
hashmap.set('ice cream', 'white')
hashmap.set('jacket', 'blue')
hashmap.set('kite', 'pink')
hashmap.set('lion', 'golden')
hashmap.set('apple', 'UPDATED')
console.log(hashmap.buckets)
hashmap.resize()
console.log(hashmap.buckets)
// console.log(hashmap.remove('lion'))
// console.log(hashmap.buckets)
console.log(hashmap.length())
console.log(hashmap.values())
