let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

let totalPrice = 0;
for(let i =0; i<lunch.length; i++) {
    totalPrice += lunch[i].price;  
    
}
console.log(totalPrice)

let tax = totalPrice * 0.08;
let tip =  totalPrice * .18;

let totalCost = totalPrice + tax + tip 

console.log(totalCost)

