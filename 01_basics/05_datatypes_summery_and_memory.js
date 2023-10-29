// Primitive data types
// 7 types : String, Number, Boolean, null, undefined, Symbol, 
//Bigint

const score = 100;
const scoreValue = 100.3
const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //undefined
const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId);
const bigNumber = 324324324342342343243245465756n;


// Reference (Non Primitive data types) data types

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Said",
    age: 22,
}

const myFunction = function () {
    console.log("Hello world");
}

// console.log(typeof heros);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
//There are two types of memory
// 1-> Stack  2-> Heap

// All primitive data types use Stack memory

// All Referance (non primitive) data types use Heap memory

// the (myYoutubeName) variable will be stored in stack 
let myYoutubeName = "saidShahrokhTemori";

let anothername = myYoutubeName; 
anothername = "chaiAurCode";

// console.log(anothername);
// console.log(myYoutubeName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "userTwo@google.com";
console.log(userOne.email);





