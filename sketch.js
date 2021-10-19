const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy,fairy_Img;
var joy_sound;


function preload()
{
	starImg = loadImage("starImage.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
    fairy_Img = loadAnimation("fairyImage1.png","fairyImage2.png");
	joy_sound = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(windowWidth, 600);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(width,30);
	star.addImage(starImg);
	star.scale = 0.06;
    star.debug=false;
	star.setCollider("circle",10,20,80);
	fairy = createSprite(width/6,360.4);
	fairy.addAnimation("fairy_dancing",fairy_Img);
	fairy.scale=0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(width/1.5 , 110 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  joy_sound.play();
  star.x= starBody.position.x 
  star.y= starBody.position.y 
  
  console.log(star.y);

  //write code to stop star in the hand of fairy
if(star.y> 200 && starBody.position.y >=330){
	Matter.Body.setStatic(starBody,true);
}


  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
 
	//writw code to move fairy left and right
	if (keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x + 20;
	}
	if (keyCode === LEFT_ARROW) {
		fairy.x = fairy.x - 20;
	}
}
