// Method 1 of creating an Object
// const employee = {
//   calcTax() {
//     console.log("ITR is 10%");
//   },
// };

// const Ramesh = {
//   salary: 50000,
//   calcTax() {
//     console.log("ITR is 20%");
//   },
// };

// Ramesh.__proto__ = employee;

// Method 2 by using Class
// class Toyota {
//   constructor(color, milage) {
//     /* Always invoke first after creating object */
//     // console.log(`Color : ${prams}\nMilage : ${milage} km/litre`);
//     this.color = color;
//     this.milage = milage;
//   }
//   start() {
//     console.log("start");
//   }
//   stop() {
//     console.log("stop");
//   }
// }

// let Innova = new Toyota("red", 30);
// console.log(Innova);
// let Etios = new Toyota("black", 22);
// console.log(Etios);

// inheritence
// class person {
//   constructor(name) {
//     this.species = "Homo Sapiens";
//     this.name = name;
//   }
//   eat() {
//     console.log("Eat");
//   }
//   sleep() {
//     console.log("Sleep");
//   }
// }

// class Engineer extends person {
//   constructor(name) {
//     super(name);
//   }
//   work() {
//     super.eat(

//     )
//     console.log("problem solving using S&T");
//   }
// }

// let Eng = new Engineer("John");

// Q1
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   viewData() {
//     console.log("My Data");
//   }
// }
// class admin extends User {
//   constructor(name, email) {
//     super(name, email);
//   }
//   editData() {
//     console.log("edit Data");
//   }
// }
// let admin_1 = new admin("admin", "admin@gmail.com");
// console.log(admin_1.editData());

// let student1 = new User("rohan", "rohan@gmail.com");
// let Teacher = new User("Shilpa", "shilpa@gmail.com");

// Error Handling
// let a = 5;
// let b = 5;
// try {
//   console.log(`a + b = ${a + b}`);
//   console.log(`a + b = ${a + c}`);
// } catch (error) {
//   console.log(error);
// }
