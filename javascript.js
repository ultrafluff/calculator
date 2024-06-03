let num1;
let num2;
let operator;


function add(num1, num2) {
    num1 + num2
}

function subtract(num1, num2) {
    num1 - num2
}

function muptipy(num1, num2) {
    num1 * num2
}

function divide(num1, num2) {
    num1 / num2 
}


const textbox = document.querySelector(".textbox")
const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const button3 = document.querySelector(".button3")
const button4 = document.querySelector(".button4")
const button5 = document.querySelector(".button5")
const button6 = document.querySelector(".button6")
const button7 = document.querySelector(".button7")
const button8 = document.querySelector(".button8")
const button9 = document.querySelector(".button9")
    let numholder = ""
    let num = ""
function buttonclick(num) {
    textbox.textContent = numholder + num
    numholder = numholder + num
}

button1.addEventListener("click", () => buttonclick("1"))
button2.addEventListener("click", () => buttonclick("2"))
button3.addEventListener("click", () => buttonclick("3"))
button4.addEventListener("click", () => buttonclick("4"))
button5.addEventListener("click", () => buttonclick("5"))
button6.addEventListener("click", () => buttonclick("6"))
button7.addEventListener("click", () => buttonclick("7"))
button8.addEventListener("click", () => buttonclick("8"))
button9.addEventListener("click", () => buttonclick("9"))

const operationM = document.querySelector(".operatorX")
const operationD = document.querySelector(".operatorD")
const operationA = document.querySelector(".operatorA")
const operationS = document.querySelector(".operatorS")

function operatorclick(operation) {
    textbox.textContent = 0
    textbox.textContent = operation
}
operationA.addEventListener("click", () => operatorclick("+") )
operationS.addEventListener("click", () => operatorclick("-") )
operationM.addEventListener("click", () => operatorclick("x") )
operationD.addEventListener("click", () => operatorclick("÷") )



