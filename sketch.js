var anim_kiki, anim_lala;

function preload(){
  // アニメーションを読み込む
  anim_kiki = loadAnimation("assets/kiki1.png","assets/kiki4.png");
  anim_lala = loadAnimation("assets/lala1.png","assets/lala4.png");
  cloud = loadImage('cloud.png');
  cloud2 = loadImage('cloud.png');
  cloud3 = loadImage('cloud.png');
  cloud4 = loadImage('cloud.png');
}
	
function setup(){
  createCanvas(1000, 1000);
  var sprite = createSprite(300, 100); //スプライトの作成
  sprite.addAnimation("kiki", anim_kiki); //スプライトにアニメーションを加える
  sprite = createSprite(500, 100); //スプライトの作成
  sprite.addAnimation("lala", anim_lala); //スプライトにアニメーションを加える
}

function draw(){
  background(158, 231, 250);
  drawSprites();
  image(cloud, 300, 600, 300, 200);
  image(cloud2, 100, 200, 400, 200);
  image(cloud3, 200, 10, 350, 200);
  image(cloud4, 400, 300, 500, 300);

}
