let products = [
    { id: 1, price: 10 }, 
    { id: 2, price: 5 }
];

console.log(products);
let newProduct = {id:3, price:20};
products = [...products,newProduct];
// Shallow Copy
newProduct.price = 100;
console.log(products);