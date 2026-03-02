const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

let keys={}
let paused=true
let gameTime=0
let map=1

document.addEventListener("keydown",e=>keys[e.key]=true)
document.addEventListener("keyup",e=>keys[e.key]=false)

function startMap(m){

map=m
paused=false
gameTime=0

resetPlayer()
resetEnemies()

menu.style.display="none"

}

let last=0

function loop(t){

let dt=(t-last)/1000
last=t

if(!paused){

gameTime+=dt

updatePlayer(dt)
updateEnemies(dt)
updateBullets(dt)

bossCheck()

}

drawMap()
drawEnemies()
drawPlayer()
drawBullets()
drawUI()

requestAnimationFrame(loop)

}

loop(0)