const numRegex = new RegExp('\\d');
const secondNumRegex = new RegExp('(\\+|\\-|\\*|\\/)\\s(\\d+)');
const numberButtons = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const clearButton = document.querySelector("#clear");
const operatorButtons = document.querySelectorAll(".operator");

let currentValue;
let currentOperator;
let previousOperator;

function addClickEventListenerDisplayOperator(operatorButton)
{
    operatorButton.addEventListener('click', function(event){
        saveNumberAndOperator(operatorButton.textContent)
        appendOperatorToDisplay(operatorButton.textContent);
        evaluate();
    })
}

function addClickEventListenerDisplay(clickObject)
{
    clickObject.addEventListener('click', function(event) {
        appendNumberToDisplay(clickObject.textContent);
        //playOneRound(clickObject.textContent);
    });
}

function addClickEventListenerDisplayClear(clearButton)
{
    clearButton.addEventListener('click', function(event){
        clearDisplay();
    })
}

function addEventListenersToList(list, clickEventListenerFunction)
{
    for (let i = 0; i < list.length; i++)
    {
        clickEventListenerFunction(list[i]);
    }
}

function appendNumberToDisplay(number)
{
    if (display.textContent == "0")
    {
        display.textContent = number;
    }
    else
    {
        display.textContent = display.textContent + number;    
    }
}

function appendOperatorToDisplay(operator)
{
    if (isDisplayLastCharacterANumber())
    {
        display.textContent = `${display.textContent} ${operator} `;
    }
}

function isDisplayLastCharacterANumber()
{
    return numRegex.test(display.textContent.slice(-1));
}

function clearDisplay()
{
    display.textContent = "0";
}

function saveNumberAndOperator(operator)
{
    currentValue = parseInt(display.textContent);
    if (currentOperator === "undefined")
    {   
        currentOperator = operator;
    }
    else 
    {
        previousOperator = currentOperator;
        currentOperator = operator
    }
}

function hasPreviousOperator()
{
    if (previousOperator !== "undefined")
    {
        return true;
    }
    else
    {
        return false;
    }
}

function evaluate()
{
    let evaluatingOperator = (previousOperator !== "undefined") ? previousOperator : currentOperator;
    if (display.textContent.match(secondNumRegex) != null)
    {
        let match = display.textContent.match(secondNumRegex);
        secondNumber = parseInt(match[2]);
        
        currentValue = operate(evaluatingOperator, currentValue, secondNumber);
        
        display.textContent = `${currentValue} ${currentOperator} `;
    }

}

addClickEventListenerDisplayClear(clearButton);

addEventListenersToList(numberButtons, addClickEventListenerDisplay);

addEventListenersToList(operatorButtons, addClickEventListenerDisplayOperator);

function add(num1, num2)
{
    return num1 + num2;
}

function subtract(num1, num2)
{
    return num1 - num2;
}

function divide(num1, num2)
{
    return num1/num2;
}

function multiply(num1, num2)
{
    return num1 * num2;
}

function operate(operator, num1, num2)
{
    if (operator == "+")
    {
        return add(num1, num2);
    }
    else if (operator == "-")
    {
        return subtract(num1, num2);
    }
    else if (operator == "*")
    {
        return multiply(num1, num2);
    }
    else if (operator == "/")
    {
        return divide(num1, num2);
    }
}