/* reduce method
reduce syntax below:

const array1 = [1, 2, 3, 4, 5];
const initialValue = 0
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialvalue)
console.log(sumWithInitial); output: 10
*/


const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc + currval
// }, 0) 
// console.log(myTotal);

// this is using arrow function
const myTotal = myNums.reduce((acc, currval)=> (acc+currval),0)
console.log(myTotal);
//----------

const shoppingCart = [
    {itemName: "cheese",
    price: 20 },
    {itemName: "pepper",
    price: 30 },
    {itemName: "cake",
    price: 330 },
    {itemName: "chocolate",
    price: 2340 },
    {itemName: "biscuits",
    price: 210 },
    {itemName: "icecream",
    price: 1120 },
]

// lets say we want to add all the prices in this shoppingcart, we can use the reduce method here.

const Scart = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(Scart);