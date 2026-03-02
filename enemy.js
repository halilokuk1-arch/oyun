let enemies=[]

function resetEnemies(){
enemies=[]
}

function spawnEnemy(){

let x=player.x+(Math.random()-0.5)*1200
let y=player.y+(Math.random()-0.5)*1200

enemies.push({

x,y,
hp:40,
speed:60,
r:14,
boss:false

})

}

setInterval(()=>{

if(!paused)
spawnEnemy()

},900)

function updateEnemies(dt){

enemies.forEach(e=>{

let dx=player.x-e.x
let dy=player.y-e.y
let d=Math.hypot(dx,dy)||1

e.x+=dx/d*e.speed*dt
e.y+=dy/d*e.speed*dt

})

}

function drawEnemies(){

ctx.fillStyle="red"

enemies.forEach(e=>{

ctx.beginPath()
ctx.arc(e.x+550,e.y+350,e.r,0,Math.PI*2)
ctx.fill()

})

}