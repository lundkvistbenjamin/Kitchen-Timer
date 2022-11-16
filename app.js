const outputElem = document.querySelector("#timer-output")
const kitchenTimer = null

function readMinSec() {
    let seconds = document.querySelector("#input-seconds").value
    if (seconds.includes(":")) {
        seconds = Number(seconds.split(":")[0]*60) + Number(seconds.split(":")[1])
    }
    return seconds
}

function timerHandler(){
    if (!kitchenTimer){

        let secondsLeft = readMinSec()

    outputElem.innerText = secondsLeft
    kitchenTimer = setInterval(function(){
    secondsLeft--

        let minLeft = Math.floor(secondsLeft/60)
        outputElem.innerText = `${minLeft}:${secondsLeft % 60}`

    outputElem.innerText = secondsLeft

    if (secondsLeft <= 0){
        clearInterval(kitchenTimer)
        outputElem.innerText = "Tiden är ute!"
    }

}, 1000)
        
    } else {
        clearInterval(kitchenTimer)
        kitchenTimer = null
    }



}

document.querySelector("#btn-start").addEventListener("click", function (){
    timerHandler()
})


/* //let timer = 30
const kitchenTimer = setInterval(function() {
    div = document.querySelector("#time")
    timer--
    div.innerText = timer
    if (timer <= 0) {
        div.innerText = "DING DONG"
        clearInterval(kitchenTimer)
    }
}, 1000) */