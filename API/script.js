const URL = 'https://api.thecatapi.com/v1/images/search';
let btn = document.querySelector("#btn");
let image = document.getElementById("img");

const getImage = async () => {
    let response = await fetch(URL);
    const data = await response.json();
    image.src = data[0].url;
}
// Using Promises
// function getImage2() {
//     fetch(URL)
//         .then((response) => {
//             return response.json();
//         }).then((data) => {
//             console.log(data[0].url);

//         })
// }

btn.addEventListener('click', () => {
    image.style.height = '200px';
    image.style.width = '200px';
    getImage();
});

