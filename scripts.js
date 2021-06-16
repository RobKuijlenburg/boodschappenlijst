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

// console.log(productPrice);
// console.log(productQuantity);
// console.log(productTotalCost);

for (let i = 0; i < sub.length; i++) {
    sub[i].addEventListener('click', function () {
        // now  that we use strict mode we can define the variable inside the event listener
        // because let makes it block scoped
        const qyantityElement = productQuantity[i]
        if (parseInt(qyantityElement.innerHTML) > 0) {
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
    const qyantityElement = productQuantity[i]
    add[i].addEventListener('click', function () {
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
   
        // TODO :: don't use the same variable for a loop in a loop, cause what's i inside the loop here?
        for (let i = 0; i < productTotalCost.length; i++) {
            console.log(productTotalCost[i].innerText);
            for (let i = 0; i < productTotalCost.length; i++) {
                const a = productTotalCost[i];
                const b = parseFloat(a.innerText);

                // TODO :: remove bpush variable, because it's an unused variable
                let bpush = newArray.push(b);
                bpush;
                console.log(newArray);
                // TODO :: try to use the reduce method to get the total:
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
                let total = 0;
                console.log(b);
                for (let i = 0; i < newArray.length; i++) {
                    total += newArray[i];
                }
                totalCost[0].innerHTML =  Math.round(total * 100) / 100;
                console.log(total);
               
            }
        }

        
        console.log(productTotalElement.innerText);
        console.log('aantal producten is gewijzigd');
    })
}