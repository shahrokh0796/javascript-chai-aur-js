// function init() {
//     let name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();
  

// function outer() {
//     let username = "Shahrokh";
//     function inner() {
//         let secret = "my123";
//         console.log("inner ", username);
//     }
//     inner();
//     function inner2() {
//         console.log("inner2 ", username);
//     }
//     inner2();

// }
// outer(); 
// console.log(outer.username);



// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();




    
// <button id="orange">Orange</button>
    
// <button id="green">Green</button>
/* document.getElementById("orange").onclick = function() {
document.body.style.backgroundColor=`orange`;
};
document.getElementById("green").onclick = function() {
document.body.style.backgroundColor=`green`;
}; */

// function clickHandler(color) {
// return function() {
// document.body.style.backgroundColor=`${color}`;
// }
// }

// document.getElementById("orange").onclick = clickHandler("orange");
// document.getElementById("green").onclick = clickHandler("green");
