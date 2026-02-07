// Singelton

// object literals

const mySym = Symbol("key1");

const jsuser = {
    name: "prince",
    "full name": "prince singh raghav",
    age : 18,
    [mySym] : "mykey1",
    location : "meerut", 
    isLoggedIn : true, 
    lastLogindays: ["monday","tuesday","saturday"]
} 
/*
console.log(jsuser.location); // meerut
console.log(jsuser["location"]); // meerut
console.log(jsuser["full name"]);
console.log(jsuser[mySym]); // mykey1
*/
//jsuser.age = 21,
//Object.freeze(jsuser); 
//jsuser.age = 25
//console.log(jsuser.age); // 21

//console.log(jsuser); // the frozen object is returned with age = 21

   
jsuser.greeting = function(){
    console.log("hello js user");    
}
    console.log("hello js user");
 

jsuser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);    
}

//console.log(jsuser.greeting); // [Function: greeting]
console.log(jsuser.greeting()); // hello js user

console.log(jsuser.greetingtwo()); // hello js user, prince








