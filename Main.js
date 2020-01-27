
let player, lvl
let zoom = 3 //zoom kamery
let debug = false, pause = false, fps = true;
let current_lvl = "lvl2";
let created = false;
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
sprts        =  new sprts();                     //obiekty mapy     -     opsticle.js                  //debug mode       -        debug.js
kam          =  new Kam();                       //kamera           -       camera.js
scr_debug    =  new Debug();                     //skrypt Debugu    -      debug.js
debug_button =  new Button();                    //costomowe guziki -      button.js
qs           =  new Quest_store();               // store quests    -     global_store.js
ui           =  new Ui();
inventory = new Inventory();
loot = new Loot_lvl();
resize_images();
meter = new FPSMeter();
meter.hide();
}
//=============================================================================================
function draw(){

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
//=============================================================================================
function keyPressed(){
  imputs();
}

//=============================================================================================
function mousePressed(){
}

//=============================================================================================
 function static(){
   background("green")
   lvl.background();
 }

 //=============================================================================================
 function Update(){
   gracz.allFunctions();
   lvl.update_lvl();
   lvl.tel_Position();
   kam.follow();
   inventory.set_slots();
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
    drawSprites(items);
    drawSprites(enemy)
    drawSprites(p1);
    drawSprites(npcs);
    drawSprites(par_top);
    drawSprites(ramacam);
    drawSprites(cam);
    drawSprites(spawners);
  //  console.log(gracz.hp);


    ui.ui();
    inventory.show();
    inventory.cut();
   lvl.start_quest.rozmowa();
    lvl.vah.rozmowa();

    camera.off();
    debug_button.create('rect',80,580,60,20," Debug")
    debug_button.kolor(255,100,100,100,true);
    debug_button.Pressed(LEFT,scr_debug.debug_OnOff)

    camera.on();
   scr_debug.deb();
  if (debug == true){
    //  console.log(localStorage)
      camera.off();
      scr_debug.help();
      camera.on();
  }
//=============================================================================================

}
