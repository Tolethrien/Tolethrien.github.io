
let player, lvl
let zoom = 4 //zoom kamery
let debugMode = false, pause = false, fps = true;
let current_lvl = "lvl1";
let created = false;
let game_stage = "game"
let sceen;
let wheelUP = false;
let wheelDOWN = false;


// createLinearGradient(0, 0, 200, 0);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "white");

//=============================================================================================
function preload(){
  loadFiles(); //preload.js
}
//=============================================================================================
function setup(){
  sceen = createCanvas(windowWidth,windowHeight,P2D);
sceen.style('display', 'block');
//createCanvas(950,632);                           //Tworzy Okno
//frameRate(60);                                 // FPS LOCK
groups();                                        // grupy spritow   -      preload.js
gracz        =  new Plejer();                    // gracz           -       player.js
kam          =  new Kam();                       //kamera           -       camera.js
debug        =  new Debug();                     //skrypt Debugu    -      debug.js
ui           =  new Ui();
inventory = new Inventory();
loot = new Loot_lvl();
lvl = new Lvl2();
quest_log = new Quest_log();
quests = new Quests();
item_list = new Item_list();
//lamp = new Light();
quests.questy();
resize_images();
meter = new FPSMeter();
meter.hide();
camera.zoom = zoom;

  // soundtrack.setVolume(1)
  // soundtrack.play();
}
//=============================================================================================
function draw(){

if (game_stage == "menu"){
  background(0);
}
if (game_stage == "game"){
//change_lvl();     // funkcja płynnej zmiany poziomów

 static();        // statyczne części gry
 Update();        // Update funkcji
 fixUpdate();     // wsporwadzanie poprawek do Update'u jesli wymagane
 render();        // Render na ekranie
 //lamp.poz(); // swiatlo z gracza



if (fps){         // Licznik FPS
  meter.show();
meter.tick();}

 }
}
//=============================================================================================
function keyPressed(){
if (keyCode === SHIFT){return false;}
  imputs();
}

//=============================================================================================
function mousePressed(){
}
function mouseWheel(event){
  if (event.delta == 100){
  wheelDOWN = true;}
  else if (event.delta == -100){
  wheelUP = true;}
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//=============================================================================================
 function static(){
   background("black")
   lvl.background();

 }

 //=============================================================================================
 function Update(){
   gracz.allFunctions();

   lvl.update_lvl();
quests.quests_start();

   kam.follow();
ui.move_char_info();


gracz.dist_attack();
 }

//=============================================================================================
 function fixUpdate(){

 }
//=============================================================================================
function render(){

leyer_2();

leyer_3();


  if (debugMode == true){
    //  console.log(localStorage)
      camera.off();
      debug.deb();
      debug.help();
      camera.on();
    }

}
//=============================================================================================
function leyer_2(){
  drawSprites(tel);
  drawSprites(sciany);
  drawSprites(par_bottom);
  drawSprites(atention);
  //drawSprites(items);
  drawSprites(enemy);
    drawSprites(npcs);
      drawSprites(bullets);
  drawSprites(p1);
  // fill(0,200); // udawana noc
  //  rect(-10,-10,2000,2000)
      drawSprites(par_top);
  drawSprites(ramacam);
  drawSprites(cam);
  drawSprites(spawners);

}

function leyer_3(){
ui.ui();
  lvl.leyer_3();
    inventory.show();
  quests.leyer_3();
debug.debug_butt();

quest_log.allF();

}
