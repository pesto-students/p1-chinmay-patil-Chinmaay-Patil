
/*Implement Fibonacci Series with Iterators*/

let  num=7
let fib = {
    [Symbol.iterator]() {
        let n =num, first = 0, second = 1, temp, i = 0;

        return {
            next() {
                console.log(first);
                temp = first + second;
                first = second;
                second = temp;
                i++;
                return { done: i > n-1 };
               

            }
        }
    }

}

   
for (const i of fib) {
    
}
