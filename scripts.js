"use strict"
// Using strict mode forces you to write better code
// Then you need to define all variables

const productPrice = document.getElementsByClassName('productPrice');
const productQuantity = document.getElementsByClassName('productQuantity');
const productTotalCost = document.getElementsByClassName('productTotalCost');
const totalCost = document.getElementsByClassName('totalCost');
const qChange = document.getElementsByClassName('quantityChange');
const add = document.getElementsByClassName('add');
const sub = document.getElementsByClassName('sub');


for (let i = 0; i < sub.length; i++) {
    sub[i].addEventListener('click', function () {  
        if (parseInt(qyantityElement.innerHTML) > 0) {
            const qyantityElement = productQuantity[i]
            const count = parseInt(qyantityElement.innerHTML) - 1;
            qyantityElement.innerHTML = count;
            console.log(count);
            console.log('-');
        } else {
            console.log('Minimal value is 0');
        }
    })
}

for (let i = 0; i < add.length; i++) {   
    add[i].addEventListener('click', function () {
        const qyantityElement = productQuantity[i]
        const count = parseInt(qyantityElement.innerHTML) + 1;
        qyantityElement.innerHTML = count;
        console.log('+');
        console.log(count);
    })
}



for (let i = 0; i < qChange.length; i++) {
    const priceElement = productPrice[i];
    const qyantityElement = productQuantity[i];
    const productTotalElement = productTotalCost[i];
    qChange[i].addEventListener('click', function () {
        const price = parseFloat(priceElement.innerHTML);
        const quantity = parseInt(qyantityElement.innerHTML);
        const subTotal = price * quantity;
        productTotalElement.innerHTML = Math.round(subTotal * 100) / 100;
        const newArray = [];
        for (let c = 0; c < productTotalCost.length; c++) {
            console.log(productTotalCost[c].innerText);
            for (let d = 0; d < productTotalCost.length; d++) {
                const a = productTotalCost[d];
                const b = parseFloat(a.innerText);
                newArray.push(b);
                const reducer = (accumulator, currentValue) => accumulator + currentValue;
                totalCost[0].innerHTML =  Math.round(newArray.reduce(reducer) * 100) / 100;  
            }
        }      
        console.log('aantal producten is gewijzigd');
    })
}