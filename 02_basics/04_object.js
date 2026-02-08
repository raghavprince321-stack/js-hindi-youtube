//const tinderuser = new Object() // singelton object 
//console.log(tinderuser); // {}

const tinderUser = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "prince"
tinderUser.isLoggedIn = false

//console.log(tinderUser); //{ id: '123abc', name: 'prince', isLoggedIn: false }

const regularUser = {
    email: "prince@gmail.com",
    fullname: {
        userfullname: {
            firstname: "prince",
            lastname: "raghav"
        }
    }
}

//console.log(regularUser.fullname); // { userfullname: { firstname: 'prince', lastname: 'raghav' } }

//console.log(regularUser.fullname.userfullname); // { firstname: 'prince', lastname: 'raghav' }

//console.log(regularUser.fullname.userfullname.firstname); // prince

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'prince', false ]
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
//const obj3 = { obj1, obj2 };
//const obj4 = {...obj1,...obj2}

//console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = Object.assign({},obj1, obj2);
//console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


