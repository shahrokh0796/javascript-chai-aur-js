const myObj = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple",
}

for (const key in myObj) {
    // console.log(` ${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (let key in programming) {
    // console.log(programming[key]);
}


const map = new Map();
map.set("IN", "India");
map.set("USA", "United states");
map.set("Fr", "France");
map.set("IN", "India");

for (let key in map) {
    console.log(map);
}