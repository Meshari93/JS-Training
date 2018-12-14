// Function In Java script 

// Declaration, Invoke, Return, Parameters, Expression 

function hello () {  // Declaration 
    console.log("Hello World");
}

hello();  // Invoke

function add (num1, num2) {    // Parameters
    let sum = num1 + num2;
    return sum;
}

console.log(add(2, 5));
console.log(add(2, 6));

let result = add(6, 5);
console.log(result);

let result2 = function (num1, num2) {  // Expression
    let div = num1 / num2;
    return div;
}

console.log(result2(24, 3));
