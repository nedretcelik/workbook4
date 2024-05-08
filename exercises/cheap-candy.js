let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},

    // TODO: fill the array with 10 candies of various
    // price ranges
    ];


// Which candies costs less than $4.00?
for(let i = 0; i<products.length; i++) {
    if(products[i].price < 4) {
        console.log(`cost less than 4 : ${products[i].product}`)
    }
}
// Which candies has "M&M" its name?
for(let i = 0; i<products.length; i++) {
    if(products[i].product.includes("M&M")) {
        console.log(`"M&M": ${products[i].product}`)
    }
}
// Do we carry "Swedish Fish"?

for(let i = 0; i<products.length; i++) {
    if(products[i].product == "Swedish Fish") {
        console.log(`Yes we do carry ${products[i].product}`)
    }
}