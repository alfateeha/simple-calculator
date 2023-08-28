function add (num1, num2){
    return num1 + num2;
}

function substract (num1, num2){
    return num1-num2;
}

function multiply (num1, num2){
    return num1 * num2;
}

function divide (num1, num2){
    return num1 / num2;
}

function calculator (num1, operator, num2){
    return operator(num1, num2);
}

let onOff = document.querySelector(".on-off");
let ac = document.querySelector(".AC");
let no0 = document.querySelector(".button0");
let no1 = document.querySelector(".button1");
let no2 = document.querySelector(".button2");
let no3 = document.querySelector(".button3");
let no4 = document.querySelector(".button4");
let no5 = document.querySelector(".button5");
let no6 = document.querySelector(".button6");
let no7 = document.querySelector(".button7");
let no8 = document.querySelector(".button8");
let no9 = document.querySelector(".button9");
let equal = document.querySelector(".button-equal-sign");
let dot = document.querySelector(".button-decimal");
let division = document.querySelector(".division");
let multiplication = document.querySelector(".multiplication");
let addition = document.querySelector(".addition");
let substraction = document.querySelector(".substraction");


let display = document.querySelector(".display");

var num1 = "";
var num2 = "";
var num = "";



no0.addEventListener("click", function(){
    display.innerHTML += "0";
})
no1.addEventListener("click", function(){
    display.innerHTML += "1";
})
no2.addEventListener("click", function(){
    display.innerHTML += "2";
})
no3.addEventListener("click", function(){
    display.innerHTML += "3";
})
no4.addEventListener("click", function(){
    display.innerHTML += "4";
})
no5.addEventListener("click", function(){
    display.innerHTML += "5";
})
no6.addEventListener("click", function(){
    display.innerHTML += "6";
})
no7.addEventListener("click", function(){
    display.innerHTML += "7";
})
no8.addEventListener("click", function(){
    display.innerHTML += "8";
})
no9.addEventListener("click", function(){
    display.innerHTML += "9";
})
dot.addEventListener("click", function(){
    display.innerHTML += ".";
})

function numSetter1(){
    if(clicked === true){
        num1 = Number(display.innerHTML);
        display.innerHTML = "";
    }
}

function numSetter2(){
    if(clicked === true){
        num2 = Number(display.innerHTML);
        display.innerHTML = "";
    }
}

division.addEventListener("click", function(){
    clicked = true;
    numSetter1();
    clicked = false;
    display.innerHTML = "";
    operator = divide;
})

multiplication.addEventListener("click", function(){
    clicked = true;
    numSetter1();
    clicked = false;
    display.innerHTML = "";
    operator = multiply;
})

addition.addEventListener("click", function(){
    clicked = true;
    numSetter1();
    clicked = false;
    display.innerHTML = "";
    operator = add;
})

substraction.addEventListener("click", function(){
    clicked = true;
    numSetter1();
    clicked = false;
    display.innerHTML = "";
    operator = substract;
})

equal.addEventListener("click", function(){
    clicked = true;
    numSetter2();
    display.innerHTML = calculator(num1, operator, num2);
})

ac.addEventListener("click", function(){
    display.innerHTML = "";
})

onOff.addEventListener("click", function(){
    display.innerHTML = "";
})








