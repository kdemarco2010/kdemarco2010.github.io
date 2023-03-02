let result = document.getElementById("result");

function displayTwoPlusTwo() {
    let number1 = 2;
    let number2 = 2;
    result.innerHTML = number1 + number2;
}

function displayTwoDivideTwo() {
    let number1 = 2;
    let number2 = 2;
    result.innerHTML = number1 / number2;
}

function displayNineTimesNine() {
    let number1 = 9;
    let number2 = 9;
    result.innerHTML = 9 * 9;
}

function displayTenMinusFive() {
    let number1 = 10;
    let number2 = 5;
    result.innerHTML = 10 - 5;
}

function displayMultiply() {
    let input1= document.getElementById("input1");
    let input2= document.getElementById("input2");
    result.innerHTML = input1.value * input2.value;
}

function displayDivide() {
    let input1= document.getElementById("input1");
    let input2= document.getElementById("input2");
    result.innerHTML = input1.value / input2.value;
}

function displayAddition() {
    let input1= document.getElementById("input1");
    let input2= document.getElementById("input2");
    result.innerHTML = 
        parseInt(input1.value) + parseInt(input2.value);
}

function displaySubtract() {
    let input1= document.getElementById("input1");
    let input2= document.getElementById("input2");
    result.innerHTML = input1.value - input2.value;
}