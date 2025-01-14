export default class Hashmap {
    constructor() {
        this.loadFactor;
        this.capacity = 16;
        this.buckets = new Array(this.capacity).fill(null);
    };

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
            console.log(hashCode)
          };

          return hashCode;
    };

    set(key, value) {
        const index = this.hash(key);
        this.buckets[index] = { key, value };

        return this.buckets;
    };

    get(key) {
        const index = this.hash(key);
        let bucket = this.buckets[index];       
        
        return bucket ? bucket.value : null;
    };

    has(key) {
        return this.get(key) ? true : false;
    };

    remove(key) {
        if (this.has(key)) {
            this.buckets[this.hash(key)] = null;

            return true;
        };

        return false;
    };
}