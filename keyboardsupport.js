
window.addEventListener ( "keydown", (e) => {
    const keyCode = e.keyCode;
    checkKey(keyCode)
    });

function checkKey (keyCode)  {
    const key = document.querySelector(`button[data-key="${keyCode}"]`);
    key.classList.add("button-press");
    if(keyCode >= 48 && keyCode <= 57) {
    inputNumber(key)
    displayOn()
    }
    else if (keyCode == 68 || keyCode == 88 || keyCode == 83 || keyCode == 65) {
    inputOperator(key)
    displayOn()
    }
    else if (keyCode == 67 || keyCode == 190) {
        dot()
        displayOn()
        }
    else if (keyCode == 8) {
        removeLastEntry()
        }
    else if (keyCode == 13) {
        calculate()
        displayOn()
        }
    else if (keyCode == 32) {
        clear()
    }

}

function displayOn () {
        display.classList.add("display-on");
    }

buttons.forEach( key => key.addEventListener('transitionend', removeTransition));


function removeTransition (e) {
    e.target.classList.remove("button-press");
}
