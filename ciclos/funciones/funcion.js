function calculatediscountedprice (price, discountpercentage){
    const discount =(price + discountpercentage)/100
    const pricewithdiscount = price - discount

    return pricewithdiscount

}

const originalPrice = 1000
const discountpercentage = 15
const finalPrice = calculatediscountedprice(originalPrice,
    discountpercentage)

console.log('Original Price: $' + originalPrice)
console.log('Discount: ' + discountpercentage + '%')
console.log('Price with discount: $' + finalPrice)
