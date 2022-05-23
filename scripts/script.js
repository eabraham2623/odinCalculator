const numberButtons = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const clearButton = document.querySelector("#clear");
const operatorButtons = document.querySelectorAll(".operator");


function addClickEventListenerDisplay(clickObject)
{
    clickObject.addEventListener('click', function(event) {
        appendNumberToDisplay(clickObject.innerText);
        //playOneRound(clickObject.innerText);
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
    if (display.innerText == "0")
    {
        display.innerText = number;
    }
    else
    {
        display.innerText = display.innerText + number;    
    }
}

function clearDisplay()
{
    display.innerText = "0";
}

addClickEventListenerDisplayClear(clearButton);

addEventListenersToList(numberButtons, addClickEventListenerDisplay);

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