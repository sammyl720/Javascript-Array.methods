const myArray = ["Sam", 32, (x)=>(x*3)];
const secondArray = [{o:"Myobj"}, [1,2,3]];

// Array Methods

// concat() join to or more arrays and returns a copy of the joined array
//Example:
// const thirdArray = myArray.concat(secondArray);
// console.log(thirdArray);

//copyWithin()	Copies array elements within the array, to and from specified positions
//the methods first arg is the index to start copy over/to
//the second arg is the index to start copying
//the 3rd arg is the index to stop copying at


//Example:
// console.log([1,2,3,4,5,6,7,8,9,10].copyWithin(0,5,8));

//entries()	Returns a key/value pair Array Iteration Object
 var myItArr = ["a","b","c","d","e","f"].entries();


 
 //The every() method checks if ALL elements in an array pass a test (provided as a function).

const ages = [15,24,43,12,43,23];

const ageValidation = (age)=>(age>=18? true : false);
const ageResult = ages.every(ageValidation);
console.log(ageResult);

//fill()	Fill the elements in an array with a static value
const filledArray = Array(8).fill('x');
console.log(filledArray);

//filter()	Creates a new array with every element in an array that pass a test
const adults = ages.filter(ageValidation);
console.log(adults);

//find()	Returns the value of the First element in an array that pass a test
let mixedArr = [2, 4, "first String", 6, "second string"];
let container = mixedArr.find(i => ( typeof(i) === "string"));
console.log(container);


//findIndex()	Returns the index of the first element in an array that pass a test
 container = mixedArr.findIndex(i =>( i === 4 ));
console.log(container);

// forEach()	Calls a function for each array element

let people = ["Sam", "David", "Ethan", "Mike"];

people.forEach(person =>{
  console.log(`Hello ${person}!`);
  return ".(..).";
});


//from()	Creates an array from an object/string

// let letters = Array.from("abcdefghijklmnopqrstuvwxyz");
// console.log(letters);


//includes()	Check if an array contains the specified element

let fruits = ["Apple", "Strawberry", "Mango"]

const checkStock = item => {
    if(fruits.includes(item)){
      console.log(`We do have ${item}/s in stock`);
      return true;
    }else{
      console.log(`We do not have ${item}/s in stock`);
      return false;
    }
};

checkStock("Mango"); //Should return true
checkStock("Orange"); //should return false

//indexOf()	Search the array for an element and returns its position
checkStock("Mango") ? console.log(fruits.indexOf("Mango")): null;

//isArray()	Checks whether an object is an array
const arrayChecker = item => {
  console.log(`Checking if "${item} "variable is an Array: ${Array.isArray(item)}`);
}
arrayChecker(fruits);
//join()	Joins all elements of an array into a string

fruits = fruits.join(", ");
console.log("joined fruits to string:", fruits);
arrayChecker(fruits);

//keys()	Returns a Array Iteration Object, containing the keys of the original array
// container = [1,2,3,4,5];
// let arr = ["one", "two", "three", "four", "five"];
// container = container.keys();
// let x = (n) => { 
//   let holder = {done:false};
//   while(!holder.done){
//     holder = container.next();
//     console.log(arr[holder.value]);
//   }
// };
// console.log(x());

//lastIndexOf()	Search the array for an element, starting at the end, and returns its position

// console.log(Array.from(fruits).lastIndexOf("n"));


//map()	Creates a new array with the result of calling a function for each array element

people = people.map(p => {
  return `Sir ${p} is Number ${people.indexOf(p) + 1}!`;
});
console.log(people);


//pop()	Removes the last element of an array, and returns that element

// let countDown = [1,2,3,4,5,6,7,8,9,10];

// while(countDown.length > 1){
//   console.log(countDown.pop());
// }
// console.log(countDown.pop(),"Happy New Year!");


//push()	Adds new elements to the end of an array, and returns the new length

let holder = [];
while(holder.length < 25){
  holder.push("push method");
}
console.log(holder[holder.length -1], holder.length);


//reduce()	Reduce the values of an array to a single value (going left-to-right)

let prices = [5.25, 3.99, 12.49];
holder = [...prices].join(", ");
let total = prices.reduce((sum, price)=>(sum + price));
console.log(`prices ${holder} . Total: ${total}`);

//reduceRight()	Reduce the values of an array to a single value (going right-to-left)
let phrase = [' hat', ' the', ' in', ' Cat', ' The'];
holder = [...phrase];
console.log(phrase.reduceRight((full, item) => {
  return full + item;
}));


//reverse()	Reverses the order of the elements in an array
console.log(holder.reverse().join(""));


//shift()	Removes the first element of an array, and returns that element

// holder = [10,9,8,7,6,5,4,3,2,1];
// while(holder.length > 0){
//   console.log(holder.shift());
// }


//slice()	Selects a part of an array, and returns the new array

let original = ["st", "nd", "rd", ...Array(7).fill("th")];
let copy = original.slice(0,4);
console.log(copy);

//some()	Checks if any of the elements in an array pass a test//similiar to every() but this (some method) return true if even passes the test
console.log([1,2,4].some(n => n > 2));


//sort()	Sorts the elements of an array
console.log([1,7,10,3,6,2,8,4].sort((a,b)=>(a-b)));


//splice()	Adds/Removes elements from an array
//arg 1: index required . specifies what postion to start added/removing
//arg 2 : optional the number of items to be removed if set to 0 no items will be removed
//extra args: optional the new item to the array
holder = ["a", "b", "C", "d"];
holder.splice(2,1,"c");
console.log(holder);

//toString()	Converts an array to a string, and returns the result

console.log(holder.toString());

//unshift()	Adds new elements to the beginning of an array, and returns the new length

holder.unshift("letters");
console.log(holder);



