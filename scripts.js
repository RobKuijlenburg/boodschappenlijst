const productPrice = document.getElementsByClassName('productPrice');
const productQuantity = document.getElementsByClassName('productQuantity');
const productTotalCost = document.getElementsByClassName('productTotalCost');
const qChange = document.getElementsByClassName('quantityChange');
const add = document.getElementsByClassName('add');
const sub = document.getElementsByClassName('sub');
let count = 0;
console.log(productPrice);
console.log(productQuantity.innerHTML);
console.log(productTotalCost);

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
        console.log('-' + sub[i]);
    })
}

for (i = 0; i < add.length; i++) {
    add[i].addEventListener('click', function(){
        
        console.log('+' + add[i]);
    })
}

for (i = 0; i < qChange.length; i++) {
    qChange[i].addEventListener('click', function() {
        console.log('aantal producten is gewijzigd');
    })
}