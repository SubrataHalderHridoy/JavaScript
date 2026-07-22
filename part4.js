// ********* For Loop ***********
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.log("7");

// ** forward loop
for (let i = 1; i<=7; i++){
    console.log(i);
}


// ** backward loop
for (let i = 7; i>=1; i--){
    console.log(i);
}

for (let i = 7; i>=1; i = i-2){
    console.log(i);
}


// ** Qs: Print all odd numbers (1 to 15)
for (let i = 1; i<=15; i = i+2){
    console.log(i);
}

for (let i = 15; i>=1; i = i-2){
    console.log(i);
}


// ** Qs: print all even number (2 to 10)
for (let i = 2; i<=10; i = i+2){
    console.log(i);
}

for (let i = 10; i>=2; i = i-2){
    console.log(i);
}


// **** infinite loop
for (let i = 1; i>=0 ; i++){
    console.log(i);
}

for (let i = 1; i<=5 ; i--){
    console.log(i);
}

for (let i = 1; ; i++){
    console.log(i);
}


// ** Qs: print the multiplication table for 5
for (let i = 5; i<=100; i=i+5){
    console.log(i);
}

let n = prompt("write your number");
n = parseInt(n);
for (let i = n; i<=n*10; i=i+n){
    console.log(i);
}


// **** Nested for loop
for(let i = 1; i<=3; i++){
    console.log(`outer loop ${i}`)
    for(let j = 1; j<=3; j++){
        console.log(j);
    }
}



// ************* while loop *********
let i = 1;
while(i<=5){
    console.log(i);
    i++;
}

let i = 5;
while(i>=1){
    console.log(i);
    i--;
}

let i = 0;
while(i<=12){
    console.log(i);
    i++;
}

let i = 0;
while(i<=20){
    console.log(i);
    i = i+2;
}

let i = 1;
while(i<=20){
    console.log(i);
    i = i-2;
}

// ** Favorite Movie
const favMovie = "Avatar";
guess = prompt("guess my favourite movie");
while((guess != favMovie) && (guess !="quit")){
    guess = prompt("wrong guess. please try again");
}
if(guess == favMovie){
    console.log("congrats!!");
}else{
    console.log("you quit");
}


// *** break keyword **
let i = 1;
while(i<=5){
    if(i == 3){
        break;
    }
    console.log(i);
    i++;
}

const favMovie = "Avatar";
guess = prompt("guess my favourite movie");
while(guess != favMovie){
    if(guess == "quit"){
        console.log("you quit");
        break;
    }
    guess = prompt("wrong guess. please try again");
}
if(guess == favMovie){
    console.log("congrats!!");
}


// *** Loops with Arrays ***
let fruits = ["mango", "apple", "banana", "litchi", "orange"];
for (let i = 0; i<fruits.length; i++){
    console.log(i, fruits[i]);
}

let fruits = ["mango", "apple", "banana", "litchi", "orange"];
fruits.push("pineapple");
for (let i = 0; i<fruits.length; i++){
    console.log(i, fruits[i]);
}

// reverse
let fruits = ["mango", "apple", "banana", "litchi", "orange"];
fruits.push("pineapple");
for (let i=fruits.length-1; i>=0; i--){
    console.log(i, fruits[i]);
}


// *** Nested Loops with Nested Arrays ***
let heroes = [["spiderman", "ironman", "thor"], ["superman", "wonder woman", "flash"]];
for (let i = 0; i<heroes.length; i++){
    console.log(`List #${i}`);
    for (let j = 0; j<heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}

let students = [["aman", 95], ["hridoy", 99], ["karan", 100]];
for (let i = 0; i<students.length; i++){
    console.log(`info of student #${i+1}`);
    for (let j=0; j<students[i].length; j++){
        console.log(students[i][j]);
    }
}


// *** for of loop **
let fruits = ["mango", "apple", "banana", "orange", "litchi"];
for(fruit of fruits){
    console.log(fruit);
}

for (char of "apnacollege"){
    console.log(char);
}


// *** Nested for of loops **
let heroes = [["spiderman", "ironman", "thor"], ["superman", "wonder woman", "flash"]];
for (list of heroes){
    for(hero of list){
        console.log(hero);
    }
}