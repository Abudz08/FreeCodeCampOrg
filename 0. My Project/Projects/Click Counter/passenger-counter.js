// | WELCOME GREETING

let welcomeEl = document.getElementById("welcome-el")
let name = "Abudz"
let greeting = "Yōkoso "

welcomeEl.innerText = greeting + name
welcomeEl.innerText += "!"



// | CLICK COUNTER

// initialize count as 0
// listen for clicks on the increment button
// increment count variable when button is clicked
// change the count-el in the HTML to reflect the new count

// DOM - Document Object Model - how you use JS in you HTML

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    console.log(count)
}


let saveEl = document.getElementById("save-el")
let clickEl = document.getElementById("click-el")
let round = 1
let click = count



function save() {
    let lap = `Round ${round}: ${count}                          `
    click += count
    let totalClick = `Total Clicks: ${click}`

    saveEl.textContent = lap
    clickEl.textContent = totalClick

    
    countEl.textContent = 0
    count = 0
    round += 1
}

function reset() {
    saveEl.textContent = ""
    clickEl.textContent = ""

    countEl.textContent = 0
    count = 0
    round = 1
    click = 0
}



// | TIMER












