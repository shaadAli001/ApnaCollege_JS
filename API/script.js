const URL = 'https://api.thecatapi.com/v1/images/search';

const getImage = async () => {
    let response = await fetch(URL);
    const data = await response.json();
    document.getElementById('img').src = data[0].url;
    console.log(data[0].url);

}
getImage()

