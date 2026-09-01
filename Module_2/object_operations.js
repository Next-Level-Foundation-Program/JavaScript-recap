let student = {
    name: "Rana",
    id: 101,
    age: 25,
    marks: {
        bangla: 80,
        english: 91,
        math: 75,
    }
};

let totalMarks = 0;
let totalSubjects = 0;

for (const subject in student.marks) {
    totalMarks += student.marks[subject];
    totalSubjects++;
}

let averageMarks = (totalMarks / totalSubjects).toFixed(2);
console.log(`Average Marks: ${averageMarks}`);

// Task: find total quantity and total price of all items in the cart
let cart = [
    {
        name: "Shirt", price: 500, quantity: 2
    },
    {
        name: "Pants", price: 800, quantity: 3
    },
    {
        name: "Shoes", price: 1200, quantity: 1
    }
]

// total quantity
let totalQuantity=0;
let totalPrice=0;
for (const item of cart){
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
}
console.log("Total Quantity:", totalQuantity);
console.log("Total Price:", totalPrice);


// console.log(cart[0].price * cart[0].quantity + cart[1].price * cart[1].quantity + cart[2].price * cart[2].quantity);