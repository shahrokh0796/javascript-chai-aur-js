class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME IS ${this.username}`);
    }

    static createId() {
        return `123`;
    }
}

// const said = new User("Said");
// console.log(said.createId());
// console.log(User.createId("Said")); // static keyword

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("Iphone", "@example.com");

iphone.logMe();
console.log(Teacher.createId());