
// task 01

function checkEvenOrOdd() {
    let number = Number(prompt("Enter a number: "));
    if (number % 2 === 0) {
        console.log(number + " is even");
    } else {
        console.log(number + " is odd");
    }
}

// task 02

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// task 04

function circleProperties() {
    let radius = Number(prompt("Enter the radius: "));
    let area = Math.PI * radius * radius;
    let circumference = 2 * Math.PI * radius;
    console.log(`The area is ${area} and the circumference is ${circumference}`);
}

// task 05

function checkFifty() {
    let firstNumber = Number(prompt("Enter the first number: "));
    let secondNumber = Number(prompt("Enter the second number: "));
    if (firstNumber == 50 || secondNumber == 50 || (firstNumber + secondNumber == 50)) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// task 06

function checkPositiveNegative() {
    let firstInteger = Number(prompt("Enter the first number: "));
    let secondInteger = Number(prompt("Enter the second number: "));
    if ((firstInteger > 0 && secondInteger < 0) || (firstInteger < 0 && secondInteger > 0)) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// task 07

function checkMultiple() {
    let multipleNumber = Number(prompt("Enter a number: "));
    if (multipleNumber % 5 === 0 || multipleNumber % 8 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// task 08

function largestOfThree() {
    let firstInt = Number(prompt("Enter the first number: "));
    let secondInt = Number(prompt("Enter the second number: "));
    let thirdInt = Number(prompt("Enter the third number: "));
    console.log(Math.max(firstInt, secondInt, thirdInt));
}

// task 09

function sumOfNumbers() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    console.log("Sum: " + sum);
}

// task 10

function rightAngleTriangle() {
    let numRows = Number(prompt("Enter the number of rows: "));
    for (let i = 1; i <= numRows; i++) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += '*';
        }
        console.log(row);
    }
}

rightAngleTriangle()

// task 11

function checkPositiveOrNegative() {
    let checkNumber = Number(prompt("Enter a number: "));
    if (checkNumber > 0) {
        console.log(`${checkNumber} is positive`);
    } else if (checkNumber < 0) {
        console.log(`${checkNumber} is negative`);
    } else {
        console.log(`${checkNumber} is zero`);
    }
}

// task 13

function sumOfTwoNumbers() {
    let firstNum = Number(prompt("Enter the first number: "));
    let secondNum = Number(prompt("Enter the second number: "));
    console.log(firstNum + secondNum);
}

// task 14

function factorial() {
    let factorialNumber = Number(prompt("Enter a number: "));
    if (factorialNumber < 0) {
        return console.log("Factorial is not defined for negative numbers.");
    }

    let result = 1;

    for (let i = 1; i <= factorialNumber; i++) {
        result *= i;
    }

    console.log(`The Factorial of ${factorialNumber} is: ${result}`);
}

// task 15

function calculator() {
    let firstOperand = Number(prompt("Enter the first number: "));
    let secondOperand = Number(prompt("Enter the second number: "));
    let operator = Number(prompt("Enter the operator: "));
    switch (operator) {
        case '+':
            console.log(firstOperand + secondOperand);
            break;
        case '-':
            console.log(firstOperand - secondOperand);
            break;
        case '*':
            console.log(firstOperand * secondOperand);
            break;
        case '/':
            console.log(firstOperand / secondOperand);
            break;
        default:
            console.log('Invalid operator!');
    }
}

