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
    // add[i].addEventListener('click', (event) => {
    //     const result = productQuantity;
    //     y = 0;
    //     value = ++y;
    //     result.innerText = `${event.target.value}`;
    //     console.log('+');
    //   });
    // add[i].addEventListener('click', function(){
    //     let y = Number.parseInt(productQuantity.innerText);
    //     y++;
    //     productQuantity.innerText = y;
    //     console.log('+');
    // })

    // productQuantity is a HTMLCollection, so we need to get one element out of the collection using i
    // Getting the element here, because in the function i = 4
    const qyantityElement = productQuantity[i]
    add[i].addEventListener('click', function(){
        // No need for Number before parseInt
        const count = parseInt(qyantityElement.innerHTML) + 1;
        qyantityElement.innerHTML = count
        console.log('+');
        // No need to return
        console.log(count);
    })
}

for (i = 0; i < qChange.length; i++) {
    qChange[i].addEventListener('click', function() {
        console.log('aantal producten is gewijzigd');
    })
}