let num1;
let num2;
let operator;


function add(number1, number2) {
    return number1 + number2
}

function subtract(number1, number2) {
    return number1 - number2
}

function muptipy(number1, number2) {
    return number1 * number2
}

function divide(number1, number2) {
    return number1 / number2
}
    

const textbox = document.querySelector(".textbox")
const button0 = document.querySelector(".button0")
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

    function buttondisplayed(boolean) {
            button0.disabled = boolean
            button1.disabled = boolean
            button2.disabled = boolean
            button3.disabled = boolean
            button4.disabled = boolean
            button5.disabled = boolean
            button6.disabled = boolean
            button7.disabled = boolean
            button8.disabled = boolean
            button9.disabled = boolean
    }


    function charlimit() {
        if (numholder.length > 9) {
            buttondisplayed(true)
       
    }
}


function buttonclick(num) {
    textbox.textContent = numholder + num
    numholder = numholder + num
    charlimit()
}
button0.addEventListener("click", () => buttonclick("0"))
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
    num1 = numholder
    textbox.textContent = 0
    textbox.textContent = operation
    numholder = ""
    operator = operation
    buttondisplayed(false)
}
    
operationA.addEventListener("click", () => operatorclick("+") )
operationS.addEventListener("click", () => operatorclick("-") )
operationM.addEventListener("click", () => operatorclick("x") )
operationD.addEventListener("click", () => operatorclick("÷") )



const equals = document.querySelector(".equals")

function equal() {
    num2 = numholder
    numholder = ''
    textbox.textContent = ''
    if (operator == "+") {
        num1 = Number(num1)
        num2 = Number(num2)
        console.log(add(num1, num2))
    } else if (operator == "-") {
        num1 = Number(num1)
        num2 = Number(num2)
        console.log(subtract(num1, num2))
    } else if (operator == "x") {
        num1 = Number(num1)
        num2 = Number(num2)
        console.log(muptipy(num1, num2))
    } else if (operator == "/") {
        num1 = Number(num1)
        num2 = Number(num2)
        console.log(divide(num1, num2))
    }
    buttondisplayed(false)
}

equals.addEventListener("click", () => equal())



