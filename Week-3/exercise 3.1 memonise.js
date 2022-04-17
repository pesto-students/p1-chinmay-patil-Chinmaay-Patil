//Exercise 3.1 - memoize Addition
function add(a = 0, b = 0) {
    return a + b;
}


function memoize()  {
    const cache = {};
    return function (a, b) {
        if (((a + '+' + b) in cache)) {
            console.log('with cache')
            return (cache[a + '+' + b] );
        }
        else {
            let result = add(a, b);
            cache[a + '+' + b] = result;
            cache[b + '+' + a] = result;
            console.log('without cache')
            return ('value - ' + result);
        }
    }
}


const memoizeAdd = memoize(add);
console.time()
console.log(memoizeAdd(100, 100)); // => 200
console.timeEnd()
console.log('\n')

console.time()
console.log(memoizeAdd(100)); // => 100
console.timeEnd()
console.log('\n')

console.time()
console.log(memoizeAdd(100, 200)); // => 300
console.timeEnd()
console.log('\n')

console.time()
console.log(memoizeAdd(100, 100)); // => 200 - without computing
console.timeEnd()
console.log('\n')

console.time()
console.log(memoizeAdd(200, 100)); // => 300 - without computing
console.timeEnd()
console.log('\n')
