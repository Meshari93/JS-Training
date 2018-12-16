// for loop with array

// for (let i = 0; i<10; i++){
//   console.log(`Your number is ${i}`);
  
// }

let friends = ['bob', 'susy', 'john', 'eddy', 'loga'];
for (let i = 0; i<friends.length; i++){
  console.log(`Your friend  number  ${i+1} is ${friends[i]}`);  
}

console.log("----------------------------------");

for (let j = friends.length-1; j>=0; j--){
  console.log(`Your friend  number  ${j+1} is ${friends[j]}`);  
}