// console.log("before my if statement");
let age = 17;
if (age >= 18){
    console.log("you can vote");
    console.log("you can drive");
    let a = 5;
    console.log(5 * a)
}

if (age < 18){
    console.log("you can not vote")
}
console.log("after my if statement");

let firstName = "Hridoy";
if (firstName == "Hridoy") {
    console.log(`Welcome ${firstName}`);
}

// Pracice Question
let color = "red";
// let yellow = "slow down";
// let green = "go";
if (color == "red"){
   console.log("Stop!");
}
if (color == "yellow"){
   console.log("Slow Down");
}
if (color == "green"){
    console.log("Go");
}



// **  else if  **
let age = 17;
if( age >= 18){
    console.log("you can vote")
}
else if(age >= 18){
    console.log("you cannot vote2")
}
else if(age < 18){
    console.log("you can not vote")
}


let marks = 89;
if(marks >= 80){
    console.log("A+")
}
else if(marks >= 60){
    console.log("A")
}
else if(marks >= 33){
    console.log("B")
}
else if(marks < 33){
    console.log("F")
}


let month = "january";
if (month  = "january"){
    console.log("winter is here");
}
else if(month = "april"){
    console.log("summer is here");
}



let age = 17;
if(age >= 18){
    console.log("you can vote");
}
else{
    console.log("you can not vote")
}



let color = "green";
if(color == "red"){
    console.log("stop");
}else if(color == "yellow"){
    console.log("slow down");
}else if(color == "green"){
    console.log("go");
}else{
    console.log("traffic light is broken");
}



// ** Practice Qs ***
let size = "M";
if(size == "XL"){
    console.log("Price is Rs.250");
}else if(size == "L"){
    console.log("Price is Rs.150");
}else if(size == "M"){
    console.log("Price is Rs.100");
}else if(size == "S"){
    console.log("Price is Rs.50");
}



// ** Nested if-else ***
let marks = 90;
if(marks >= 30){
    console.log("Pass");
    if(marks >= 80){
        console.log("Grade : O");
    }else{
        console.log("Grade : A");
    }
}else{
    console.log("Better luck next time");
}



//  ** Logical Operator **
let marks = 90;
if(marks >= 33 && marks >= 80){
    console.log("pass");
    console.log("A+");
}

let marks = 90;
if(marks >= 33 || marks >= 80){
    console.log("pass");
    console.log("A+");
}


let marks = 50;
if(marks >= 33 && marks >= 80){
    console.log("pass");
    console.log("A+");
}

// Practice Question 1
let str = "app";
if(str[0] ==='a' && str.length > 3){
   console.log("good string");
}else{
    console.log("not a good string");
}

// Practice Question 2
let num = 13;
if((num % 3 === 0) &&((num+1 === 15) ||(num-1 === 11))){
    console.log("safe");
}else{
    console.log("umsafe")
}


if(""){
    console.log("It has true value");
}else{
    console.log("It has false value");
}

if(" "){
    console.log("It has true value");
}else{
    console.log("It has false value");
}


let string = ""
if(string){
    console.log("string is not empty");
}else{
    console.log("string is empty");
}

let num = 1;
if(num){
    console.log("num is not equal to zero");
}else{
    console.log("num is equal to 0");
}



// ** Switch Statement **
let color = "red";
switch(color){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("go");  
        break;  
    default:
        console.log("Broken Light");
}   


// practice question
let day = 7;
switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Monday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    case 8:
        console.log("Sunday");
        break;
    default:
        console.log("Wrong day")
}


// ** Alert & Promot **
alert("something is wrong");
console.log("this is a simple log");
console.error("this is an error msg");
console.warn("this is a warning msg");

let firstName = prompt("enter your name : ");
console.log(firstName);

let firstName = prompt("enter first name");
let lastName = prompt("enter last name");
// console.log("Welcome", firstName, lastName, "!");
let msg = "Welcome " + firstName +" " + lastName + " " + "!";
alert(msg);