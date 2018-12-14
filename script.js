 // Objects In Javascript 

 let person = {
     name: "Meshari",
     lastName: 'Jabbar',
     age: 25,
     education: false,
     wife: true,
     sibling:['sister', 'brother'],
     fullName: function () {
         console.log("And the full name of the person is : " + person.name + " " + person.lastName )
     }
 }

 let personName = person.name;
 let personLastName = person['lastName'];

 console.log(personName);
 console.log(personLastName);

 person.fullName();