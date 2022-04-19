function createStack() {
    // Write your code here...
    const items = [];
    return (function () {
        return {
           
            push(item) {
                items.push(item);
            },
            pop() {
                return items.pop();
            },
            //  for testing only
             print() {
                return items;
             }
        }
    })();
}
const stack = createStack();
stack.push(10); // => items : [10]
console.log(stack.print());
stack.push(5); // => items : [10, 5]
console.log(stack.print());
stack.pop(); // => 5 // => items : [10]
console.log(stack.print());
console.log(stack.items); // => undefined //use console.log for testing
//console.log(stack.print());
stack.items = [10, 100, 1000]; //Adds 'items' property to 'stack' object but original 'items' remains untouched.
console.log(stack.print()); // => items : [10] not [10, 100, 1000]