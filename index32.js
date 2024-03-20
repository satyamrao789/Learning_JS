//response.text data k andar le liya,ab arrow fn bna k usko print kr diya
fetch('demo.txt').then((response) => {
    return response.text();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.error(err);
})

//Fetching FAKE API
fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>{
    return response.json();
}).then(data => {
    console.log(data);
})

//Fetching OP

const API_KEY = '6b75d2d4e2fb1c4ac20ae682594be567';

fetch('https://api.openweathermap.org/data/2.5/weather?lat=24.487520&lon=86.718826&appid='+ API_KEY).then((response) => {
    return response.json();
}).then(data => {
    console.log(data);
})

async function fetchData() {
    const API_KEY = '6b75d2d4e2fb1c4ac20ae682594be567';
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=24.487520&lon=86.718826&appid='+ API_KEY);
    
    let weatherData = await response.json();
    console.log(weatherData);
    alert(weatherData.name);
}

fetchData();


