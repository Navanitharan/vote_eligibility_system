function split () {
let amount = document.getElementById("amount").value
let person = document.getElementById("person").value
let result = amount/person
document.getElementById("title").innerText=result.toFixed(2)+" for each 🤑"
}