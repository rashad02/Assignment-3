
let arr = [1, 2, 2, 3, 4, 4, 5];

let duplicate = arr.filter( (element, index) => arr.indexOf(element) === index);

console.log("duplicate: ", duplicate);

