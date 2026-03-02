let player

function resetPlayer(){

player={
x:0,
y:0,
speed:260,
r:16,
hp:120,
maxHp:120,
damage:1
}

}

function updatePlayer(dt){

let dx=0
let dy=0

if(keys["w"])dy--
if(keys["s"])dy++
if(keys["a"])dx--
if(keys["d"])dx++

let len=Math.hypot(dx,dy)||1

player.x+=dx/len*player.speed*dt
player.y+=dy/len*player.speed*dt

}

function drawPlayer(){

ctx.fillStyle="cyan"

ctx.beginPath()
ctx.arc(player.x+550,player.y+350,player.r,0,Math.PI*2)
ctx.fill()

}