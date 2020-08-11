class HashTable {
    //PUBLIC
    constructor(size = 101) {
        this.keyMap = new Array(size);
    }
    set(key, value) {
        //Sets the key-value pair, chains if multiple
        const index = this._hash(key);

        if (!this.keyMap[index])
            this.keyMap[index] = [];

        this.remove(key);

        this.keyMap[index].push([key, value]);
    }
    get(key) {
        //Gets the value for the given key, else returns undefined
        const index = this._hash(key);

        if (this.keyMap[index]) {
            const pair = this.keyMap[index].find(pair => pair[0] === key);
            if (pair)
                return pair[1];
        }
    }
    remove(key) {
        //Remove a key-value pair for the given key
        const output = this.get(key);
        if (output) {
            const array = this.keyMap[this._hash(key)];

            if (array) {
                const index = array.findIndex(pair => pair[0] === key);

                if (index > -1) {
                    array.splice(index, 1);
                }
            }
        }
        return output;
    }
    getKeys() {
        //Returns all the keys
        return this._explode(0);
    }
    getValues() {
        //Returns all the values
        return this._explode(1);
    }

    //PRIVATE
    _hash(key) {
        //  key -> index 
        const iterations = Math.min(key.length, 100);
        const arrayLength = this.keyMap.length;
        const PRIME = 61;
        let output = 0;
        for (let i = 0; i < iterations; i++) {
            output *= PRIME;
            output += key.charCodeAt(i) - ("A".charCodeAt(0) - 1);
            output %= arrayLength;
        }
        return output;
    }
    _explode(i) {
        //explodes the data into a single array
        let output = [];
        const A1 = this.keyMap.filter(pair => pair);
        for (const A2 of A1) {
            for (const A3 of A2) {
                output.push(A3[i]);
            }
        }
        return output;
    }
}

module.exports = HashTable;