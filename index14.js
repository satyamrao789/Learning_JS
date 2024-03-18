console.log("Javascript is Synchoronus");

// setTimeout(() => {
    //write ur body
// }, timeout);
// setTimeout(() => {
//     console.log("Printed after 3 seconds");
// },3000);

/*function loadingData() {
    setTimeout(() => {
        console.log("1.Loading Data"); 
    },2000)
       
}
function collectingData() {
    setTimeout(() => {
        console.log("2.Collecting Data"); 
    },2000)    
}*/

//till now loadingData and CollectingData are printed at same time after 2 seconds

/*function ApprovingData() {
    console.log("3.Approving Data");    
}
function Approved() {
    console.log("4.Approved");    
}

loadingData();
collectingData();
ApprovingData();
Approved();*/

//I want that loadingData should be printed first, then after 2 seconds od printing LaodingData, Collecting Data should be printed
//We will use promise
function loadingData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("1.Loading Data");
            resolve(); 
        },2000)
    })    
}
function collectingData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2.Collecting Data");
            resolve(); 
        },2000)
    })     
}
function ApprovingData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("3.Approving Data");
            resolve(); 
        },2000)
    })     
}
function Approved() {
    setTimeout(() => {
        console.log("4.Approved"); 
    },2000)    
}
//phle loadingData print hua , then fir 2 seconds baad promise return kr diya ki haan kaam ho gya, then uske 2 seconds baad Collecting data print hua

// loadingData().then(collectingData);

//phle loadingData print hua , then fir 2 seconds baad promise return kr diya ki haan kaam ho gya, then uske 2 seconds baad Collecting data print hua, then uske 2 seconds baad Approving Data, then uske 2 seconds baad collecting data
loadingData().then(collectingData).then(ApprovingData).then(Approved);

//insted of using then, we can use async await

function Execute() {
    await loadingData();
    await collectingData();
    await ApprovingData();
    await Approved();
}

