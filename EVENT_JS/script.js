// let btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   console.log("hello");
// });

// let div = document.querySelector("div");
// div.addEventListener("click", (e) => {
//   console.log(e.target);
//   console.log(e.type);

//   console.log("you hovered");
// });

let btn = document.querySelector("#btn");
let body = document.querySelector('body');
let theme = 'light';

btn.addEventListener('click', () => {
  if (theme === 'light') {
    theme = 'dark';
    body.classList.add('dark')
    body.classList.remove('light')
  } else {
    theme = 'light';
    body.classList.add('light')
    body.classList.remove('dark')
  }
})
