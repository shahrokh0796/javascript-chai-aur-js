const coding = ["js", "ruby", "java", "cp"];

// coding.forEach((item) => {
//     console.log(item);
// });


// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item, i, array) => {
//     console.log(item, i, array);
// });

const myCoding = [
    {languageName: "JavaScript", languageFileName: "JS"},
    {languageName: "java", languageFileName: "java"},
    {languageName: "python", languageFileName: "js"},
]

myCoding.forEach((item, i, array) => {
     console.log(`${item.languageName} -: ${item.languageFileName} `);
});



