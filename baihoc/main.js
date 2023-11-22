// //  ARROW FUNCTION (more flexible/callable than expression function)
// let user = (a,b) => {

// }

// FUNCTION
function user(name) {
    console.log(name);
}
user("a");

const hi = (name) => console.log(name);
let hihi = (name) => console.log(name); //If function's logic is changeable (?)

let arr = [1,2,3];

// map(): clone an array - run a function thru all item - output new array (original array not affected)
const arr1 = arr.map((item) => item + 1);
console.log(arr1);

// filter()

// reduce()


import DOMAIN from "./main2.js";
console.log(DOMAIN);