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
    qChange[i].addEventListener('click', function () {
        const price = parseFloat(priceElement.innerHTML);
        const quantity = parseInt(qyantityElement.innerHTML);
        const subTotal = price * quantity;
        productTotalElement.innerHTML = subTotal;

        for (i = 0; i < productTotalCost.length; i++) {
            console.log(productTotalCost[i].innerText);
            for (i = 0; i < productTotalCost.length; i++) {
                const a = productTotalCost[i];
                const b = parseFloat(a.innerText);
                const newArray = [];
                let bpush = newArray.push(b);
                bpush;
                console.log(newArray);
                let total = totalCost.innerText;
                console.log(b);
                for (let i = 0; i < productTotalCost.length; i++) {
                    total += b[i];
                }
               console.log(total);
            }
        }


        console.log(productTotalElement.innerText);
        console.log('aantal producten is gewijzigd');
    })
}




