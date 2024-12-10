
// async function playPlayStation() {
//     console.log('a');
//     console.log('b');
//     await setTimeout(() => { console.log('Buying a playstation') }, 1000);
//     await setTimeout(() => { console.log('Starting the playstation') }, 500);
//     console.log('Playing');
// }

// playPlayStation();

//how can i print a,b,c,d,e if it is asynchronous tasks and do print synchronusly
//await here only works with promises
//async await is a implementation of promises making asyncronous tasks in to a synchronous manner

async function playPlayStation() {
    console.log('a');
    console.log('b');
    const message = await new Promise((resolve, reject) => {
        setTimeout(() => { resolve('Buying a playstation') }, 1000)
    });
    console.log(message);
    const message2 = await new Promise((resolve, reject) => {
        setTimeout(() => { console.log('Booting the playstation') 
            resolve('Booting succesful');
        }, 500);
    });
    console.log(message2);
    console.log('Playing');
}

playPlayStation();






