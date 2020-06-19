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
//shiftKey = eventcode
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
  if(quest_log.menu == false){quest_log.menu = true
                              open_book.play();}
  else{quest_log.menu = false
        open_book.play();}
}
//=========================================================================
// if (inventoryKey){
//   if(inventory.menu == false){inventory.menu = true}
//   else{inventory.menu = false}
// }

//==============================RUCH POSTACI==============================
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
