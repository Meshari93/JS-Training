 // difference between array and object
// array === list of value 
// object === collection of values 

// let zero = [];
let names = ['john', 'bob', 'barry', 'olga', 'ben'];

// let age = new Array (19, 40, 60);
//  console.log(names);
// names[0] = 'petter';

// console.log(names[0]);
// console.log(names);

// let person = {
//   name: 'bob'
// }

// console.log(person.name);

// person.name = 'susy'
// console.log(person.name);

// length 
let result = names.length;  //Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.

console.log(result);

console.log(names[names.length-1]);

// reverse
console.log(names.reverse());  //Reverses the elements in an Array.
names.reverse();

//concat
let lastNames = ['pepper', 'onion', 'banaba'];
console.log(names.concat(lastNames));  //Combines two or more arrays.

//nushift
console.log(names.unshift('susy')); //Inserts new elements at the start of an array.
console.log(names);

//shift
console.log(names.shift()); //Removes the first element from an array and returns it.
console.log(names);

//push
console.log(names.push('hello world'));  //Appends new elements to an array, and returns the new length of the array.
console.log(names);

//pop
console.log(names.pop()); //Removes the last element from an array and returns it.
console.log(names);

//splice
//  console.log(names.splice(2,3)); //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//  console.log(names);

//sort 
console.log(names.sort()); //Sorts an array.
console.log(names);




