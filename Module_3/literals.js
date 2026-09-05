// literals
let price = 599;
let quantity = 5;
let stock = true;
// console.log(`Total Price:${price.quantity} Taka. \nPay the Price Now!`);

function getDiscount(price){
    return price * 0.1; // 10% discount
}

console.log(`You saved: ${getDiscount(price).toFixed(2)} Taka. \nYour Final Bill is:${price*quantity - getDiscount(price)} Taka \nHave a good Day!`);

console.log(`Status: ${ stock == true? " In Stock" :"Out of Stock"} \nThanks for be with us!`);