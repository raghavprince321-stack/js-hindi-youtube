const marvel_heroes = ["thor","ironman", "spiderman"];
const dc_heroes = ["superman", "batman", "flash"];

//marvel_heroes.push(dc_heroes); 
//console.log(marvel_heroes); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]

//console.log(marvel_heroes[3][0]); // superman

//const allheroes = marvel_heroes.concat(dc_heroes);
//console.log(allheroes); // [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

//const all_newheroes = [...marvel_heroes, ...dc_heroes] // spread operator
//console.log(all_newheroes); //  [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("prince")); // false
console.log(Array.from("prince")); // [ 'p', 'r', 'i', 'n', 'c', 'e' ]
console.log(Array.from({name: "prince"})); // [] // intresting case

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]








