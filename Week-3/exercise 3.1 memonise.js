
function add(a = 0, b = 0) {
    return a + b;
}


const memoize = (fn) => {
    const cache = {};
    return function (a, b) {
        if (((a + '+' + b) in cache) || ((b + '+' + a) in cache)) {
            return (cache[a + '+' + b] + ' - without computing');
        }
        else {
            let result = fn(a, b);
            cache[a + '+' + b] = result;
            cache[b + '+' + a] = result;
            return result;
        }
    }
}

const memoizeAdd = memoize(add);
t0 = performance.now();
console.log(memoizeAdd(100, 100)); // => 200
t1= performance.now();
console.log(t1-t0);


t2 = performance.now();
console.log(memoizeAdd(100, 100)); // => 200
t3= performance.now();
console.log(t3-t2);


// console.log(memoizeAdd(100)); // => 100
// console.log(memoizeAdd(100, 200)); // => 300
// performance.mark(mark3);
// console.log(memoizeAdd(100, 100)); // => 200 - without computing
// performance.mark(mark4);
// console.log(memoizeAdd(200, 100)); // => 300 - without computing
// performance.measure("measure 1 to 2", mark1, mark2);
// performance.measure("measure 3 to 4", mark3, mark4);
// console.log(performance.getEntriesByType("measure"));ṇ