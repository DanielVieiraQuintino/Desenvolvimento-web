// const arrayNumbers = [2, 4, 5, 8, 9, 4]

// // const sumArrayNumbers = arrayNumbers.reduce((prevValue, currentValue) => {

//     let count = 0
//     if (currentValueç % 2 === 0) {
//     count = prevValue + currentValue
//     }

//     // return count
// // })

// console.log(sumArrayNumbers);

const shoppingCart = [
    {product: "Arroz", amount: 2, price: 20},
    {product: "Café", amount: 3, price: 40},
    {product: "Feijão", amount: 4, price: 60},
];

const sumShoppingCart = shoppingCart.reduce((prevValue, currentValue) => {
   return prevValue + currentValue.price * currentValue.amount;
}, 0);

console.log(sumShoppingCart);