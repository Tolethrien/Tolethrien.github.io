class Debug{

constructor(){
this.b_sciany = new Button();
this.b_top = new Button();
this.b_bottom = new Button();
this.b_tel = new Button();
this.b_player = new Button();
this.b_kam = new Button();
this.debug_button =  new Button();
}
//========================================================================================
deb(){
      this.b_sciany.create('rect',0,35,60,20," Sciany")
      this.b_sciany.kolor(255,100,100,100,true);
      this.b_sciany.Pressed(LEFT,this.playsciany);

      this.b_top.create('rect',0,55,60,20,"par_top")
      this.b_top.kolor(255,100,100,100,true);
      this.b_top.Pressed(LEFT,this.playtop);

      this.b_bottom.create('rect',0,75,60,20," par_bottom")
      this.b_bottom.kolor(255,100,100,100,true);
      this.b_bottom.Pressed(LEFT,this.playbottom);

      this.b_tel.create('rect',0,95,60,20," teleporty")
      this.b_tel.kolor(255,100,100,100,true);
      this.b_tel.Pressed(LEFT,this.playtel);

      this.b_player.create('rect',0,115,60,20,"gracz")
      this.b_player.kolor(255,100,100,100,true);
      this.b_player.Pressed(LEFT,this.playplayer);

      this.b_kam.create('rect',0,135,60,20,"kamera")
      this.b_kam.kolor(255,100,100,100,true);
      this.b_kam.Pressed(LEFT,this.playkam);
  camera.zoom = 1;
}
//============================================================================================
debug_OnOff(){
if (debugMode == false){debugMode = true}
else if (debugMode == true){debugMode = false
                            camera.zoom = zoom;}
}
//=============================================================================================
playsciany(){
for (let i = 0; i < sciany.length; i++){
  if (debug.b_sciany.pressed == true){
    sciany[i].visible = true;
        sciany[i].debug = true;}
 else {
     sciany[i].visible = false;
   sciany[i].debug = false;}
  }
}
//=============================================================================================
playtop(){
  for (let i = 0; i < par_top.length; i++){
    if (debug.b_top.pressed == true){
          par_top[i].debug = true;}
   else {   par_top[i].debug = false;}
  }
}
//=============================================================================================
playbottom(){
    for (let i = 0; i < par_bottom.length; i++){
        if (debug.b_bottom.pressed == true){
            par_bottom[i].debug = true;}
            else{ par_bottom[i].debug = false;}
          }
}
//=============================================================================================
playtel(){
    for (let i = 0; i < tel.length; i++){
    if (debug.b_tel.pressed == true){
      tel[i].visible = true;
      tel[i].debug = true;}
      else{
        tel[i].visible = false;
        tel[i].debug = false;}
      }
}
//=============================================================================================
playplayer(){
  if (debug.b_player.pressed == true){
    gracz.player.debug = true;}
    else{gracz.player.debug = false;}
}
//=============================================================================================
playkam(){
  if (debug.b_kam.pressed == true){
    kam.kamera.visible = true;}
  else{kam.kamera.visible = false;}
}
//=============================================================================================
help(){
  push();
    fill(255,100);
    stroke(0);
    strokeWeight(5);
//    rect(10,480,150,150);
  pop();
  push();
    fill(255);
    textSize(15);
    text('P - Pauza',20,500);
    text('D - debug mode(nieaktywny)',20,520);
    text('I - inventory(nieaktywny)',20,540);
    text('L - stats/inventory',20,560);
     text('V - dash',20,580);
    // text('L - reset',700,600);
    // text('L - reset',700,620);
    // text('L - reset',700,640);
  pop();
}
//=============================================================================================
debug_butt(){
  camera.off();
  this.debug_button.create('rect',80,height - 50,60,20," Debug")
  this.debug_button.kolor(255,100,100,100,true);
  this.debug_button.Pressed(LEFT,debug.debug_OnOff)

  camera.on();

}

}
// do dodania na potem


//  console.log("Xaxis: ",xaxis,"Yaxis: ",yaxis,"current Speed: ",player.getSpeed())
