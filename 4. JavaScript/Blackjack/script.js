let cards = []
let total = 0

let hasBlackJack = false
let isAlive = true

let cardEl = document.getElementById("card-el")
let totalEl = document.getElementById("total-el")
let resultEl = document.getElementById("result-el")

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function startGame() {
    cards[0] = getRandomNumber(2, 11)
    cards[1] = getRandomNumber(2, 11)
    total = cards[0] + cards[1]

    cardEl.textContent = `${cards[0]} ${cards[1]}`
    totalEl.textContent = total
    
    if (total < 21) {      
        resultEl.textContent = `Get another card?`
    }

    if (total === 21) {
        resultEl.textContent = `You've got Blackjack!`
        hasBlackJack = true
    }

    if (total > 21) {
        resultEl.textContent = `You lose!`
        isAlive = false
    }
}

function getCard() {
    let n = 2
    cards[n] = getRandomNumber(2, 11)
    total = total + cards[n]

    cardEl.textContent += ` ${cards[n]}`
    totalEl.textContent = total

    if (total < 21) {
        resultEl.textContent = `Get another card?`
    }

    if (total === 21) {
        resultEl.textContent = `You've got Blackjack!`
        hasBlackJack = true
    }

    if (total > 21) {
        resultEl.textContent = `You lose!`
        isAlive = false
    }

    n += 1
}

function reset() {
    document.getElementById("card-el").textContent = ""
    document.getElementById("total-el").textContent = ""
    document.getElementById("result-el").textContent = ""
}