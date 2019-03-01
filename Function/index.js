//create function without parameter
function sayHello(){
    console.log("Hello, World!");
}

//create function with parameter
function sayHello2(name){
    console.log("Hello, " + name);
}

//call Function
sayHello();
sayHello2("blah");

//DOM functions
//select tag by id attribute
const title = document.getElementById("title");
title.innerHTML = "Changed!";