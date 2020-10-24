var anim_kiki, anim_lala;

function preload(){
  anim_kiki = loadAnimation("assets/kiki1.png","assets/kiki4.png");
  anim_lala = loadAnimation("assets/lala1.png","assets/lala4.png");
}
	
function setup(){
  createCanvas(1000, 1000);
  var sprite = createSprite(30, 50);
  sprite.addAnimation("kiki", anim_kiki);
  sprite = createSprite(70, 50); 
  sprite.addAnimation("lala", anim_lala); 
}

function draw(){
  background(103, 192, 219);
  drawSprites();
  image(cloud, 300, 600, 300, 200);
  image(cloud2, 100, 200, 400, 200);
  image(cloud3, 200, 10, 350, 200);
  image(cloud4, 400, 300, 500, 300);

}
