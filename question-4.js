// Question 4: Shipping Cost Calculator

function calculateShippingCost(orderTotal) {
  if (orderTotal >= 2000 && orderTotal < 4000) {
    return "Shipping is 250 Baht"
  } else if (orderTotal >= 4000) {
    return "Shipping is free"   
  } else {
    return "Shipping is 500 Baht"
  }
  // เริ่มเขียนโค้ดที่นี่
}

// ตัวอย่างการใช้งาน
const orderTotal1 = 6000;
const orderTotal2 = 3000;
const orderTotal3 = 150;

console.log(calculateShippingCost(orderTotal1)); // "Shipping is free."
console.log(calculateShippingCost(orderTotal2)); // "Shipping cost is 250 Baht."
console.log(calculateShippingCost(orderTotal3)); // "Shipping cost is 500 Baht."
