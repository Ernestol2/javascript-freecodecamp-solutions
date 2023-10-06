//Store multiple values in one variable using javascript arrays
const myArray = ["peanut", 5];

//nest one array within another array
const teams = [["bulls", 23], ["heats", 12]];

//acces array data with indexes
const nums = [1, 2, 3]
let firstNum = nums[0]
console.log(firstNum);

//modify array with indexes
nums[0]=4;
console.log(firstNum);

//acces multi-dimensional arrays with indexes
const multidimensionalArray = [[1, 2],[3, 4]] 
const dimensionalValue = multidimensionalArray[0][0]
console.log(dimensionalValue);

//manipulate array with push method
//push adds an element at the end of the array
multidimensionalArray.push([5, 6])
console.log(multidimensionalArray);

//manipulate arrays with pop method
//pop remove the last element of array
let removedElement = multidimensionalArray.pop();
console.log(removedElement);

//manipulate arrays with shift method
//shift removes the first element of array
let shiftedElement= multidimensionalArray.shift()