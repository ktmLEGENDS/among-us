var database
var form,player,game;
var gameState=0;
var playerCount;
var player1
function preload(){
	startingimg=loadImage("starting.png")
	playingarea=loadImage("playingarea.jpg")
}

function setup() {
	createCanvas(displayWidth, displayHeight);
	bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
	bg.addImage(startingimg)
	bg.scale=3
	database=firebase.database();
	game = new Game();
	game.getState();
	game.start();
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
if(playerCount===5){
	gameState=1;
		game.update(gameStategameState);
		bg.visible=false;
}
  drawSprites();
 
}



