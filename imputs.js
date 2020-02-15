let xaxis,yaxis;
let leftKey = 0, rightKey = 0, upKey = 0, downKey = 0, dashKey = 0;
let tempX;
let tempY;
let tempSet = false;
let on = false;
  //===========================KLAWISZE=====================================
function imputs(){
dashKey = 86 // nie dziala
attackKey = (key == ' ');
shootKey = (key == 'c');
pauseKey = (key == 'p');
statsKey = (key == 'l');
actionKey = (key == 'e');
inventoryKey = (key == "i")
leftKey = 65
rightKey = 68
upKey = 87
downKey = 83
startKey = (key == "x");
questKey = (key == "j");







//===============================DEBUG MODE=================================
if (shootKey){
  gracz.no = true;
}


//================================PAUZA====================================
if (pauseKey){
  if (pause == false){pause = true}
  else{pause = false}
  }
  if (pause == true){
    ui.pauza();
        noLoop();}
    if (pause == false) {loop();}

//================================ATAK====================================
if (attackKey){
  gracz.state = 'attack'}
//=====================================================
if (statsKey){
  if(gracz.menu == false){gracz.menu = true}
  else{gracz.menu = false}
}

if (questKey){
  if(quest_log.menu == false){quest_log.menu = true}
  else{quest_log.menu = false}
}
//=========================================================================
// if (inventoryKey){
//   if(inventory.menu == false){inventory.menu = true}
//   else{inventory.menu = false}
// }

//==============================RUCH POSTACI==============================
}
function ui_poz(){

if ( mouseDown(LEFT)){
if (mouseX > ui.x+151 && mouseX < ui.x+151+350 && mouseY > ui.y && mouseY < ui.y + 15){
  //rect(this.x+151,this.y,350,15)
  if (tempSet == false){
   console.log("pres");
on = true;
tempX = (ui.x - mouseX) * -1;
tempY = (ui.y - mouseY) * -1;
tempSet = true;}}
if (on == true){
ui.x = mouseX - tempX;
ui.y = mouseY - tempY;}
}
 else if (mouseUp(LEFT)){
 tempSet = false;
on = false;}

// if (this.set == false){
//   this.x = (this.basicX - mouseX) * -1;
//     this.y = (this.basicY - mouseY) * -1;}
//   this.set = true;
//   console.log("pres");
//   this.basicX = mouseX-this.x;
//   this.basicY = mouseY-this.y;
// }
// else if (mouseUp(LEFT)){
// this.set = false;;
// }
// }


}
function ruch_imputs(){
//ruch postaci
if (keyIsDown(leftKey)){
left = 1
}else {left = 0;}
if (keyIsDown(rightKey)){
right = 1
}else {right = 0;}
if (keyIsDown(upKey)){
up = 1;
}else {up = 0;}
if (keyIsDown(downKey)){
down = 1
}else {down = 0;}
xaxis = (right - left);
yaxis = (down - up);
// kierunki
//n - gora
n = (xaxis === 0 && yaxis === -1);
//ne - gora prawo
ne = (xaxis === 1 && yaxis === -1);
//e - prawo
e = (xaxis === 1 && yaxis === 0);
//se - prawo dol
se = (xaxis === 1 && yaxis === 1);
//s - dol
s = (xaxis === 0 && yaxis === 1);
//sw - dol lewo
sw = (xaxis === -1 && yaxis === 1);
//w - lewo
w = (xaxis === -1 && yaxis === 0);
//nw - lewo gora
nw = (xaxis === -1 && yaxis === -1);
}
