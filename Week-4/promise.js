/*Implement a function namedgetNumberwhich generatesa random number. 
If randomNumberis divisible by 5 it will reject the promise else it
 will resolve the promise. */


 //creatnig function to generate random number
function getNumber() {
    return Math.floor(Math.random() * 100);
}

//defining states for promises
const STATE = {
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected'
}
//creating function promise
function Promise1(a) {
    let current = {
        state: STATE.PENDING
    }

    a(
        (value) => {
            if (current.state == STATE.PENDING) {
                current.state = STATE.RESOLVED;
                current.value = value;
            }
        },
      
        (value) => {
            if (current.state == STATE.PENDING) {
                current.state = STATE.REJECTED;
                current.value = value;
            }
        }
    );
    return current;
}

let val = getNumber();
const promise = new Promise1((resolve, reject) => {
    if (val % 5 == 0)
        reject(val);
    else
        resolve(val);
})

console.log(promise);