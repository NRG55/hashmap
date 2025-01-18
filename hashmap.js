import Node from "./node.js";

export default class Hashmap {
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.buckets = new Array(this.capacity).fill(null);
    };

    // Takes a key and produces a hash code whith it
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;          
          };

          return hashCode;
    };

    // Takes two arguments: a key a value and assigns to this key
    set(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        const newNode = new Node(key, value);        

        if (bucket === null) {            
            this.buckets[index] = newNode;

            return;
        };
        
        // checks if the same key exists and updates the value;
        if (bucket.key === key) {
            bucket.value = value;
        } else {
            //if the same index and a bucket is already occupied - adds a new node to the end of the linked list
            let current = bucket;

            while (current.next !== null) {
                current = current.next;
            };
            current.next = newNode;            
        };            
    };

    //takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null
    get(key) {
        const index = this.hash(key);
        let current = this.buckets[index];
        
        if (!current) {
            return null;
        };
        
        if (current.key === key) {            
            return current.value;
        };

        if (current) {
            while (current.key !== key) {
                current = current.next;                                
            };

            return current ? current.value : null;
        };        
    };

    //takes a key as an argument and returns true or false based on whether or not the key is in the hash map
    has(key) {
        for (let bucket of this.buckets) {
            if (bucket.key === key) return true;
        };
      
        return false;
    };

    //takes a key as an argument. If the key is in the hash map - removes it and returns true. If the key isn’t in the hash map - returns false.
    remove(key) {
        if (this.has(key)) {
            this.buckets[this.hash(key)] = null;

            return true;
        };

        return false;
    };

    //returns the number of stored keys in the hash map
    length() {
        let length = 0;

        this.buckets.forEach((bucket) => {
            if (bucket !== null) {
                length++
            };
        });

        return length;
    };

    //removes all entries in the hash map
    clear() {
        this.capacity = 16;
        this.buckets = new Array(this.capacity).fill(null);
    };

    //returns an array containing all the keys inside the hash map
    keys() {
        let tempArray = [];

        this.buckets.forEach((bucket) => {
            if (bucket !== null) {
                tempArray.push(bucket.key);
            };
        });

        return tempArray;
    };

    //returns an array containing all the values
    values() {
        let tempArray = [];

        this.buckets.forEach((bucket) => {
            if (bucket !== null) {
                tempArray.push(bucket.value);
            };
        });

        return tempArray;
    };

    //returns an array that contains each key, value pair in a format: [[firstKey, firstValue], [secondKey, secondValue]]
    entries() {
        let tempArray = [];

        this.buckets.forEach((bucket) => {
            if (bucket !== null) {
                tempArray.push([bucket.key, bucket.value]);
            };
        });

        return tempArray;
    };

    //doubles the capacity of the buckets array and sets all existing buckets in a new array
    resize() {
        this.capacity *= 2;
        const oldBuckets = this.buckets;

        this.buckets = new Array(this.capacity).fill(null);
        
        oldBuckets.forEach((bucket) => {
            let current = bucket;

            while (current !== null) {
                this.set(current.key, current.value);
                current = current.next;
            };
        });
    };
}