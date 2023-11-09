// ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email =email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`;
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const said = new User("Said", "Said@example.com", 12345);
// console.log(said.encryptPassword());
// console.log(said.changeUsername());

// behind the scenes of the above example (User class);

function User(username, email, password) {
    this.username = username;
    this.email =email;
    this.password = password;
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`;
}

const said = new User("Said", "Said@example.com", 12345);
console.log(said.changeUsername());