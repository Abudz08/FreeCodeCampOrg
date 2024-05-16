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
let count = 0
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")

inputBtn.addEventListener(
    "click",
    function() {
        myLeads.push(inputEl.value)
        ulEl.innerHTML += "<li><a href='https://" + myLeads[count] + "' target='_blank'>" + myLeads[count] + "</a></li>"
        inputEl.value = ""
        // const li = document.createElement("li")
        // li.textContent = myLeads[count]
        // ulEl.append(li)

        count++
    }
)

openBox = document.getElementById("container")

openBox.addEventListener(
    "click",
    function() {
        alert("I want to open the box!")
    }
)

let buyBtn = document.getElementById("container2")

buyBtn.innerHTML = "<br><br><button onclick='buy()'>BUY!</button>"

function buy() {
    buyBtn.innerHTML += "<br><br><p>Thank you for buying</p>"
}