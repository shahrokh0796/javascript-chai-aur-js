// const user = {
//     username: "Shahrokh",
//     loginCount: 8,
//     singedIn: true,

    // getUserDeatils: function () {
        // console.log(`Username ${this.username}`);
        // console.log(this);
//     }
// }

// user.getUserDeatils();
// console.log(user.username);

// okay now, what if I want to create a user two object
// with same properties and methods, With object literal
// syntax?

const userTwo = {
    username: "Shahrokh",
    loginCount: 8,
    singedIn: true,

    getUserDeatils: function () {
        // console.log(`Username ${this.username}`);
        // console.log(this);
    }
}

// This way it will be very leanthy process, because 
// if I want to create 100, 200, or 1000 objects then
// it will be a really long process. 

// function User (username, loginCount, isLoggedin) {
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedin = isLoggedin;

//     return this;
// }

// const u1 = User("Shahrokh", 9, true);
// console.log(u1);
// console.log("++++++++++++++++++++++++++++++++++++++++++");

// const u2 = User("Temori", 13, false);
// console.log(u2);
// console.log("++++++++++++++++++++++++++++++++++++++++++");
// console.log(u1);

// In the above example the new keyword is not used.
//So we created 2 instances u1, and u2. When u1 is called 
// in the console, at first the values were as expected, and when u2 is called in the console, we see that 
// the values are as expected there is no problem,
// but when again u1 is called we see that the values
// printed in the console is u2's value, which means 
// all the values got over ridden, This is a potential
// problem.



function User (username, loginCount, isLoggedin) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;
    this.greeting = function() {
        console.log(`welcome ${this.username}`);
    }

    // below, if we even dont write (return this) 
    // it will return implisitly
    return this;
}

const u1 = new User("Shahrokh", 9, true);
const u2 = new User("Temori", 2, false);
console.log(u1.constructor);
// console.log("+++++++++++++++++++++++++++++++++++++++++");
// console.log(u2);
// console.log("+++++++++++++++++++++++++++++++++++++++++");
// console.log(u1);
// by using new keyword, we get a new instance everytime
// and objects will not get over ridden

