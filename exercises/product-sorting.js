let products = [
  { product: "AGummy Worms", price: 5.79 },
  { product: "Dlain M&Ms", price: 2.89 },
  { product: "Ceanut M&Ms", price: 2.90 },
  { product: "Bwedish Fish", price: 1.79 },
  // TODO: fill the array with 10 candies of various
  // price ranges
];

function sortingArray(a, b) {
  if (a.product < b.product) return -1;
  else if(a.product == b.product) return 0;
  else return 1;
}

products.sort(sortingArray)

for (const product of products) {
    
    console.log(product.product) 
}

console.log("--------------")

function sortingArray(a, b) {
  if (a.product > b.product) return -1;
  else if(a.product == b.product) return 0;
  else return 1;
}

products.sort(sortingArray)

for (const product of products) {
    
    console.log(product.product) 
}