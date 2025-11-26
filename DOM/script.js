// // let heading = document.getElementById("heading");
// // console.log(heading);

// // let para = document.getElementsByClassName("para");

// // let btn=document.getElementsByTagName("button")
// // console.dir(btn)

// // let heading=document.querySelector("#heading")
// // console.log(heading.innerText);

// // document.querySelector('div').innerHTML='<div>Lorem</div>

// // let heading = document.querySelector("h2");
// // console.dir(heading);
// // heading.innerText += " from APNA College Students";

// // let para = document.querySelector(".para");
// // console.dir(para);

// // Add Style
// // let para = document.querySelector("p");
// // para.style.fontSize = "2rem";
// // para.innerText = "Hello";
// // console.log(para.setAttribute("class", "newclass"));

// // Insert Element
// let div = document.querySelector("div");
// let btn = document.createElement("button");
// btn.innerText = "click Me";
// div.append(btn);

let btn = document.createElement("button");
let body = document.querySelector("body");

btn.innerText = "Click Me";
btn.style.backgroundColor = "red";
btn.style.color = "white";

body.append(btn);

let para = document.createElement("p");
para.innerText = "Hello";
para.classList.add("para")
body.append(para);
