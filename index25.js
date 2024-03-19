function loadingData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("1. Loading Data...");
            // showCallback1();
            resolve();
        }, 3000);

    })
    // setTimeout(() => {
    //     console.log("1. Loading Data...");
    //     showCallback1();
    // }, 3000);

}
function collectingData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2. Collecting Data...");
            // showCallback2();
            resolve();
        }, 3000);
    })
}
function approvingData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("3. Approving Data...");
            // showCallback3();
            reject("Approve not possible");
        }, 3000);
    })
}
function approved(params) {
    setTimeout(() => {
        console.log("4. Approved!!");
    }, 3000);

}
let onError = (err) => {
    setTimeout(() => {
        console.error(err);
    }, 2000)

};
//callback hell
// loadingData(function () {               
//     collectingData(function(){
//         approvingData(function(){
//             approved();
//         });
//     });
// });

loadingData().then(collectingData).then(approvingData).then(approved).catch(onError);