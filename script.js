// String 
let name = 'meshari';
let lastName = 'jabbar';

let fullName = name + ' ' + lastName; // Concatination

console.log(fullName);

let person = {
  name : 'meshari',
  lastName : 'jabbar',
  fullName : function () {  //methods
    console.log(this.name + " " + this.lastName);    
  }
}

console.log(person.name);

let human = "Meshari Jabbar";
let length = human.length;

console.log(human.length);

console.log(human.toLowerCase());
console.log(human.toUpperCase());

console.log(human.charAt(0));
console.log(human.charAt(human.length-1));

console.log(human.indexOf('e'));

console.log(human.toLocaleLowerCase().startsWith('meshari'));
console.log(human.toLocaleLowerCase().endsWith('jabbar'));

console.log(human.slice(0,3));
console.log(human.slice(-5));

console.log(human.includes('zzz'));



