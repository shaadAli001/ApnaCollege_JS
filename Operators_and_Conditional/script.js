let a = 5;
let b = 5;
console.log(`a = ${a} b = ${b}`);

// Arthematic

// console.log('a + b =',a+b);
// console.log('a - b =',a-b);
// console.log('a * b =',a*b);
// console.log('a / b =',a/b);
// console.log('a % b =',a%b);
// console.log('a ** b =',a**b);

// Assignment

// console.log("a=a+5", (a += 5));
// console.log("b=b+5", (b += 5));

// Comparison

// console.log("a==b", a == b); /*Value comparison*/
// console.log("a===b", a === b); /*Value and type comparison*/

// Conditional Statement

// let Number = prompt("Enter Your Number") || 2;
// if (Number == 0 || Number < 0) {
//   console.error("Enter a Number Greater than Zero");
// } else if (Number % 2 == 0) {
//   console.log(`${Number} is Even`);
// } else {
//   console.log(`${Number} is Odd`);
// }

// Practice Q1

// let num = prompt("Enter Number divisible by 5") || 5;
// if (num == 0 || num < 0) {
//   console.error("Enter NUmber greater than 0");
// }
// if (num % 5 === 0 && num>0) {
//   console.log(`${num} is multiple of 5`);
// } else if(num>0) {
//   console.log(`Sorry not a multiple!! Enter Number ends with 0 or 5 `);
// }

// Practice Q2
let score = prompt("Enter Your Score");
if (score<0 || score>100) {
  console.log('Please Enter a positive Score or less than 100');
}
if (score<=100 && score>=90) {
  console.log('A+');
  
} 
else if(score<=89 && score>=81) {
  console.log('A');
}
else if(score<=80 && score>=71) {
  console.log('B+');
}
else if(score<=70 && score>=61) {
  console.log('B');
}
else if(score<=60 && score>=51) {
  console.log('C+');
}
else if(score<=50 && score>=41) {
  console.log('C');
}
else if(score<=40 && score>=31) {
  console.log('D');
}
else if(score<=30 && score>=0){
  console.log('F');
}