//  Dates
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date();
// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// let myTimeStamp = Math.floor(Date.now()/100000000);
// console.log( myTimeStamp );

let newDate = new Date();
console.log(newDate.getMonth());
// because it starts from 0, add 1 to get expected result
// console.log(newDate.getMonth()+1);  
// console.log(newDate.getDay());
// `${getDay()} and the time is`
newDate.toLocaleString("default", {
    weekday: "long",
});


