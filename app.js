const hit = document.querySelector("#hit")
const miss = document.querySelector("#miss")
const start = document.querySelector("#start")
const note = document.querySelector("#note")
const game = document.querySelector("#game")
const char = document.querySelector(".character")
const result = document.querySelector(".result")
let hits = 0 
let misses = 0

let shoot = new Audio()
shoot.src = " audio/shoot.mp3 " 

function bam () {
    // char.removeEventListener("mousedown", bam)
    if (char.classList.contains("enemy1") || 
    char.classList.contains("enemy2") || char.classList.contains("enemy3")) {
        char.classList.add("boom")
        hits ++
        hit.innerText = " hits" + hits
    }
    else{
    char.classList.add("nono")
    misses += 5
    miss.innerText = " misses" +  misses
    }
    
    shoot.play()
    // setTimeout(function (){
    //     selectEnemy()
    //     moveEnemy()
    //     char.addEventListener("mousedown",bam)
    // }, 3000)
}

start.addEventListener("click", startGame)

function startGame() {
    hits = 0
    misses = 0
    hit.innerText = "to Goal:" + hits
    miss.innerText = "misses:" + misses
    timer = setInterval(selectEnemy,random(2000) + 1000)
    char.addEventListener("mousedown", bam)
    result.style.height = "0px"
    setTimeout(function(){
        char.style.opacity = "0"
        result.style.height = "100%"
        if (hits > misses) {
            result.innerText = "You won"
        }

        else{
            result.innerText = " you lose"
        }
        clearInterval(timer)
    },30000)
}

function selectEnemy() {
    moveEnemy()
    char.style.opacity = "1"
    char.classList.remove("enemy1")
    char.classList.remove("enemy2")
    char.classList.remove("enemy3")
    char.classList.remove("police")
    switch(random(3)) {
        case 0:
            char.classList.add("enemy1")
            break
        case 1:
            char.classList.add("enemy2")
            break
        case 2:
            char.classList.add("enemy3")
            break
        case 3:
            char.classList.add("police")
            
    }
    char.classList.remove("boom")
    char.classList.remove("nono")
}


function moveEnemy() {
    let x = random(600 - 95)
    let y = random(400 - 95)
    char.style.top = y + "px"
    char.style.left = x + "px"
}

function random( x) {
    return Math.round(Math.random() * x)
}
