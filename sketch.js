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
scr_debug = new Debug();
gracz = new Plejer();                       // gracz           -       player.js
sprts = new sprts();                        //obiekty mapy     -     opsticle.js
lvl1 = new Lvl1();                          // poziom 1        -         lvl1.js                    //debug mode       -        debug.js
kam = new Kam();                            //kamera           -       camera.js
wrog = new Enemy();
scr_debug = new Debug();
  b = new Button();
//testowy sprite ataku - dodac do npc w przyszlosci
test = createSprite(100,100,14,24);
test.addAnimation('up', attack_up)
p1.add(test);
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
