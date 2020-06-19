// DO przebudowania UI
// 1) potrzebuje by w tym pliku dalo sie ustawic wszystkie zmienne zwiazane z wygladem
  //     wszystkich funkcji UI
  // 2) dobrze je opisać
  // 3) niech wszystkie clasy jesli posiadajac cokowliek z UI (wielkością pozycją itp odnoszą się do
  //   tego pliku


class Ui{
constructor(){
  //=====================================rozmiar slotow====================================
  this.slots_w = 75, this.slots_h = 75

  //============================okno postaci======================================
this.char_info_x = 150,this.char_info_y = 150,this.char_info_w = 810,this.char_info_h = 525
this.char_info_tempX,this.char_info_tempY,this.char_info_tempSet = false,this.char_info_on = false;
this.cant_drag = false;

//OKNO ROZMOW
this.gumpX = 400,this.gumpY = 250, this.gumpW = 700, this.gumpH = 200;
this.startX = -200, this.startY = 250, this.startW = 300, this.startH = 300
this.anim_speed = 24;


//==============================okno kontenera ====================================

this.contener_ui_poz_x = 125, this.contener_ui_poz_y = 75, this.contener_ui_poz_w, this.contener_ui_poz_h;
this.contener_ui_tempX,this.contener_ui_tempY,this.contener_ui_tempSet = false,this.contener_ui_on = false;
this.contener_ui_cant_drag = false;

this.loot_bag_ui_poz_x = 125, this.loot_bag_ui_poz_y = 75, this.loot_bag_ui_poz_w = 250, this.loot_bag_ui_poz_h = 200;
this.loot_bag_ui_tempX,this.loot_bag_ui_tempY,this.loot_bag_ui_tempSet = false,this.loot_bag_ui_on = false;
this.loot_bag_ui_cant_drag = false;






//okno Quest_log
this.ql_X = 230, this.ql_Y = 200;



}

ui(){
this.character_info();
this.hud();
}


pauza(){
  camera.off();
  push();
  fill(255);
  textSize(50)
  text("Pauza",width/2,height/2,150,60)
pop();
camera.on();
return true
}


hud(){
  camera.off();
  push();
  stroke(2)
  noFill();
  rect(width/2,height-50,70,10)
  fill("red")
  let m = map(gracz.hp,0,10,0,70)
  rect(width/2,height-50,m,10)
  pop();
camera.on();
}

character_info(){
  if (gracz.menu == true){
     camera.off();
      //   rect(this.char_info_x,this.char_info_y,this.char_info_w,this.char_info_h)
      image(player_ui,this.char_info_x-175,this.char_info_y-230) // glowna plansza okna

      image(player_image,this.char_info_x+100,this.char_info_y+70); // zdjecie gracza

// //===========================//waga oraz gold//==========================
push();
fill(153, 153, 102) // kolor tła
rect(this.char_info_x+40,this.char_info_y+480,60,20,5) // kwadrat tła
rect(this.char_info_x+180,this.char_info_y+480,75,20,5) //// kwadrat tła
fill(255); // kolor napisów
noStroke();
textSize(10)
text("Pyrki: " + inventory.money,this.char_info_x+45,this.char_info_y+485,80,20)
text("Weight: 0/115",this.char_info_x+185,this.char_info_y+485,80,20)
//rect(this.char_info_x,this.char_info_y,100,100)
pop();

// //===========================staty postaci + wizualizacja ich//===========================
push();
  stroke(0);
  strokeWeight(4)
  textSize(16)
  fill(255, 204, 153)
  text("Health:       "   + floor(gracz.hp),this.char_info_x+50,this.char_info_y+390,120,20)
  stroke(2)
  strokeWeight(1)
  noFill();
  rect(this.char_info_x+180,this.char_info_y+390,70,10)
  fill("red")
  let hp = map(gracz.hp,0,10,0,70)
  rect(this.char_info_x+180,this.char_info_y+390,hp,10)
pop();

push();
  stroke(0);
  strokeWeight(4)
  textSize(16)
  fill(255, 204, 153)
  text("o2:             " + 10,this.char_info_x+50,this.char_info_y+410,120,20)
  stroke(2)
  strokeWeight(1)
  noFill();
  rect(this.char_info_x+180,this.char_info_y+410,70,10)
  fill(204, 89, 51)
  rect(this.char_info_x+180,this.char_info_y+410,70,10)
pop();

push();
  stroke(0);
  strokeWeight(4)
  textSize(16)
  fill(255, 204, 153)
  text("Hunger:     "     + floor(gracz.hunger),this.char_info_x+50,this.char_info_y+430,120,20)
  stroke(2)
  strokeWeight(1)
  noFill();
  rect(this.char_info_x+180,this.char_info_y+430,70,10)
  fill(128, 204, 51)
    let hu = map(gracz.hunger,0,100,0,70)
  rect(this.char_info_x+180,this.char_info_y+430,hu,10)
pop();

push();
  stroke(0);
  strokeWeight(4)
  textSize(16)
  fill(255, 204, 153)
  text("Thirst:        "  + gracz.thirst,this.char_info_x+50,this.char_info_y+450,120,20)
  stroke(2)
  strokeWeight(1)
  noFill();
  rect(this.char_info_x+180,this.char_info_y+450,70,10)
  fill(51, 89, 204)
    let th = map(gracz.thirst,0,100,0,70)
  rect(this.char_info_x+180,this.char_info_y+450,th,10)
pop();

camera.on();
 }
}

dialog(){
push();
//  rectMode(CENTER);
  fill(60,100);
  rect(this.startX,this.startY,this.gumpW,this.gumpH,20,20,0,0);
 pop();

}

akcja(){
  push();
  fill(255);
  stroke(2)
    rectMode(CENTER);
    rect(gracz.player.position.x,gracz.player.position.y-20,8,8);
       textSize(5);
       text("E",gracz.player.position.x+2,gracz.player.position.y-18,8,8);
       pop();

}

quest_log(){
  push();
camera.off();
image(qlog,this.ql_X,this.ql_Y)
camera.on();
  pop();
}

quest_track(){
  push();
  fill(100,100)
  rect(width-140,100,150,45,20) //=======
  pop();

}


slots_layer(style,x,y,w,h,slot,row,col){
   camera.off();
   push();
   let xx = 0;
  let yy = 0;
  let swap = 1;
  for (let i = 0; i < slot.length; i++){
    slot[i].create(style,x+xx,y+yy,w,h)
  //  this.slot[i].kolor(100,100,100);
    if (i == (row * swap) -1 ){
  yy += h;
  xx = -w;
  swap ++;
    }
      xx += w;
  }
  camera.on();
  pop();

}

contex_layer(cont){
  camera.off();
  let y = 0;
  let name = "USE"
  for (let i = 0; i < cont.slot.length; i++){
  //  console.log("loop, add inv ", i)
    if (cont.slot[i].hold != undefined){
      cont.slot[i].rClick();}

    if (cont.slot[i].rPressed == true){
        cont.take_block = true;
        for (let j = 0; j < 2; j++){
cont.buttons[j].create("rect", cont.slot[i].x+cont.slot[i].w/2,cont.slot[i].y+cont.slot[i].h/2+y,70,30,name,10)
y += 30;
name = "TEST"
      if (cont.buttons[0].Pressed_true(LEFT)){
        console.log("use item: ", i, "guzik: ", j)
            cont.take_block = false;
          cont.slot[i].hold.use();
                if (cont.slot[i].amount == 1){
                  cont.slot[i].hold = undefined;}
                  else{cont.slot[i].amount --}
                  cont.slot[i].gu();
                    break;}

        else if (cont.buttons[1].Pressed_true(LEFT)){
          console.log("test item: ", i, "guzik: ", j)
            cont.slot[i].hold.test();
           cont.take_block = false;
            cont.slot[i].gu();
          break;}

        else if (mouseWentDown(LEFT) || mouseWentDown(RIGHT)){
          if (cont.slot[i].mouseON() != true){
               cont.take_block = false;
            cont.slot[i].gu();
            break;}

        }
        }
}

}
camera.on();
}

item_info_layer(source){
  camera.off();
  for (let i = 0; i < source.slot.length; i++){
    source.slot[i].item_info();}
camera.on();
}

move_loot_bag(){
  if(mouseDown(LEFT)){
      if (mouseX > this.loot_bag_ui_poz_x+15 && mouseX < this.loot_bag_ui_poz_x+ 15 +this.loot_bag_ui_poz_w && mouseY > this.loot_bag_ui_poz_y-2 && mouseY < this.loot_bag_ui_poz_y -2 + this.loot_bag_ui_poz_h){
for (let i = 0; i < lvl.loot_bags_array.length; i++){
  if (lvl.loot_bags_array.length != 0){
for (let j = 0; j < lvl.loot_bags_array[i].slot.length; j++){
  if (lvl.loot_bags_array[i].slot[j].mouseON_empty_slot() == true){
  //  console.log("myszka na itemku",i,j)
    this.cant_drag = true;
    break;}
    else if(i == lvl.loot_bags_array.length-1 &&
      j == lvl.loot_bags_array[i].slot.length-1 && lvl.loot_bags_array[i].slot[j].mouseON_empty_slot() != true && this.cant_drag == false){
 if (this.loot_bag_ui_tempSet == false){
   this.loot_bag_ui_on = true;
     this.loot_bag_ui_tempX = (this.loot_bag_ui_poz_x - mouseX) * -1;
     this.loot_bag_ui_tempY = (this.loot_bag_ui_poz_y - mouseY) * -1;
     this.loot_bag_ui_tempSet = true;}}}}}}
     if (this.loot_bag_ui_on == true){
        //    console.log("jest")
     this.loot_bag_ui_poz_x = mouseX - this.loot_bag_ui_tempX;
     this.loot_bag_ui_poz_y = mouseY - this.loot_bag_ui_tempY;}}
      else if (mouseUp(LEFT)){
      this.loot_bag_ui_tempSet = false;
      this.cant_drag = false;
     this.loot_bag_ui_on = false;}

   }

move_char_info(){
  if(mouseDown(LEFT)){
      if (mouseX > this.char_info_x && mouseX < this.char_info_x+this.char_info_w && mouseY > this.char_info_y && mouseY < this.char_info_y + this.char_info_h){
for (let i = 0; i < inventory.slot.length; i++){
  if (inventory.slot[i].mouseON_empty_slot() == true){
  //  console.log("myszka na itemku")
    this.cant_drag = true;
    break;}
    else if(i == inventory.slot.length-1 && inventory.slot[i].mouseON_empty_slot() != true && this.cant_drag == false){
    //  console.log("jest")
 if (this.char_info_tempSet == false){
   this.char_info_on = true;
     this.char_info_tempX = (this.char_info_x - mouseX) * -1;
     this.char_info_tempY = (this.char_info_y - mouseY) * -1;
     this.char_info_tempSet = true;}}}}
     if (this.char_info_on == true){
     this.char_info_x = mouseX - this.char_info_tempX;
     this.char_info_y = mouseY - this.char_info_tempY;}}
      else if (mouseUp(LEFT)){
      this.char_info_tempSet = false;
      this.cant_drag = false;
     this.char_info_on = false;}

}

conteiner_look(look_of,x,y){
  switch(look_of){
case "conteiner":
 image(inside_chest,this.contener_ui_poz_x-35,this.contener_ui_poz_y+15);
 break;
 case "corpse":
  image(corpse_bag,x,y);
  break;
  }
}

}
