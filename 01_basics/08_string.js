const name = "prince"
const repoCount = 50


//console.log(name + repoCount + " value"); // prince50 value
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`); //Hello my name is prince and my repocount is 50
 
const gamename = new String('princei-raghav')
console.log(gamename[0]); // p
console.log(gamename.__proto__); //{}
console.log(gamename.length); // 14
console.log(gamename.toUpperCase()); //PRINCE
console.log(gamename.charAt('4')); // c
console.log(gamename.indexOf('n')); // 3
console.log(gamename.indexOf('i')); // 1

const newString = gamename.substring(0, 4);
console.log(newString); // prin

const anotherString = gamename.slice(-14, -8);
console.log(anotherString); // prince

const newStringOne = "  prince   "
console.log(newStringOne); //   prince 
console.log(newStringOne.trim()); //prince 

const url = "https://prince.com/prince%20raghav"
console.log(url.replace('%20', '-'));  // https://prince.com/prince-raghav

console.log(url.includes("raghav")); // true

console.log(gamename.split('-')); // [ 'princei', 'raghav' ]































