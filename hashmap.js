export default class Hashmap {
    constructor() {
        this.loadFactor;
        this.capacity;
    };

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
          };

          return hashCode;
    };
}