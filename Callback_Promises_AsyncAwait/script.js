// console.log("one");
// console.log("two");

// setTimeout(() => {
//   console.log("2s pause");
// }, 2000);

// console.log("three");
// console.log("four");

// Callback

// function sum(a, b) {
//   console.log(a + b);
// }

// function calculator(a, b, sumCallback) { //callback
//   sumCallback(a, b);
// }

// calculator(1, 2, (a, b) => {
//   console.log(a + b);
// });

//Nested Callback, CallbackHell
// const getData = (data, getNextData) => {
//   setTimeout(() => {
//     console.log(`Data : ${data}`);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// };
// // Callback Hell
// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });

// Solving Callback hell using Promises
// const getData = (data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Data : ${data}`);
//       resolve("success");
//     }, 2000);
//   });
// };
// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// Solving callback hell using async await
const getData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Data : ${data}`);
      resolve("suuccess");
    }, 2000);
  });
};

async function getAllData() {
  await getData(1);
  await getData(2);
}
getAllData();


//using Promises
// let promise = new Promise((resolve, reject) => {
//   console.log("promise");
// });

// const getData = (data, getNextData) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Data : ${data}`);
//       resolve("Success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 2000);
//   });
// };

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("its a promise");
//     // resolve("success");
//     reject("Error 404");
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("fullfiled", res);
// });

// promise.catch((err) => {
//   console.log("reject", err);
// });

// Promise Chain
// let asynfunc = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data1");
//       resolve("success");
//     }, 4000);
//   });
// };
// let asynfunc2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data2");
//       resolve("success");
//     }, 4000);
//   });
// };

// console.log("Fetching Data1 ....");
// asynfunc().then((res) => {
//   console.log("Fetching Data2 ....");
//   asynfunc2().then((res) => {});
// });

// Async Wait /* Very Important */
