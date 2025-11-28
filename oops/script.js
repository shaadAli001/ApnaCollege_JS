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
class person {
  constructor(name) {
    this.species = "Homo Sapiens";
    this.name = name;
  }
  eat() {
    console.log("Eat");
  }
  sleep() {
    console.log("Sleep");
  }
}

class Engineer extends person {
  constructor(name) {
    super(name);
  }
  work() {
    super.eat(
      
    )
    console.log("problem solving using S&T");
  }
}

let Eng = new Engineer("John");
