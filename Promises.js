function boardBusAt10() {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            let busArrivesOnTime=Math.random()>0.5;
            if(busArrivesOnTime) {
                resolve('Board the bus');
            } else {
                reject('Error: Bus is late');
            }
        }, 2000);
    });
}
boardBusAt10()
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err);
})