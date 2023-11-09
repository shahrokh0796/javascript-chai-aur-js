function setUsername(username) {
    this.username = username;
    console.log("USERNAME");
}

function createUser(username, email, password) {
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "said@exmaple.com", "123");
console.log(chai);