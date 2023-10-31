const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email: "some@gamil.com",
    fullname: {
        userfullname: {
            firstName: "Said",
            lastName: "Temori"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "c", 6: "d"};
// const obj3 = {obj1, obj2}; // wrong 
// console.log(obj3);

// const obj4 = Object.assign({}, obj1, obj2);
// const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4);
// const obj4 = {...obj1, ...obj2, ...obj3};
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "S@gmail.com",
    },
    {
        id: 1,
        email: "S@gmail.com",
    },
    {
        id: 1,
        email: "S@gmail.com",
    },
    {
        id: 1,
        email: "S@gmail.com",
    },
];

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty("isLogged"));

//+++++++++++++ Object destructuring ++++++++++


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh",
}

// course.courseInstructor
// const { courseInstructor: instructor } = course;
// console.log(instructor);

// ++++++++++++++++++ API +++++++++++++++++++++++++++

// {
//     "name": "Said",
//     "courseName": "Js in hindi",
//     "Price": "Free",
// }

// [
//     {},
//     {},
//     {}
// ]
 





