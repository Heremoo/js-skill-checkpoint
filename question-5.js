// Question 5: Calculating Total Price in User's Cart

let total = 0;

function calculateTotalPrice(order) {
  for (let i = 0; i < cart.length; i++) {
    total += order[i].price * order[i].quantity
  }
  return total
}

// // ตัวอย่างการใช้งาน

const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
]
console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50
    
