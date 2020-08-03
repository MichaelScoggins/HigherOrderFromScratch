// Project 11.1: Functional Programming Rebuild

// By now you should very much know how to build higher-order functions from scratch. Today you will warm-up on the more important and useful higher order functions: .map(), .reduce() and .filter().

// Whiteboard, make a code plan and build each of the following methods:

// Create a repo called "Higher-Order-From-Scratch".

// Practice working from branches by creating a new branch called: "HigherOrder".

// Place your code in a file called main.js.

// Create a pull request (PR) for Higher-Order-From-Scratch to be merged into master.


console.log("~~~~~~~~~~~~ASSIGNMENT START~~~~~~~~~~~~~~")

////////////////////****** .reduce() from scratch *****//////////////////////////
// .reduce() function that takes an array of food orders with their amounts and returns the total amount of   all the food orders.

//data sample
const foodOrders = [10.98, 7.03, 15.75, 4.02, 18.12, 8.23, 25.25, 15.33, 2.43]
//utility function
const addTogether = ((x, y) => (x + y))
//.reduce() function
const reducerEngine = (func, arr, num) => {
  let accumulator = num ? num : 0
  let len = arr.length
  for (let i = 0; i != len; i++) {
    accumulator = func(accumulator, arr[i])
  }
  return accumulator.toFixed(2)
}
//proof of concept
console.log("foodOrders_revenue/today: " + "$" + reducerEngine(addTogether, foodOrders))
console.log("foodOrders_revenue/today+yesterday: " + "$" + reducerEngine(addTogether, foodOrders, 103.45))


////////////////////****** .filter() from scratch *****//////////////////////////
// .filter() function that takes an array of items and a function that returns an array with only the items that return true in the function.

//data sample
const weightTotals = [140, 165, 109, 104, 134, 201, 175, 215]
//utility function
const underWeight = (x => x < 115)
//.filter() function
const filterEngine = (arr, func) => {
  let newArray = []
  let len = arr.length
  for (let i = 0; i != len; i++) {
    if (func(arr[i])) {
      newArray.push(arr[i])
    }
  }
  return newArray
}
//proof of concept
console.log("Eligible for MassGain regimen:", filterEngine(weightTotals, underWeight))

////////////////////****** .map() from scratch *****//////////////////////////
// .map() function that takes an array of items and a function that returns an array with each item manipulated by that function.

//data sample
const benchPressRegimen = [105, 135, 155, 185]
//utility function
const benchPressIncrease = (x => x * 1.5)

//.map() function (i later realized i used .map within .map so SEE BELOW)
// const mapEngine = (arr, func) => {
//   let newArray = []
//   let len = arr.length
//   for(let i = 0; i != len; i++) {    
//     newArray.push(func(arr[i]))     
//   }
//   return newArray.map(x => Math.ceil(x/5)*5)
// }

//.map() function WITHOUT USING .MAP() TO ROUND RESULTS
const mapEngine = (arr, func) => {
  let newArray = []
  let len = arr.length
  for (let i = 0; i != len; i++) {
    item = arr[i]
    newArray.push(func(item))
  }
  let newestArray = []
  for (let i = 0; i != newArray.length; i++) {
    rounded = Math.ceil(newArray[i] / 5) * 5
    newestArray.push(rounded)
  }
  return newestArray
}

//proof of concept
console.log("Benchpress pyramid 1-year target:", mapEngine(benchPressRegimen, benchPressIncrease))
console.log("~~~~~~~~~~~~ASSIGNMENT END~~~~~~~~~~~~~~")


console.log("~~~~~BONUS~~~~~~~BONUS~~~~~~~BONUS~~~~~~~")
/////******BONUS .filter() from scratch BONUS using key-value pairs BONUS*****/////

//i included this as optional because i wasn't sure if it would have satisfied the actual assignment's requirements (even tho it's <i>object</i>ively better...)

// .filter() function that takes an //object of key-value pairs// and a function that returns an array with only the //keys// //whose properties// return true in the function.

//data sample// (i decided i wanted to see how to do this with objects as well as arrays (since i'm struggling so much with this stuff) and it took me forever to finally get it but here it is)
const weightTotals1 = {
  austin: 198,
  ben: 194,
  eric: 213,
  chris: 178,
  michael: 198,
  danuel: 213,
  robert: 209,
  pj: 244,
  demarre: 213,
  luc: 229,
  thabo: 218,
  russell: 198,
  jeff: 233,
  tyson: 238,
  james: 218
}
console.log("Weight Totals", weightTotals1)
//utility function
const underWeight1 = (x => x < 200)
//.filter() function
const filterEngine1 = (obj, func) => {
  let poop = obj
  let newArray = []

  for (const property in poop) {
    if (func(poop[property])) {
      newArray.push(property)
    }
    // clayton if you're reading this i just want you to know the moment i chose to call it poop (with one or two other hopeful changes... after hours of nigh-hopeless meandering), it finally worked.
  }
  return newArray
}


// proof of concept
console.log("Eligible for MassGain regimen:", filterEngine1(weightTotals1, underWeight1))