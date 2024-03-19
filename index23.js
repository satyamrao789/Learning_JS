function loadingData(showCallback1) {
    setTimeout(() => {
        console.log("1. Loading Data...");
        showCallback1();
    }, 3000);
    
}
function collectingData(showCallback2) {
    setTimeout(() => {
        console.log("2. Collecting Data...");
        showCallback2();
    }, 3000);
    
}
function approvingData(showCallback3) {
    setTimeout(() => {
        console.log("3. Approving Data...");
        showCallback3();
    }, 3000);
    
}
function approved(params) {
    setTimeout(() => {
        console.log("4. Approved!!");
    }, 3000);
    
}
//callback hell
loadingData(function () {               
    collectingData(function(){
        approvingData(function(){
            approved();
        });
    });
});