const buttons = document.querySelectorAll("button");
const numbersBtn = document.querySelectorAll(".numbers");
const operatorsBtn = document.querySelectorAll(".operators");
const clearBtn = document.querySelector("#clear");
const calculateBtn = document.querySelector("#calculate");
const display = document.querySelector("#display");
const decimalBtn = document.querySelector("#decimal");
const clearEntryBtn = document.querySelector("#remove");
const calculatorGrid = document.querySelector(".calculator-grid");
const toppara = document.createElement("p");
toppara.className = "toppara";
const botpara = document.createElement("p");
botpara.className = "botpara";
display.appendChild(toppara);
display.appendChild(botpara);


let number = "";
numbersBtn.forEach( (numberBtn) => {
    numberBtn.addEventListener("click", (e) => {
        inputNumber(numberBtn)
    });
}); 


function inputNumber (numberBtn) {
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
}

operatorsBtn.forEach( (operator) => {
    operator.addEventListener("click", (e) => {
       inputOperator(operator)
    });
});

function inputOperator (operator) {
    if (result == true) {
        clear();
        number += `${resultNumber}`;
        toppara.textContent += `${resultNumber}`;
    }
    dotUsed = false;
    if ((number.charAt(number.length-1) == " ")) {
        return;
    }
    switch (operator.id) {
        case "add":  
                    number += " + ";
                    toppara.textContent += " + ";
                    botpara.textContent = "";
                    return;
        case "subtract": 
                    number += " - ";
                    toppara.textContent += " - ";
                    botpara.textContent = "";
                    return;
        case "multiply": 
                    number += " * ";
                    toppara.textContent += " x ";
                    botpara.textContent = "";
                    return;
        case "divide": 
                    number += " / ";
                    toppara.textContent += " / ";
                    botpara.textContent = "";
                    return;
    }
} 

clearBtn.addEventListener("click", () => {
    clear()
});

function clear () {
    result = false;
    dotUsed = false;
    number = "";
    toppara.textContent = "";
    botpara.textContent = "";
}

let dotUsed = false;
decimalBtn.addEventListener("click", () => {
  dot()
});

function dot () {
    if (dotUsed == false) {
        number += ".";
        toppara.textContent += ".";
        botpara.textContent += ".";
        }
        dotUsed = true;
}

clearEntryBtn.addEventListener("click", () => {
    removeLastEntry()
});

function removeLastEntry () {
    if (result == true) clear();
    if ((number.charAt(number.length-1) == ".")) dotUsed=false;
    if ((number.charAt(number.length-1) == " ")) {
        number = number.slice(0, number.length-3);
        toppara.textContent = toppara.textContent.substring(0, toppara.textContent.length-3);
    }
    else {
    number = number.slice(0, number.length-1);
    toppara.textContent = toppara.textContent.substring(0, toppara.textContent.length-1);
    botpara.textContent = botpara.textContent.substring(0, botpara.textContent.length-1);
    }

}


let result = false;
let resultNumber;
calculateBtn.addEventListener("click", () => {
    calculate()
});

function calculate () {
    let calculate = number.split(" ");
    number = "";
    result = true;
    if ((calculate[calculate.length-1]=="") || (calculate.length < 3)) {
        return botpara.textContent = `Wrong format`;
    }
    for (let i=0; i<=calculate.length-1; i++) {
       if ((calculate[i]=="*") || (calculate[i]=="/")) {
           if ((calculate[i]=="/") && (calculate[i+1]=="0")) {
                return botpara.textContent = `Cant divide with 0`;
           }
            calculate[i-1] = operate (calculate[i], calculate[i-1], calculate[i+1]);
            calculate.splice(i, 2);
            i=0;
       }
       continue;      
    }

    for (let i=0; i<=calculate.length; i++) {
        if ((calculate[i]=="+") || (calculate[i]=="-")) {
             calculate[i-1] = operate (calculate[i], calculate[i-1], calculate[i+1]);
             calculate.splice(i, 2);
             i=0;
             continue;
        }
    }
    let rounded = +calculate[0].toFixed(3);
    if (rounded > 1000000000) {
        rounded=rounded.toExponential(10);
    }
    botpara.textContent = `${rounded}`;
    resultNumber = `${rounded}`;

}

let add = (x, y) => Number(x) + Number(y);
let subtract = (x, y) => Number(x) - Number(y);
let multiply = (x, y) => Number(x) * Number(y);
let divide = (x, y) => Number(x) / Number(y);

function operate(operator, numberOne, numberTwo) {
    switch(operator) {
        case "+": return add(numberOne, numberTwo);
        case "-": return subtract(numberOne, numberTwo);
        case "*": return multiply(numberOne, numberTwo);
        case "/": return divide(numberOne, numberTwo);
    }
} 

buttons.forEach( (button) =>  {
button.addEventListener("click", (e) => {
    display.classList.add("display-on");
});
});

calculatorGrid.addEventListener("mouseenter", () => {
    calculatorGrid.classList.add("grid-on-light");
});
calculatorGrid.addEventListener("mouseleave", () => {
    calculatorGrid.classList.remove("grid-on-light");
});

buttons.forEach( (button) => {
    button.addEventListener("mouseenter", (e) => {
        button.classList.add("button-hover");
    });
}); 
buttons.forEach( (button) => {
    button.addEventListener("mouseleave", (e) => {
        button.classList.remove("button-hover");
    });
});
