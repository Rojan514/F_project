const { request, response } = require("express");
(async () => {
const order = [
    {fruits : "mango", qty : 10},
    {fruits : "orange", qty : 3 }
]

//CALLBACK FUNCTION
// // function order (){
// //     setTimeOut ( () => {
// //         console.log(order);
// //     },3000);
// // }

// function addNewItem(getOrderItems){
    // setTimeout(() => {
    //     order.push({fruits : "apple", qty : 3 });
    //     getOrderItems();
    // }, 6000);
    
// }

// function getOrderItems(order){
//     console.log("getOrderItems === ",order);
// }
// addNewItem(getOrderItems);
// // getOrderItems();

//PROMISE
// function getOrderItems(order){
//     console.log("getOrderItems === ",order);
// }

// function addNewItem(getOrderItems){
//     return new Promise((resolve,reject) => {
//         const err = false;
//     setTimeout(() => {
//         order.push({fruits : "apple", qty : 3 });
//         if(err)
//         reject();
//         resolve(true);
//     }, 6000);
//     })
// }

// addNewItem().then(response => {
//     console.log("response success ===")
//     getOrderItems(order);   
// }).catch(err => {
//     console.log("err ==");
// })




async function getOrderItems(order){
    console.log("getOrderItems === ",order);
}

async function addNewItem(getOrderItems){
    return new Promise ((resolve,request) => {
        order.push({fruits : "apple", qty : 3 });
        resolve(true);
    })
}
const updateOrder = await addNewItem();
console.log(updateOrder);
if(updateOrder){
    const orderList = await getOrderItems(order);
}

})()

