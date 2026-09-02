let price = -100;
function isValidPrice(price) {
    return typeof price === "number" && price > 0;
}
console.log(isValidPrice(price));
// 
function isValidEmail(email) {
    return typeof email === "string" && email.includes("@") && email.includes(".");
}
let email = "user@example12.com";
console.log(isValidEmail(email));

// calculate discount
function calculateDiscount(price, discountPercentage) {
    if (!isValidPrice(price)) {
        return error("Invalid price");
    }

    let discountAmount = (price * discountPercentage) / 100;
    return price - discountAmount;
}

// console.log(calculateDiscount(1000, 10));

// calculate Bill
function calculateBill(price, VatPercentage = 15) {
    let vat = (price * VatPercentage) / 100;
    return price + vat;
}

// console.log(calculateBill(2300));

// format BDT
function formatBDT(amount) {
    return `${amount.toFixed(2)} BDT`;
}
// console.log(formatBDT(232));

// capitalize string
function capitalize(str) {
    if (!str || typeof str !== "string") {
        return error("Invalid input");
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function processOrder(user, itemPrice, discountCode){
    console.log(`Processing order for ${capitalize(user.name)}...`);
    if(!isValidEmail(user.email)){
        return error("Invalid email address");
    }
    let currentPrice = itemPrice;
    if(discountCode == "next level"){
        currentPrice = calculateDiscount(itemPrice, 10);
        console.log(`Discount applied. New price: ${formatBDT(currentPrice)}`);
    }

    let finalBill = calculateBill(currentPrice);
    console.log(`Final bill for ${capitalize(user.name)}: ${formatBDT(finalBill)}`);

    console.log("Order processed successfully!");
}

let user1 = {name: "Mainul", email: "mainul.next@gmail.com"};

processOrder(user1, 1000, "next level");
