//when function is passed as arguement, its called Callback

function sum(a, b, show) {
    let jodo = a + b;
    show(jodo);
}
function display(jodo) {
    console.log("Sum is = " + jodo);
}
sum(7, 15, display);