function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("I");
    console.log("D");
}
// sayMyName();

// function AddTwoNumbers(a, b) {
//     console.log( a + b);
// }

function AddTwoNumbers(a, b) {
    let result = a + b;
    
    console.log("Shahrokh");
    return result;
 }

 function AddTwoNumbers(a, b) {
    return a + b;
 }

const result = AddTwoNumbers(10, 20);
// console.log(result);

// function loginUserMessage(username = "Said shahrokh") {
//     if (!username) {
//         console.log("please enter a user name");
//         return;
//     } 
//     return `${username} just logged in`;
// }

// console.log(loginUserMessage("Said"));

// console.log(loginUserMessage("Temori"));

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}
// console.log(calculateCartPrice(2, 400, 500));

const user = {
    username: "Said",
    prices: 199
}

function handleObject(anyObj) {
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}

// handleObject(user);
// handleObject({
//     username: "Said",
//     price: 199
// });





const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));

// console.log(returnSecondValue([200, 400, 100, 600]));














