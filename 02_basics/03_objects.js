// singleton
// Object.create

// object literals

const mySym = Symbol("key1");
const jsUser = {
    name: "Said",
    "full name": "Said shahrokh temori",
    [mySym]: "mySymbolKey",
    age: 18,
    location: "Delgi",
    email: "said@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(typeof jsUser[mySym]);
// console.log(jsUser.name); // accessing object property
// console.log(jsUser["name"]); // accessing object property
// console.log(jsUser["full name"]);
jsUser.email = "said@chatGPT.com"; //edit object property

// Object will not get edited after freeze
// Object.freeze(jsUser); 
// jsUser.email = "said@google.com";
// console.log(jsUser);

// jsUser.greeting = function() {
//     console.log("Hello js user");
// };
// console.log(jsUser.greeting); // [Function (anonymous)]
// console.log(jsUser.greeting());

// jsUser.greetingTwo = function() {
//     console.log(`Hello js user ${this.name}`);
// };
// jsUser.greetingTwo();
