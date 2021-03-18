class LRU {
    constructor(max = 10) {
        this.max = max;
        this.cache = new Map();
    }

    get(key) {
        let item = this.cache.get(key);
        if (item) {
            // refresh key
            this.cache.delete(key);
            this.cache.set(key, item);
        }
        return item;
    }

    set(key, val) {
        // refresh key
        if (this.cache.has(key)) this.cache.delete(key);
        // evict oldest
        else if (this.cache.size == this.max) this.cache.delete(this.first());
        this.cache.set(key, val);
    }

    first() {
        //获取map中key的第一个
        return this.cache.keys().next().value;
    }
}


let cache = new LRU(3);
[1, 2, 3, 4, 5].forEach(v => cache.set(v, 'v:'+v));

console.log(cache.get(2))
//undefined
console.log(cache.get(3))
//v:3
console.log(cache.set(6, 6))
//undefined
console.log(cache.get(4))
//undefined
console.log(cache.get(3))
//v:3
