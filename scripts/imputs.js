  //===========================KLAWISZE=====================================
function imputs(){
dashKey = keyWentDown('v');
attackKey = (key == ' ');
//debugKey = (key == 'd');
pauseKey = (key == 'p');
inventoryKey = (key == 'i');
actionKey = (key == 'e');









//===============================DEBUG MODE=================================
//debug
//   if (debugKey){
//   if(debug == true){debug = false}
// else {debug = true}
// }

//================================PAUZA====================================
if (pauseKey){
  if (pause == false){pause = true}
  else{pause = false}
  }
  if (pause == true){
    noLoop();}
    if (pause == false) {loop();}

//================================ATAK====================================
if (attackKey){
  gracz.state = 'attack'}
}

//==============================RUCH POSTACI==============================
function ruch_imputs(){
//ruch postaci
if (keyIsDown(LEFT_ARROW)){
left = 1
}else {left = 0;}
if (keyIsDown(RIGHT_ARROW)){
right = 1
}else {right = 0;}
if (keyIsDown(UP_ARROW)){
up = 1;
}else {up = 0;}
if (keyIsDown(DOWN_ARROW)){
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
