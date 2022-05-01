//creating array 
var arr = [2, 4, 6, 6, 7, 8, 9, 5, 3, 2, 2, 456, 5, 6354, 6, 5346, 54, 6, 3546, 5, 6, 5, 7, 58, 7, 85, 8, 879, 8, 2];
//creating map
const map = new Map();
//adding values to map if it doesnnt exist earlier else incrementing the value
for (let num of arr) {
    if (map.has(num)) {
        map.set(num, map.get(num) + 1);
    } else {
        map.set(num, 1);
    }
}
//creating string for displaying key and values
let text = "";
//looping through each key and value of the map and displaying it will string text
map.forEach(function (value, key) {
    if (value > 1) {
        text += 'number ' + key + ' is repeated  ' + value + ' times' + "\n"
    }
}
)
console.log(text)