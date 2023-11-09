class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher  extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A, new course was added by ${this.username}`);
    }
}

const dick = new Teacher("Tom Dick", "t@exmaple.com", 12345);
// dick.addCourse();
const newTom = new User("SDS");
// newTom.logMe();

// console.log(dick === newTom); //false
// console.log(dick instanceof Teacher); // true
// console.log(dick instanceof User); // true