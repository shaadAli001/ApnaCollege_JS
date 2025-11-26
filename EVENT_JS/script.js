let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log("hello");
});

let div = document.querySelector("div");
div.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.type);

  console.log("you hovered");
});
