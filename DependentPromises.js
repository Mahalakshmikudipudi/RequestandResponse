function orderFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let foodDelivered=Math.random()>0.5;
            if(foodDelivered) {
                resolve('Food Delivered');
            } else {
                reject('Food not delivered');
            }
        }, 2000);
    })
}

function orderDessert() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dessertDelivered=Math.random()>0.5;
            if(dessertDelivered) {
                resolve('Dessert Delivered');
            } else {
                reject('Dessert not delivered');
            }
        }, 2000);
    })
}

orderFood()
.then((foodMsg) => {
    console.log(foodMsg);
    return orderDessert();
})
.then((dessertMsg) => {
    console.log(dessertMsg);
    console.log("Dream Meal Fulfilled");
})
.catch((err)=> {
    console.log(err);
    console.log("Dream Meal Failed");
})