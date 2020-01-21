
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
   background(0)
   lvl.background();
 }

 //=============================================================================================
 function Update(){
   gracz.allFunctions();
   lvl.update_lvl();
   lvl.tel_Position();
   kam.follow();
   scr_debug.deb();
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
  //  console.log(gracz.hp);

inventory.show();
inventory.cut();

    ui.ui();
   lvl.qtest.rozmowa();

    camera.off();
    debug_button.create('rect',80,580,60,20," Debug")
    debug_button.kolor(255,100,100,100,true);
    debug_button.Pressed(LEFT,scr_debug.debug_OnOff)

    camera.on();

  if (debug == true){
      camera.off();
      scr_debug.help();
  }
//=============================================================================================

}
