function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }
    return [increment, log];
} const [increment, log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?

/*
 OUTPUT--> count is 0

explaination-->  function createincrement is declared and then called. then created a variable 
message and value of count is stored which is zero. even though we are incrementing the count but
it does not get incremented as the console is logging message before. there is not written method 
that tells if count is change then display the message
*/

