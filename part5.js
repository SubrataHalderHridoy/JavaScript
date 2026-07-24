// ****** JS Object  Literals ****
// let students = {
//     name : "hridoy",
//     age : 23,
//     marks : 94.4
// };
// console.log(students);

// const item = {
//     price : 100.99,
//     discount : 50,
//     colors : ["red", "pink"]
// }
// console.log(item);


// *** Thread /  Twitter Post
// Create an object literal for the properties of thread/ twitter post which includes
// . username, . content, . likes, . reports, .tags
// const post = {
//     username: "@HridoyHalder",
//     content: "This is my #first post",
//     likes: 150,
//     reports: 5,
//     tags: ["@apnacollege", "delta"]
// }
// console.log(post);


// **** Get Value **
// let students = {
//     name: "hridoy",
//     marks: 90
// }
// console.log(students['name']);
// console.log(students.marks)


// const obj = {
//     1: "a",
//     2: "b",
//     3: "c",
//     true: "d",
//     null: "e",
//     undefined: "f"
// }
// console.log(obj)
// console.log(obj[true]);
// console.log(obj[1]);


// *** Add/ update value ***
// const students ={
//     name : "hridoy",
//     age : 23,
//     marks : 99.4,
//     city : "Delhi"
// }
// console.log(students);
// console.log(students.city);
// console.log(students.city = "Mumbai");
// console.log(students.gender = "female");
// console.log(students.gender);
// console.log(students.marks = "A");
// console.log(students.marks);
// console.log(students);
// console.log(delete students.marks);
// console.log(students);


// **** Objects of Objects
// const classInfo = {
//     aman: {
//         gade : "A+",
//         city: "Delhi"
//     },
//     shardha: {
//         gade : "A",
//         city: "Pune"
//     },
//     hridoy: {
//         grade: "B",
//         city: "Dhaka"
//     }
// }
// console.log(classInfo);
// console.log(classInfo.hridoy);
// console.log(classInfo.hridoy.city);
// console.log(classInfo.hridoy.city = "Mumbai");
// console.log(classInfo.hridoy.city);
// console.log(classInfo.hridoy);


// **** Array of object
// const classInfo = [
//     {
//         name: "hridoy",
//         grade: "A",
//         city: "Dhaka"
//     },
//     {
//         name: "aman",
//         grade: "A+",
//         city: "Mumbai"
//     },
//     {
//         name: "shardha",
//         grade: "A-",
//         city: "Pune"
//     }
// ];
// console.log(classInfo);
// console.log(classInfo[0]);
// console.log(classInfo[1]);
// console.log(classInfo[2]);
// console.log(classInfo[1].name);
// console.log(classInfo[1].name = "rakesh");
// console.log(classInfo[1]);
// console.log(classInfo[1].gender = "female");
// console.log(classInfo[1]);


// ** Math Object ****
// console.log("PI: ",Math.PI);
// console.log("E: ",Math.E);
// console.log("abs: ",Math.abs(12));
// console.log("abs: ",Math.abs(-12));
// console.log("pow: ",Math.pow(3, 4));
// console.log("floor: ",Math.floor(5));
// console.log("floor: ",Math.floor(5.99999));
// console.log("floor: ",Math.floor(-5));
// console.log("floor: ",Math.floor(-5.5));
// console.log("ceil: ", Math.ceil(5));
// console.log("ceil: ", Math.ceil(5.000000001));
// console.log("ceil: ", Math.ceil(5.5));
// console.log("ceil: ", Math.ceil(-5.5));
// console.log("random: ", Math.random());
// console.log("random: ", Math.random());
// console.log("random: ", Math.random());
// console.log("random: ", Math.random());
// console.log("random: ", Math.random());


// **** Random Integers ****
// From 1 to 10
// let num = Math.random();
// console.log(num);
// console.log(num = num * 10);
// console.log(num = Math.floor(num));
// console.log(Math.floor(Math.random() * 10) + 1);


// Qs: Generate a random number between 1 and 100.
console.log(Math.floor(Math.random() * 100) + 1);