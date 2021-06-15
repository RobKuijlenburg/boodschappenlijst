const productPrice = document.getElementsByClassName('productPrice');
const productQuantity = document.getElementsByClassName('productQuantity');
const productTotalCost = document.getElementsByClassName('productTotalCost');
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
    sub[i].addEventListener('click', function(){
        let y = 0;
        productQuantity.innerHTML = y--;
        console.log('-');
    })
}

for (i = 0; i < add.length; i++) {
    const qyantityElement = productQuantity[i]
    add[i].addEventListener('click', function(){
        const count = parseInt(qyantityElement.innerHTML) + 1;
        qyantityElement.innerHTML = count
        console.log('+');
        console.log(count);
    })
}

for (i = 0; i < qChange.length; i++) {
    qChange[i].addEventListener('click', function() {
        console.log('aantal producten is gewijzigd');
    })
}