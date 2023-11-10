// const descripttor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descripttor);

// const chai = {
//     name: "ginger tea",
//     price: 250,
//     isAvailable: true,
// }
// console.log(chai);

// const descriptor = Object.getOwnPropertyDescriptor(chai, "name");
// console.log(descriptor);


const chai = {
    name: "ginger tea",
    price: 250,
    isAvailable: true,
    orderChai: function () {
        console.log("no chai");
    }
}

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
});

const descriptor = Object.getOwnPropertyDescriptor(chai, "name");

// console.log(descriptor);

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
    }
}










