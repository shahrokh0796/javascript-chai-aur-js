// let myName = "Shahrokh      ";
// let myName = "Temori      ";
// console.log(myName.trueLength);

let myHeros = ["thor", "Spiderman"];

let heroPower = {
    thor: "Hammer",
    spiderman: "Sling",
    getSpiderPower: function() {
        console.log(`Spiderman power is ${this.spiderman}`);
    }
}

// Object.prototype.shahrokh = function () {
//     console.log(`shahrokh is present in all objects`);
// }
// myHeros.shahrokh();


// Array.prototype.heyShahrokh = function () {
//     console.log("hey shahrokh");
// }

// myHeros.shahrokh();
// myHeros.heyShahrokh();
// heroPower.heyShahrokh();





// inheritance

const User = {
    name: "Shahrokh",
    email: "shahrokh@google.com"
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupporter = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupporter,
}

// Teacher.__proto__ = User;


// Modern syntax

Object.setPrototypeOf(TeachingSupporter, Teacher);

let anotherUsername = "Temori Said          ";

String.prototype.trueLength = function () {
    // console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

"Shahrokh        ".trueLength();
"Icetea".trueLength();




