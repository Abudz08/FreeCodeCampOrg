let answer = 0
let answerEl = document.getElementById("answer-el")

function add() {
    let num1 = parseInt(document.getElementById("num1-el").value)
    let num2 = parseInt(document.getElementById("num2-el").value)

    answer = num1 + num2
    answerEl.textContent = `The sum is ${answer}`
}

function subtract() {
    let num1 = parseInt(document.getElementById("num1-el").value)
    let num2 = parseInt(document.getElementById("num2-el").value)

    answer = num1 - num2
    answerEl.textContent = `The difference is ${answer}`
}

function multiply() {
    let num1 = parseInt(document.getElementById("num1-el").value)
    let num2 = parseInt(document.getElementById("num2-el").value)

    answer = num1 * num2
    answerEl.textContent = `The product is ${answer}`
}

function divide() {
    let num1 = parseInt(document.getElementById("num1-el").value)
    let num2 = parseInt(document.getElementById("num2-el").value)

    answer = num1 / num2
    answerEl.textContent = `The quotient is ${answer}`
}