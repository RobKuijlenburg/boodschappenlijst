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

for (i = 0; i < productPrice.length; i++) {
    console.log(productPrice[i].innerText);
}

for (i = 0; i < productQuantity.length; i++) {
    console.log(productQuantity[i].innerText);
}

for (i = 0; i < productTotalCost.length; i++) {
    console.log(productTotalCost[i].innerText);
}

for (i = 0; i < sub.length; i++) {
    const qyantityElement = productQuantity[i]
    sub[i].addEventListener('click', function () {
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

for (i = 0; i < add.length; i++) {
    const qyantityElement = productQuantity[i]
    add[i].addEventListener('click', function () {
        const count = parseInt(qyantityElement.innerHTML) + 1;
        qyantityElement.innerHTML = count;
        console.log('+');
        console.log(count);
    })
}

for (i = 0; i < qChange.length; i++) {
    const priceElement = productPrice[i];
    const qyantityElement = productQuantity[i];
    const productTotalElement = productTotalCost[i];
    // const next = productTotalCost[i] + 1;
    qChange[i].addEventListener('click', function () {
        const price = parseFloat(priceElement.innerHTML);
        const quantity = parseInt(qyantityElement.innerHTML)
        const subTotal =  price * quantity;
        // const total = subTotal + parseInt(next);
        productTotalElement.innerHTML = subTotal;
        console.log('aantal producten is gewijzigd');
    })
}