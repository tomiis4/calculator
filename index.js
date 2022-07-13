let firstNumber = 0
let finalFirst;
let operator;

let firstR = document.getElementById("first-r") 
let secondR = document.getElementById("second-r") 
let operatorR = document.getElementById("operator-r") 
let resultR = document.getElementById("result-r") 

function getNumbers(buttonValue) {
    if(firstNumber == 0) {
        firstNumber = buttonValue
    } else {
        firstNumber = firstNumber + buttonValue
    }
    if(finalFirst == undefined) {
        firstR.innerHTML = firstNumber
    } else {
        firstR.innerHTML = finalFirst
        secondR.innerHTML = firstNumber
    }
}

function getOperator(thisOperator) {
    finalFirst = firstNumber
    firstNumber = 0
    operator = thisOperator
    
    operatorR.innerHTML = operator  
    firstR.innerHTML = finalFirst
}

function getResult() {
    let result = finalFirst + operator + firstNumber
    console.log(result);
    result = eval(result) 
    resultR.innerHTML = "= "+ result.toFixed(2)
}