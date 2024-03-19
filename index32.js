//response.text data k andar le liya,ab arrow fn bna k usko print kr diya
fetch('demo.txt').then((response) => {
    return response.text();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.error(err);
})