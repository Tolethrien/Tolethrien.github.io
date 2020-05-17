// DO przebudowania UI
// 1) potrzebuje by w tym pliku dalo sie ustawic wszystkie zmienne zwiazane z wygladem
  //     wszystkich funkcji UI
  // 2) dobrze je opisać
  // 3) niech wszystkie clasy jesli posiadajac cokowliek z UI (wielkością pozycją itp odnoszą się do
  //   tego pliku


class Ui{
constructor(){
  //okno STATS
this.x = 100,this.y = 200,this.w = 500,this.h = 400

//OKNO ROZMOW
this.gumpX = 400,this.gumpY = 250, this.gumpW = 700, this.gumpH = 200;
this.startX = -200, this.startY = 250, this.startW = 300, this.startH = 300
this.anim_speed = 24;
this.slots_w = 75, this.slots_h = 75
//menu kontekstowe

//okno Quest_log
this.ql_Y = 230;



}

ui(){
this.stats();
this.hud();
}






pauza(){
  push();
  fill(255);
  textSize(50)
  text("Pauza",width/2,height/2,150,60)
pop();
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

stats(){
   if (gracz.menu == true){

  //================================//glowny kwadrat//=====================================
camera.off()
push();
fill(100,100);
rectMode(CORNER);

rect(this.x,this.y,this.w,this.h,20,0,80,20)
stroke(0)
strokeWeight(3)
line(this.x+151,this.y+1,this.x+151,this.y+400-1)
pop();

//===========================//kwadrat za postacią//=========================================
push();
fill(70);
noStroke();
rect(this.x,this.y,150,250,20,0,0,0);
pop();

//============================//kwadrat za statami//=======================
push();
fill(50);
rect(this.x,this.y+250,150,150,0,0,0,20)
pop();
//====================//kwadrat czarny ( tlo postaci) + postac//======================
push();
fill(0)
rect(this.x+27,this.y+50,100,150,60);
image(player_image,this.x+40,this.y+100);
pop();

//===========================//waga oraz gold//==========================
push();
fill(85, 128, 0)
rect(this.x+85,this.y+10,60,20,5)
rect(this.x+10,this.y+10,65,20,5)
fill(255);
noStroke();
textSize(10)
text("Pyrki: " + inventory.money,this.x+95,this.y+15,80,20)
text("Weight: 0/115",this.x+10,this.y+15,80,20)
pop();
//===========================staty postaci + wizualizacja ich//===========================
push();
fill(200);
noStroke();
  text("Health:   "   + gracz.hp,this.x+10,this.y+260,80,20)
  stroke(2)
  noFill();
  rect(this.x+75,this.y+260,70,10)
  fill("red")
  let m = map(gracz.hp,0,10,0,70)
  rect(this.x+75,this.y+260,m,10)
pop();

push();
fill(200);
noStroke();
  text("o2:         " + 10,this.x+10,this.y+275,80,20)
  stroke(2)
  noFill();
  rect(this.x+75,this.y+275,70,10)
  fill(204, 89, 51)
  rect(this.x+75,this.y+275,70,10)
pop();

push();
fill(200);
noStroke();
  text("Hunger: "     + 100,this.x+10,this.y+290,80,20)
  stroke(2)
  noFill();
  rect(this.x+75,this.y+290,70,10)
  fill(128, 204, 51)
  rect(this.x+75,this.y+290,60,10)
pop();

push();
fill(200);
noStroke();
  text("Thirst:    "  + 100,this.x+10,this.y+305,80,20)
  stroke(2)
  noFill();
  rect(this.x+75,this.y+305,70,10)
  fill(51, 89, 204)
  rect(this.x+75,this.y+305,40,10)
pop();
//==============================//pasek powiadomien na ekranie//===========================
push();
fill(0,0,50,150)
rect(this.x+151,this.y,350,15)
fill(255,150);
text("Date: 02/07/3024",this.x+170,this.y+3,120,20)
text("Time: 20:24",this.x+435,this.y+3,80,20)
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
  let y = this.ql_Y;
  push();
  fill(100,100)
  rect(200,200,500,360)
  strokeWeight(3)
  line(380,200,380,560)
  line(420,200,420,560)
  for( let i = 0; i < 12; i++){
    line(200,y,420,y);
    y += 30;}
  pop();
}

quest_track(){
  push();
  fill(100,100)
  rect(width-140,100,150,45,20) //=======
  pop();

}

}
