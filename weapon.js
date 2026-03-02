let bullets=[]

function shoot(){

let a=Math.random()*Math.PI*2

bullets.push({

x:player.x,
y:player.y,
vx:Math.cos(a)*500,
vy:Math.sin(a)*500,
life:1,
dmg:20

})

}

setInterval(()=>{

if(!paused)
shoot()

},300)

function updateBullets(dt){

bullets.forEach(b=>{

b.x+=b.vx*dt
b.y+=b.vy*dt
b.life-=dt

})

bullets=bullets.filter(b=>b.life>0)

}

function drawBullets(){

ctx.fillStyle="yellow"

bullets.forEach(b=>{

ctx.fillRect(b.x+550,b.y+350,4,4)

})

}
