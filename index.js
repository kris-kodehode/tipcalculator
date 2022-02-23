let getBill = document.getElementById("bill")
let getPeople = document.getElementById("people")
let getTipAmount = document.getElementById("tip-amount")
let getTipTotal = document.getElementById("total")
let getCustom = document.getElementById("customtip")
let inputListen = document.getElementsByTagName("input")


function calc(x) {
    getPeople.style.border = "2px solid hsl(189, 41%, 97%)"
    document.getElementById("nozero").style.display = "none"
    calcTotal = (getBill.value * x) / getPeople.value
    calcDiff = calcTotal - (getBill.value / getPeople.value)
    getTipAmount.textContent = "$" + calcDiff.toFixed(2)
    getTipTotal.textContent = "$" + calcTotal.toFixed(2)
}

function noZero() {
    getPeople.style.border = "2px solid goldenrod"
    document.getElementById("nozero").style.display = "block"
    document.getElementById("nozero").textContent = "Can't be zero"
    console.log("number of people can't be zero!")
}

function tipButton(x) {
    if(getPeople.value > 0){
        getCustom.value = ""
        calc(x)
    } else {
        getCustom.value = ""
        noZero()
    }
}

//input fields
document.querySelectorAll('.inputs').forEach(item => {
    item.addEventListener('input', event => {
        if(getPeople.value == 0) {
            noZero()
        } else {
            let getCustomCalc = getCustom.value / 100 + 1
            calc(getCustomCalc)
        }
    })
})
function reset() {
    getCustom.value = ""
    getBill.value = ""
    getPeople.value = ""
    getTipAmount.textContent = "0.00"
    getTipTotal.textContent = "0.00"
    getPeople.style.border = "2px solid hsl(189, 41%, 97%)"
    document.getElementById("nozero").style.display = "none"
}