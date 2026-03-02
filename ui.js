function drawUI(){

ctx.fillStyle="white"
ctx.font="20px Arial"

ctx.fillText(
"HP: "+Math.floor(player.hp),
20,
30
)

ctx.fillText(
"TIME: "+Math.floor(gameTime),
20,
60
)

}
