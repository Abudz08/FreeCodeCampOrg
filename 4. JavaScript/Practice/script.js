// | LOG DATA

let person = {
    name: "Abudz",
    age:70,
    country: "Philippines"
}

function logData() {
    let message = `${person.name} is ${person.age} years old and lives in ${person.country}`
    console.log(message)
}

logData()

// | DISCOUNT

if (person.age < 6) {
    console.log("FREE!")
}
else if (person.age >= 6 && person.age <= 17) {
    console.log("Child Discount")
}
else if (person.age >= 18 && person.age <= 26) {
    console.log("Student Discount")
}
else if (person.age >= 27 && person.age <= 66) {
    console.log("Full Price")
}
else {
    console.log("Senior Citizen Discount")
}

// | LARGE COUNTRIES

let largeCountries = [
    "China",
    "India",
    "USA",
    "Indonesia",
    "Pakistan"
]

console.log("The 5 largest countries in the world:")
for (let i=0; i<largeCountries.length ; i++) {
    console.log("- " + largeCountries[i])
}

let largeCountries2 = [
    "Tuvalu",
    "India",
    "USA",
    "Indonesia",
    "Monaco"
]

largeCountries2.pop()
largeCountries2.push("Pakistan")

largeCountries2.shift()
largeCountries2.unshift("China")

console.log("The 5 largest countries in the world:")
for (let i=0; i<largeCountries2.length ; i++) {
    console.log("- " + largeCountries2[i])
}

// | FRIDAY THE 13TH

let dayOfMonth = 12
let weekday = "Monday"

if ( dayOfMonth === 13 && weekday === "Friday") {
    console.log("Friday the 13th 😱")
}

else {
    console.log("👌")
}

// | ROCK, PAPER, SCISSORS

let hands = [
    "rock",
    "paper",
    "scissor"
]

let index = Math.floor(Math.random() * 3)
console.log(hands[index])

// | FRUIT SHELF

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function shelf() {

    let apples = ""
    let oranges = ""

    for ( i = 0 ; i < fruit.length ; i++) {
        if ( fruit[i] === "🍎") {
            apples += "🍎"
        }
        else {
            oranges += "🍊"
        }    
    }
    
    appleShelf.textContent = apples
    orangeShelf.textContent = oranges
}

shelf()

// | CHROME EXTENSIONS

let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
         listItems += `
            <li>
                <a href='https://${leads[i]}' target='_blank'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener(
    "click",
    function() {
        myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    }
)

tabBtn.addEventListener(
    "click",
    function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){    
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads))
            render(myLeads)
        })
    }
)

deleteBtn.addEventListener(
    "dblclick",
    function() {
        localStorage.clear()
        myLeads = []
        render(myLeads)
    }
)


// | OPEN BOX

openBox = document.getElementById("container")

openBox.addEventListener(
    "click",
    function() {
        alert("I want to open the box!")
    }
)


// | BUY BUTTON

let buyBtn = document.getElementById("container2")

buyBtn.innerHTML = "<br><br><button onclick='buy()'>BUY!</button>"

function buy() {
    buyBtn.innerHTML += "<br><br><p>Thank you for buying</p>"
}


// | SUM

function add(num1, num2) {
    let sum = num1 + num2
    return sum
}

console.log (add(18, 35))


// | NAME

function getFirst(names) {
    return names[1]
}

let name =  getFirst(["Abudz", "Joseph", "Jove"])

console.log(name)


// | WINNER OF THE GAME

const player = "Per"
const opponent = "Nick"
const game = "Amazing Fighter"
let points = 0
let hasWon = false

points += 100
hasWon = false

if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
}

else {
    console.log(`The winner is ${opponent}! ${player} lost the game.`)
}

// | MY COURSES

let myCourses = [
    "Learn CSS Animations",
    "UI Design Fundamentals",
    "Intro to Clean Code"
]

function courses(topic) {
    for (let i=0; i<topic.length ; i++) {
        console.log(topic[i])
    }
}

courses(myCourses)


// | SAVE AND FETCH FROM LOCAL STORAGE

// JSON.parse(localStorage.getItem("myLeads"))
// JSON.parse() is a method in JavaScript used to parse a JSON string and convert it into a JavaScript object.

// localStorage.setItem("myLeads", JSON.stringify(myLeads))
// JSON.stringify() is a method used to convert a JavaScript value (object, array, string, number, etc.) into a JSON string. This string representation of the data can then be easily transmitted or stored, often used for sending data to web servers or saving it to files.

// localStorage.setItem("variable", "value")
localStorage.setItem("myCredits", "100")
console.log(localStorage.getItem("myCredits"))


// | LOG DATA SCORE

let data = [
    {
        player: "Abudz",
        score: 35
    },
    {
        player: "Jove",
        score: 18
    }
]

const logBtn = document.getElementById("log-btn")
const logScore = document.getElementById("log-score")

logBtn.addEventListener ("click", function() {
    logScore.textContent = `${data[0].player}'s score is ${data[0].score}.`
})


// | GENERATE SENTENCE

function generateSentence(desc,arr) {
    console.log(`The ${arr.length} ${desc} are `)
    for (let i = 0; i < arr.length ; i++) {
        if (i === arr.length - 1) {
            console.log(`and ${arr[i]}`)
        } else {
            console.log(`${arr[i]}, `)
        }
    }
}

let countries = ["China", "India", "USA"]
let fruits = ["Apples", "Bananas"]

generateSentence ("Largest Countries", countries)
generateSentence ("Best Fruits", fruits)

// | RENDER IMAGES

let containerEl = document.getElementById("container3")
const imgs = [
    "./images/joseph.jpg",
    "./images/jove.jpg",
    "./images/nash.jpg"
]

function renderTeam() {
    for (let i = 0; i < imgs.length; i++) {
        containerEl.innerHTML += `<img class="team-img" src="${imgs[i]}">`
    }
}

renderTeam()

