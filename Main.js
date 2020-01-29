
let player, lvl
let zoom = 3 //zoom kamery
let debugMode = false, pause = false, fps = true;
let current_lvl = "lvl2";
let created = false;
let game_stage = "game"
//=============================================================================================
function preload(){
  loadFiles(); //preload.js
}
//=============================================================================================
function setup(){
createCanvas(900,600);                           //Tworzy Okno
//frameRate(60);                                 // FPS LOCK
groups();                                        // grupy spritow   -      preload.js
gracz        =  new Plejer();                    // gracz           -       player.js
sprts        =  new Sprts();                     //obiekty mapy     -     opsticle.js                  //debug mode       -        debug.js
kam          =  new Kam();                       //kamera           -       camera.js
debug        =  new Debug();                     //skrypt Debugu    -      debug.js
qs           =  new Quest_store();               // store quests    -     global_store.js
ui           =  new Ui();
inventory = new Inventory();
loot = new Loot_lvl();
resize_images();
meter = new FPSMeter();
meter.hide();
camera.zoom = zoom;
}
//=============================================================================================
function draw(){

if (game_stage == "menu"){
  background(0);
}
if (game_stage == "game"){
change_lvl();     // funkcja płynnej zmiany poziomów
qs.returns();     // funkcja sczytywania i zapisywania statusu questów


camera.on();    // Kamera On - start gry
 static();        // statyczne części gry
 Update();        // Update funkcji
 fixUpdate();     // wsporwadzanie poprawek do Update'u jesli wymagane
 render();        // Render na ekranie


if (fps){         // Licznik FPS
  meter.show();
meter.tick();}
}
}
//=============================================================================================
function keyPressed(){
  imputs();
}

//=============================================================================================
function mousePressed(){
}

//=============================================================================================
 function static(){
   background(0)
   lvl.background();
 }

 //=============================================================================================
 function Update(){
   gracz.allFunctions();

   lvl.update_lvl();

   kam.follow();

   inventory.set_slots();

       inventory.cut();
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
  drawSprites(items);
  drawSprites(enemy)
  drawSprites(p1);
  drawSprites(npcs);
  drawSprites(par_top);
  drawSprites(ramacam);
  drawSprites(cam);
  drawSprites(spawners);

}

function leyer_3(){
  ui.ui();
  inventory.show();
  lvl.leyer_3();
debug.debug_butt();


}
