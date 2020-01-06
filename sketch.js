let side_anim,up_anim,down_anim;
let side_sheet,up_sheet,down_sheet;
let player;
let sciany,p1,tel, par_top, par_bottom, drzewa,enemy;
let xaxis,yaxis;
let zoom = 3 //zoom kamery
let debug = false, pause = false;
let timer,b;
//=============================================================================================
function preload(){
  loadFiles(); //preload.js
}
//=============================================================================================
function setup(){
createCanvas(900,600);
groups();                                   // grupy spritow   -      preload.js
gracz = new Plejer();                       // gracz           -       player.js
sprts = new sprts();                        //obiekty mapy     -     opsticle.js                  //debug mode       -        debug.js
kam = new Kam();                            //kamera           -       camera.js
wrog = new Enemy();
lol = new Enemy();
lvl1 = new Lvl1();                          // poziom 1        -         lvl1.js
scr_debug = new Debug();
  b = new Button();
  lol.create(300,300,10,10)
  wrog.create(400,400,10,10)
//testowy sprite ataku - dodac do npc w przyszlosci
test = createSprite(100,100,14,24);
test.addAnimation('up', attack_up)
p1.add(test);
meter = new FPSMeter();
}
//=============================================================================================
function draw(){
 //console.log(wrog.circle.velocity.x, wrog.circle.velocity.y);
  camera.on();
 static();
 Update();
 fixUpdate();
 render();
//   console.log('zycie wroga ',wrog.health)
meter.tick();
}
//=============================================================================================
//7 pix = 1 size
function keyPressed(){
  imputs();
}
//=============================================================================================
function mousePressed(){
}
//=============================================================================================
 function static(){
   background(0)
     lvl1.bg();
 }
 //=============================================================================================
 function Update(){
   gracz.allFunctions();
   wrog.allFunctions();
   lol.allFunctions();
   lvl1.telPoz();
   kam.follow();
 }
//=============================================================================================
 function fixUpdate(){

 }
//=============================================================================================
function render(){

  drawSprites(tel);
    drawSprites(sciany);
  drawSprites(par_bottom);
    drawSprites(atention);
      drawSprites(enemy)
  drawSprites(p1);
  drawSprites(par_top);
  drawSprites(ramacam);
  drawSprites(cam);
  camera.off();
  text(frameRate,20,20,20,20);
  b.create('rect',80,580,60,20," Debug")
  b.kolor(255,100,100,100);
  b.Pressed(LEFT,scr_debug.debug_OnOff)
  camera.on();
    scr_debug.deb();
  if (debug == true){
    camera.off();
      scr_debug.help();

  }
//=============================================================================================

}
