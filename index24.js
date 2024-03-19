
function checkTask(task) {
    return new Promise((resolve, reject) => {
        if (task) {
            resolve("Well done!, You completed the tasks");
        } else {
            reject("Uh oh!!, You missed the deadline");
        }
    })
}

let onResolve = (res) => {
    console.log(res);
}
let onReject = (err) => {
    console.error(err);
}

/*if task is true,resolve will be done
if task is false,reject will be done
agar promise fulfill hua to .then k andar
agar promise reject hua to .catch k andar*/


// checkTask(true).then(onResolve).catch(onReject);
checkTask(false).then(onResolve).catch(onReject);
