var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;


function preload(){
  fondo=loadImage("../images/image.png");
  bt1Img=loadIMage("../images/koyabt21.png");
  bt2Img=loadIMage("../images/rjbt21.png");
  bt3Img=loadIMage("../images/tatabt21.png");
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
   text("hola",displayWidth/2,3900);
   game.end();

  }
}
