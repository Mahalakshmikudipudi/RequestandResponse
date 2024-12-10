const amanPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        let paysBack=true;
        if(paysBack) {
            resolve('Aman paid back');
        } else {
            reject('Aman did not paid back');
        }
    }, 3000);
});

const ramanPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        let paysBack=true;
        if(paysBack) {
            resolve('Raman paid back');
        } else {
            reject('Raman did not paid back');
        }
    }, 3000);
});

const gaganPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        let paysBack=true;
        if(paysBack) {
            resolve('Gagan paid back');
        } else {
            reject('Gagan did not paid back');
        }
    }, 3000);
});

Promise.all([amanPromise, ramanPromise, gaganPromise])
.then((results) => {
    results.forEach((result) => {
        console.log(result);
    })
})
.catch((err) => {
    console.log(err);
})