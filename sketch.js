var iss, spacecraft, hasDocked = false;
var scimg1,scimg2,scimg3, scimg4, issimg, bg;

function preload() {
  bg = loadImage("images/spacebg.jpg");
  issimg = loadImage("images/iss.png");
  scimg1 = loadImage("images/spacecraft1.png");
  scimg2 = loadImage("images/spacecraft2.png");
  scimg3 = loadImage("images/spacecraft3.png");
  scimg4 = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(1600,800);
  iss = createSprite(330, 130);
  iss.addImage(issimg);
  iss.scale = 0.25;
  spacecraft = createSprite(280, 240);
  spacecraft.addImage(scimg1);
  spacecraft.scale = 0.15;
  
}


function draw() {
  background(bg);
  spacecraft.addImage(scimg1);
if(!hasDocked){
  spacecraft.x = spacecraft.x + random(-1,1);
}
if(keyDown("UP_ARROW")){
  spacecraft.y = spacecraft.y-2;
}
if(keyDown("DOWN_ARROW")){
  spacecraft.addImage(scimg2);
}
if(keyDown("RIGHT_ARROW")){
  spacecraft.x= spacecraft.x+2;
  spacecraft.addImage(scimg3);
}
if(keyDown("LEFT_ARROW")){
  spacecraft.x = spacecraft.x-2;
  spacecraft.addImage(scimg4);
}
if(spacecraft.y <=(iss.y + 70)&& spacecraft.x <=(iss.x - 10)){
  hasDocked = true;
  textSize(25);
  fill("white");
  text("Docking Successful", 200, 300);
}

  drawSprites();
}