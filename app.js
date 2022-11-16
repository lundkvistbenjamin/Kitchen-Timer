let timer = 30
const kitchenTimer = setInterval(function() {
    div = document.querySelector("#time")
    timer--
    div.innerText = timer
    if (timer <= 0) {
        div.innerText = "DING DONG"
        clearInterval(kitchenTimer)
    }
}, 1000)