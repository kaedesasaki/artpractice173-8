var anim_kiki, anim_lala;

function preload(){
  anim_kiki = loadAnimation("assets/kiki1.png","assets/kiki4.png");
  anim_lala = loadAnimation("assets/lala1.png","assets/lala4.png");
}
	
function setup(){
  createCanvas(1000, 1000);
  var sprite = createSprite(100, 100);
  sprite.addAnimation("kiki", anim_kiki);
  sprite = createSprite(200, 100); 
  sprite.addAnimation("lala", anim_lala); 
}

function draw(){
  background(158, 231, 250);
  drawSprites();
  image(cloud, 300, 600, 300, 200);
  image(cloud2, 100, 200, 400, 200);
  image(cloud3, 200, 10, 350, 200);
  image(cloud4, 400, 300, 500, 300);

}
