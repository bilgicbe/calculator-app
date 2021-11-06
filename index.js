const body = document.querySelector("body")
const top1 = document.querySelector(".top")
const toggle = document.querySelector(".toggle")
const keypad = document.querySelector(".buttons")
const delReset = document.querySelectorAll("button.del, button.reset")
const eq = document.querySelector("button.eq")
const buttons = document.querySelectorAll("button.number")
const screen = document.querySelector(".screen")

function theme1() {
    document.querySelector(".first").classList.add("checked")
    document.querySelector(".second").classList.remove("checked")
    document.querySelector(".third").classList.remove("checked")
    body.style.backgroundColor = "hsl(222, 26%, 31%)"
    top1.style.color = "white"
    toggle.style.backgroundColor = "hsl(223, 31%, 20%)"
    keypad.style.backgroundColor = "hsl(223, 31%, 20%)"
    eq.style.backgroundColor = "hsl(6, 63%, 50%)"
    eq.style.boxShadow = "0px 5px hsl(6, 70%, 34%)"
    screen.style.backgroundColor = "hsl(224, 36%, 15%)"
    screen.style.color = "white"
    delReset.forEach((button) => {
        button.style.backgroundColor = "hsl(225, 21%, 49%)"
        button.style.boxShadow = "0px 5px hsl(224, 28%, 35%)"
    })
    buttons.forEach((button) => {
        button.style.backgroundColor = "hsl(30, 25%, 89%)"
        button.style.color = "hsl(221, 14%, 31%)"
        button.style.boxShadow = "0px 5px hsl(28, 16%, 65%)"
    })
}

function theme2() {
    body.style.backgroundColor = "hsl(0, 0%, 90%)"
    document.querySelector(".first").classList.remove("checked")
    document.querySelector(".second").classList.add("checked")
    document.querySelector(".third").classList.remove("checked")
    top1.style.color = "hsl(60, 10%, 19%)"
    toggle.style.backgroundColor = "hsl(0, 5%, 81%)"
    keypad.style.backgroundColor = "hsl(0, 5%, 81%)"
    eq.style.backgroundColor = "hsl(25, 98%, 40%)"
    eq.style.boxShadow = "0px 5px hsl(25, 99%, 27%)"
    screen.style.backgroundColor = "hsl(0, 0%, 93%)"
    screen.style.color = "hsl(60, 10%, 19%)"
    delReset.forEach((button) => {
        button.style.backgroundColor = "hsl(185, 42%, 37%)"
        button.style.boxShadow = "0px 5px hsl(185, 58%, 25%)"
    })
    buttons.forEach((button) => {
        button.style.backgroundColor = "hsl(45, 7%, 89%)"
        button.style.color = "hsl(60, 10%, 19%)"
        button.style.boxShadow = "0px 5px hsl(35, 11%, 61%)"
    })
}

function theme3() {
    body.style.backgroundColor = "hsl(268, 75%, 9%)"
    document.querySelector(".first").classList.remove("checked")
    document.querySelector(".second").classList.remove("checked")
    document.querySelector(".third").classList.add("checked")
    top1.style.color = "hsl(52, 100%, 62%)"
    toggle.style.backgroundColor = "hsl(268, 71%, 12%)"
    keypad.style.backgroundColor = "hsl(268, 71%, 12%)"
    eq.style.backgroundColor = "hsl(176, 100%, 44%)"
    eq.style.boxShadow = "0px 5px hsl(177, 92%, 70%)"
    screen.style.backgroundColor = "hsl(268, 71%, 12%)"
    screen.style.color = "hsl(52, 100%, 62%)"
    delReset.forEach((button) => {
        button.style.backgroundColor = "hsl(281, 89%, 26%)"
        button.style.boxShadow = "0px 5px hsl(285, 91%, 52%)"
    })
    buttons.forEach((button) => {
        button.style.backgroundColor = "hsl(268, 47%, 21%)"
        button.style.color = "hsl(52, 100%, 62%)"
        button.style.boxShadow = "0px 5px hsl(290, 70%, 36%)"
    })
}

const screenText = document.querySelector(".result")
const conditions = ["+","-","x","/"]

function calc(value) {
    if (screenText.innerText == 0) {
        screenText.innerHTML = String(value)
    } else {
        screenText.innerHTML = screenText.innerText + String(value)
    }
}


const yarrak = 2.3-2.1
console.log(parseFloat(yarrak.toFixed(6)).toPrecision())

function comma() {
    if (screenText.innerText.split(/[\+\-x/]/)[screenText.innerText.split(/[\+\-x/]/).length-1].includes(",")){

    } else {
        screenText.innerHTML = screenText.innerText + ","
    }
}

function del() {
    if (screenText.innerText.length == 1) {
        reset()
    } else {
        screenText.innerHTML = screenText.innerText.slice(0,-1) 
    }
}

function reset() {
    screenText.innerHTML = "0"
}

function operator(value) {
    if (conditions.some(el1 => screenText.innerText.charAt(screenText.innerText.length-1).includes(el1))) {
    } else {
        screenText.innerHTML = screenText.innerHTML = screenText.innerText + value
    }
}

function equal() {
    screenText.innerHTML = 
    parseFloat(eval(screenText.innerText.replaceAll('x','*').replaceAll(',','.')).toFixed(6)).toPrecision().replaceAll('.',',')
}