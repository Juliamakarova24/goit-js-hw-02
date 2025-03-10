function makeTransaction(quantity, pricePerDroid) {
  // 1. Обчислюємо загальну вартість замовлення
  const totalPrice = quantity * pricePerDroid;
  // 2. Повертаємо текстове повідомлення
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
