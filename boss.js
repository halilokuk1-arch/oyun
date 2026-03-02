let bossStage=0

function spawnBoss(type){

let hp=500
let r=40

if(type==2){hp=1000;r=60}
if(type==3){hp=2000;r=90}

enemies.push({

x:player.x+300,
y:player.y,
hp,
speed:40,
r,
boss:true

})

}

function bossCheck(){

if(gameTime>300 && bossStage==0){

spawnBoss(1)
bossStage=1

}

if(gameTime>600 && bossStage==1){

spawnBoss(2)
bossStage=2

}

if(gameTime>900 && bossStage==2){

spawnBoss(3)
bossStage=3

}

}
