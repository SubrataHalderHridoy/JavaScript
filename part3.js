
// String Methods
let msg = "        hello      ";

// ** trim method
let password = prompt("set your password");
let newPass = password.trim();
console.log(newPass)


// ** Lower case & Upper case
let name = "Apna College";
let msg = "error";
console.log(msg.toUpperCase())


let msg = "     hello   ";
let newMsg = msg.trim();
console.log("after trim : ", newMsg);
newMsg = newMsg.toUpperCase();
console.log("after uppercase : ", newMsg)


// let msg = "   hello  ";
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);

// ** String Methods with Argumentss
let msg = "ILOVECODING";
console.log(msg.indexOf("E"))


// ** Slice
let msg = "hellohridoy";
console.log(msg.slice(0, 6));
console.log(msg.slice(4, msg.length));
console.log(msg.slice(4));
console.log(msg.slice(-1));  // 11-1 = 10



// ** replace
let msg = "ILoveCoding";
console.log(msg.replace("Love", "do"));



// ** repeat
let msg = "Mango";
console.log(msg.repeat(3));



//Practice Qs --> trim it and convert to uppercase
let msg = "help!";
let newMsg = msg.trim();
console.log("after trim: ", msg.trim());
newMsg = newMsg.toUpperCase();
console.log("after toUppercase: ", newMsg);
console.log(msg.trim().toUpperCase());


// Practice Qs
let name = "ApnaCollege";
console.log(name.slice(4, 9))
console.log(name.indexOf("na"))
console.log(name.replace("Apna", "Our"));

// Practice Qs---> Separate the "College" part in above string and replace 'l' with 't' in it
let name = "ApnaCollege";
let newStr = name.slice(4).replace('l', 't');
console.log(newStr);
console.log(newStr.replace('l', 't')); // cottege




// ******** Array ***********
let students = ["aman", "shardha", "rajat"];
console.log(students, students.length)

let nums = [2, 4, 6, 8];
console.log(nums.length);

// let marks = [99, 85, 93, 76, 62];
let names = ["adam", "bob", "catyln"];
let info = ["adam", 25, 6.1];  // mixed array
console.log(names[1]);
console.log(info, "\n", names.length);
let newArr = [];
console.log(newArr);
console.log([2, 3, 4, 6].length);
console.log(names[0][0]); // first string(0 = adam) aer o index(a)
console.log(names[2].length);


// Array are Mutable
let fruits = ["mango", "apple", "litchi"];
console.log(fruits[0] = "banana");
console.log(fruits);
console.log(fruits[10] = "pineapple".length);
console.log(fruits);


// *** Array Methods ***
// ** push --> add to end
let cars = ["audi", "bmw", "maruti", "buggati"];
console.log(cars);
console.log(cars.push("toyota"));
console.log(cars);
console.log(cars.push("ferrari"));
console.log(cars);

// ** pop --> delete from end & returns it
console.log(cars.pop());
console.log(cars);

// ** Unshift --> add to start
let cars = ["audi", "bmw", "maruti", "buggati"];
console.log(cars.unshift("toyota"));
console.log(cars);

// ** shift --> delete from start and returns it
let cars = ["audi", "bmw", "maruti", "buggati"];
console.log(cars.unshift("toyota"));
console.log(cars);
console.log(cars.shift());
console.log(cars);

let followers = ["a", "b", "c"];
let blocked = followers.shift();
console.log(followers);
console.log(blocked);


// Practice Qs --> For the given start state of an array, change it to final from using mehtods.
let months = ["janauary", "july", "march", "august"];
console.log(months);
console.log(months.shift());
console.log(months);
console.log(months.shift());
console.log(months);
console.log(months.unshift("july"));
console.log(months);
console.log(months.unshift("june"));
console.log(months);


// ** indexOf --> returns index of something
let primary = ["red", "yellow", "blue"];
console.log(primary.indexOf("red"));
console.log(primary.indexOf("green"));

// ** includes --> search for a value
let primary = ["red", "yellow", "blue"]
console.log(primary.includes("red"));
console.log(primary.includes("green"));

// ** concat --> merge 2 array 
let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "violet"];
console.log(primary.concat(secondary));
console.log(secondary.concat(primary));

// ** reverse --> reverse an array
let cars = ["audi", "bmw", "xuv", "maruti"];
console.log(cars);
console.log(cars.reverse());

// ** slice --> copies a portion of an array
let colors = ["red", "yellow", "blue", "pink", "orange", "pink", "white"];
console.log(colors.slice());
console.log(colors.slice(colors.length-1));
console.log(colors.slice(2));
console.log(colors.slice(2, 3));
console.log(colors.slice(-2));

// ** splice --> removes/ replce/ add elements in place----> splice(start, deleteCount, item0...itemN)
let colors = ["red", "yellow", "blue", "pink", "orange", "pink", "white"];
console.log(colors.splice(2));
console.log(colors.splice(0, 1));
console.log(colors.splice(0, 1, "black", "grey"));
console.log(colors);
let colors = ["red", "yellow", "blue", "green"];
console.log(colors.splice(0, 1, "black", "grey"));
console.log(colors);

// ** sort --> sorts an array
let colors = ["red", "yellow", "blue", "pink", "orange", "pink", "white"];
console.log(colors.sort());
let chars = ['b', 'a', 'f', 'i', 'n', 'm', 'o'];
console.log(chars.sort());

// ** Practice Qs --> For the given start state of an array, change it to final form using splice.
let month = ["january", "february", "march", "april"];
console.log(month.splice(0, 2, "july", "june"));
console.log(month);

// ** Practice Qs --> Return the index of the "javascript" from the given array, if it was reversed
let language = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
console.log(language.reverse().indexOf("javascript"));

// ** array references
let arr = ['a', 'b', 'c'];
let arrCopy = arr;
console.log(arr == arrCopy);
console.log(arr === arrCopy);

// ** constant arrays
const g = 10;
console.log(g);
const arr = [1, 2, 3];
console.log(arr);
console.log(arr.push(4));
console.log(arr);
console.log(arr.pop());

// ** Nested array
let nums = [ [1, 2], [3, 4], [4, 5] ];
console.log(nums);
console.log(nums.length);
console.log(nums[0]);
console.log(nums[0][0]);
console.log(nums[1][1]);

// ** Practice Qs --> Create a nested array to show the following tic-tac-toc game state.
let game =[ ['X', null, 'O'], [null, 'X', null], ['O', null, 'X'] ];
console.log(game);
console.log(game[0]);
console.log(game[0][1]);
console.log(game[0][1] = 'O');
console.log(game);