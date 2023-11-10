// class User {
//     constructor(email, password) {
//         this.email = email;
//         this.password = password;
//     }

//     get email() {
//         return this._email.toUpperCase();
//     }

//     set email(value) {
//          this._email = value;
//     }

//     get password() {
//          `${this._password.toUpperCase()}`;
//     }

    
//     set password(value) {
//         this._password = value;
//     }
// }

// const sahahrokh = new User("eam@example.com", "abc");
// console.log(sahahrokh.email);


// ole way of writing getters and setters 

// function User(email, password) {
//     this._email = email;
//     this._password = password;


//     Object.defineProperty(this, "email", {
//         get: function() {
//             return this._email.toUpperCase();
//         },
//         set: function(value) {
//             this._email = value;
//         }
//     });

//     Object.defineProperty(this, "password", {
//         get: function() {
//             return this._password.toUpperCase();
//         },
//         set: function(value) {
//             this._password = value;
//         }
//     });
// }

// const said = new User("ai@example.com", "aser56");
// console.log(said.password);



// another way of writing getters and setters

const User = {
    _email: "asid@example.com",
    _password: "asderw",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    }
}

const said = Object.create(User); 
console.log(said.email);

