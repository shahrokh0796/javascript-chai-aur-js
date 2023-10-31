// {}
// var c = 300;
// let a = 300;
// if (true) {
//     let a = 10;
    // const b = 20;
    // c = 30;
//     console.log("inner: ", a);
// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(a);

function one() {
    const username = "Shahrokh";

    function two() {
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}

// one();

if (true) {
    const username = "Shahrokh";
    if (username === "Shahrokh") {
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//+++++++++++++++ intresting ++++++++++++++++++++++++

console.log(addone(5));
function addone (num) {
    return num + 1;
}

addTwo(5);
const addTwo = function (num) {
    return num +2;
}


