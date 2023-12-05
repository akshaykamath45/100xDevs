/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/


// using groupBy : this would create an object of arrays according to category
// function calculateTotalSpentByCategory(transactions) {
//   const returnCategory=Object.groupBy(transactions,(item)=>item.category)
//   console.log(returnCategory)
// }


function calculateTotalSpentByCategory(transactions) {
  return transactions.reduce((acc, transaction) => {
    const existingCategory = acc.find(
      (category) => category.category === transaction.category
    );
    if (existingCategory) {
      existingCategory.totalSpent += transaction.price;
    } else {
      acc.push({ category: transaction.category, totalSpent: transaction.price });
    }
    return acc;
  }, []);
}

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
];

console.log(calculateTotalSpentByCategory(transactions))

//practicing reduce

// const arr = [1, 2, 3, 4, 5]
// const callBackFn = (acc, curValue) => {
//   return curValue % 2 == 1 ? acc + curValue : acc;
// }
// console.log(arr.reduce(callBackFn, 0))

// const books = [
//   { title: 'The Alchemist', author: 'Paulo Coelho', pages: 197 },
//   { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281 },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180 },
// ]
// const getTotalPages = (books)=> books.reduce((acc, curr) => acc + curr.pages, 0)
// console.log(getTotalPages(books)) // Output: 658


// const strings = ['apple', 'banana', 'cherry', 'date', 'blueberry']
// const totalLength = (arr) => {
//   return arr.reduce((acc, curr) => acc + curr.length, 0)
// }
// console.log(totalLength(strings))
// Output: 30


// const numbers = [1, 2, 3, 4, 5]
// const sumSquares=(arr)=>arr.reduce((acc,curr)=>acc+curr**2,0)
// console.log(sumSquares(numbers))
// Output: 55

// const items = [
//   { name: 'Item 1', price: 10 },
//   { name: 'Item 2', price: 20 },
//   { name: 'Item 3', price: 30 },
// ]
// const totalValue=(arr)=>arr.reduce(((acc,curr)=>acc+curr.price),0)
// console.log(totalValue(items))
// Output: 60


// const concatStrings=(arr)=>arr.reduce((acc,curr)=>acc+curr,"")
// console.log(concatStrings(['this', 'is', 'fun'])) // Output: 'thisisfun'


// const numbers = [1, 2, 3, 4, 5]
// const product=(arr)=>arr.reduce((acc,curr)=>acc*curr,1)
// console.log(product(numbers))
// Output: 120


// const strings = ['neogcamp', 'Haule Haule', 'code', 'Batman', 'Awesome']
// const longestString=(arr)=>arr.reduce((acc,curr)=>curr.length>acc ? acc=curr:acc,"")
// console.log(longestString(strings))
// Output: 'Haule Haule'

// const people = [
//   { name: 'Jeena', age: 25 },
//   { name: 'Priya', age: 30 },
//   { name: 'Naina', age: 45 },
// ]
// const reduceFn=(acc,{age,name})=>{
//   if(age>acc.age){
//    acc={age,name}
//   }
//   return acc
// }
// const oldestPersonName=(arr)=>{
//   return arr.reduce(reduceFn,{name:"",age:0}).name
// }
// console.log(oldestPersonName(people))
// Output: 'Naina'


// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 },
//   { name: 'David', age: 40 },
// ]
// const getAverageAge=(arr)=>{
//   const sum= arr.reduce((acc,{age})=>acc+age,0)
//   const averageAge=sum/arr.length;
//   return {averageAge}
// }
// const getAverageAge = (arr) => {
//   const result = arr.reduce((acc, curr) => {
//     return {
//       sum: acc.sum + curr.age,
//       count: acc.count + 1
//     }
//   }, { sum: 0, count: 0 })
//   return {averageAge:result.sum/result.count}
// }
// console.log(getAverageAge(people))
// Output: { averageAge: 32.5 }



// const products = [
//   { name: 'Bread', price: 10, quantity: 2 },
//   { name: 'Clips', price: 20, quantity: 5 },
//   { name: 'Knife', price: 30, quantity: 1 },
//   { name: 'Slipper', price: 40, quantity: 3 },
// ]
// const findMostExpensiveProduct=(arr)=>{
//   const getHighestPrice=arr.reduce((acc,{name,price,quantity})=>{

//     if(price>acc.price){
//       acc={name,price,quantity}
//     }
//     return acc
//   },{name:"",price:0,quantity:0})
//   return getHighestPrice
// }
// const findMostExpensiveProduct = (arr) =>
//   arr.reduce((acc, product) => {
//     if (product.price > acc.price) {
//       acc = product;
//     }
//     return acc;
//   }, { name: "", price: 0, quantity: 0 });
// console.log(findMostExpensiveProduct(products))
// { name: "Slipper", price: 40, quantity: 3 }


// const fruits = [
//   'apple',
//   'banana',
//   'banana',
//   'cherry',
//   'apple',
//   'apple',
//   'banana',
// ]
// const countStrings = (arr) => {
//   return  arr.reduce((acc,curr)=>{
//     if(acc[curr]){
//       acc[curr]++
//     }else{
//       acc[curr]=1
//     }
//     return acc
//   },{})
// }
//   console.log(countStrings(fruits))
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }
module.exports = calculateTotalSpentByCategory;
