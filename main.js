const buttons = document.querySelectorAll("button");
const numbersBtn = document.querySelectorAll(".numbers");
const operatorsBtn = document.querySelectorAll(".operators");
const clearBtn = document.querySelector("#clear");
const calculateBtn = document.querySelector("#calculate");
const display = document.querySelector("#display");
const toppara = document.createElement("p");
toppara.className = "toppara";
const botpara = document.createElement("p");
botpara.className = "botpara";
display.appendChild(toppara);
display.appendChild(botpara);


let number = "0";
let numberOperation = [];
numbersBtn.forEach( (numberBtn) => {
    numberBtn.addEventListener("click", (e) => {
        if (result==true) clear();
        switch(numberBtn.id) {
            case "zero": 
                        number += "0";
                        toppara.textContent += "0";
                        botpara.textContent += "0";
                        return;
            case "one": 
                        number += "1";
                        toppara.textContent += "1";
                        botpara.textContent += "1";
                        return;
            case "two": 
                        number += "2";
                        toppara.textContent += "2";
                        botpara.textContent += "2";
                        return;
            case "three": 
                        number += "3";
                        toppara.textContent += "3";
                        botpara.textContent += "3";
                        return;
            case "four": 
                        number += "4";
                        toppara.textContent += "4";
                        botpara.textContent += "4";
                        return;
            case "five": 
                        number += "5";
                        toppara.textContent += "5";
                        botpara.textContent += "5";
                        return;
            case "six": 
                        number += "6";
                        toppara.textContent += "6";
                        botpara.textContent += "6";
                        return;
            case "seven":
                        number += "7";
                        toppara.textContent += "7";
                        botpara.textContent += "7";
                        return;
            case "eight": 
                        number += "8";
                        toppara.textContent += "8";
                        botpara.textContent += "8";
                        return;
            case "nine":
                        number += "9";
                        toppara.textContent += "9";
                        botpara.textContent += "9";
                        return;
        }
    });
}); 

operatorsBtn.forEach( (operator) => {
    operator.addEventListener("click", (e) => {
        if (result == true) {
            clear();
            number += `${resultNumber}`;
            toppara.textContent += `${resultNumber}`;
        }
        switch (operator.id) {
            case "add":  
                        number += " add ";
                        toppara.textContent += " + ";
                        botpara.textContent = "";
                        return;
            case "subtract": 
                        number += " subtract ";
                        toppara.textContent += " - ";
                        botpara.textContent = "";
                        return;
            case "multiply": 
                        number += " multiply ";
                        toppara.textContent += " x ";
                        botpara.textContent = "";
                        return;
            case "divide": 
                        number += " divide ";
                        toppara.textContent += " / ";
                        botpara.textContent = "";
                        return;
        }
    });
});

clearBtn.addEventListener("click", () => {
    clear()
});

function clear () {
    result = false;
    number = "0";
    toppara.textContent = "";
    botpara.textContent = "";
}


let result = false;
let resultNumber;
calculateBtn.addEventListener("click", () => {
    let calculate = number.split(" ");
    number = "0";
    if (calculate[calculate.length-1]=="") {
        return botpara.textContent = `Wrong format`;
   }
    for (let i=0; i<=calculate.length-1; i++) {
       if ((calculate[i]=="multiply") || (calculate[i]=="divide")) {
           if ((calculate[i]=="divide") && (calculate[i+1]=="0")) {
                return botpara.textContent = `Cant divide with 0`;
           }
            calculate[i-1] = operate (calculate[i], calculate[i-1], calculate[i+1]);
            calculate.splice(i, 2);
            i=0;
       }
       continue;      
    }

    for (let i=0; i<=calculate.length; i++) {
        if ((calculate[i]=="add") || (calculate[i]=="subtract")) {
             calculate[i-1] = operate (calculate[i], calculate[i-1], calculate[i+1]);
             calculate.splice(i, 2);
             i=0;
             continue;
        }
    }
    botpara.textContent = `${calculate[0]}`;
    resultNumber = `${calculate[0]}`;
    result = true;
});

let add = (x, y) => Number(x) + Number(y);
let subtract = (x, y) => Number(x) - Number(y);
let multiply = (x, y) => Number(x) * Number(y);
let divide = (x, y) => Number(x) / Number(y);

function operate(operator, numberOne, numberTwo) {
    switch(operator) {
        case "add": return add(numberOne, numberTwo);
        case "subtract": return subtract(numberOne, numberTwo);
        case "multiply": return multiply(numberOne, numberTwo);
        case "divide": return divide(numberOne, numberTwo);
    }
} 
