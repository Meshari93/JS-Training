// If Else Statements
// Conditional Statements In Javascript
//Comparison operators

//>,<, >=, <=, ==, ===, !=, !==

if(2>1){
    console.log("I am math genious");
}

let num1 = 8;
let num2 = 5;

if (num1>=num2) {
    console.log("First number was bigger than second or equal")
}
else {
    console.log("First number was smaller than second")
}


let num3 = 6;
let num4 = 8;
if (num3!=num4) {
    console.log("number are not equal")
}
else {
    console.log("number are  equal")
}

let person1 = "John";
let person2 = "bob";

let person = "will";

if (person === person1) {
    console.log("this dude is : " + person1);
} 
else if(person === person2){
    console.log("this dude is : " + person2);
}
else {
    console.log("I dont who is this dude");
}
