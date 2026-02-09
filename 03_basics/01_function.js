/*
console.log("p"); // p
console.log("r"); // r
console.log("i"); // i
console.log("n"); // n
console.log("e"); // c
console.log("c"); // e
*/

function sayMyname(){
    console.log("p");
console.log("r");
console.log("i");
console.log("n");
console.log("e");
console.log("c");

}

//sayMyname(); // p r i n c e 

function addtwonumbers (num1, num2){
    let result = num1 + num2;
    console.log("prince");
    return result
}

//addtwonumbers(); // NaN

// addtwonumbers(2,"3"); // 23
//const result =addtwonumbers(2,3); //5
//console.log("result:",result);

function loginusermessage(username = "raghav"){
    if(username === undefined){ // (!username)
        console.log("please eneter a username"); // please enter a username
        return
    }
    return `${username} just logged in`
}

//console.log(loginusermessage()); // raghav just logged in
console.log(loginusermessage("prince")); // prince just logged in







