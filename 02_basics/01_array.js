// Array

const myArr = [ 1,2,3,4,5,6,7,8,9 ];
//console.log(myArr[1]); // 2

//const myHeroes = [ "spiderman", "ironman", "hulk" , "thor"]

//const myArr2 = new Array(1,2,3,4 );
//console.log(myArr2[2]); // 3
 
// Array Methods

//myArr.push(122); // add an element at the end of the array
//myArr.push(10);

//myArr.pop(); // remove the last element

//myArr.unshift(12); // add an element at the beginning of the array
//myArr.shift(); // remove the first element

//console.log(myArr.includes(0)); // false
//console.log(myArr.indexOf(3)); //2

//const newArr = myArr.join();


//console.log(myArr);
//console.log(typeof myArr); // object

//console.log(newArr); // 1,2,3,4,5,,7,8,9
//console.log(typeof newArr); // string

// slice , splice

console.log("A ", myArr); // A [1,2,3,4,5,6,7,8,9]
const myn1 = myArr.slice(1 ,3); // slice(start, end) , end is not included
console.log(myn1); // [2, 3]

console.log("B " , myArr); // B [1,2,3,4,5,6,7,8,9]

const myn2 = myArr.splice(1, 3); // splice(start, deletecount) , deletecount is the number of elementsto be removed

console.log(myn2); // [2, 3, 4]

console.log("C ", myArr); // C [1,5,6,7,8,9] 


