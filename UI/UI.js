class Ui{
constructor(){
this.x = 100,this.y = 100,this.w = 500,this.h = 400
}
ui(){
this.stats();
this.hud();
}


inventory_menu(){
rect(150,150,300,300)




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
  rect(width/2,580,70,10)
  fill("red")
  let m = map(gracz.hp,0,10,0,70)
  rect(width/2,580,m,10)
  pop();
camera.on();
}

stats(){
   if (gracz.menu == true){
  //   fill(100,100);
    // rect(100,100,500,500)
  //================================//glowny kwadrat//=====================================
camera.off()
fill(100,100);
rectMode(CORNER);

push();
rect(this.x,this.y,this.w,this.h,20,0,80,20)
stroke(0)
strokeWeight(3)
line(this.x+151,this.y+1,this.x+151,500-1)
pop();

//===========================//kwadrat za postacią//=========================================
fill(70);
noStroke();
rect(this.x,this.y,this.x+50,this.y+150,20,0,0,0);

//============================//kwadrat za statami//=======================
fill(50);
rect(this.x,this.y+250,this.x+50,this.w/4+25,0,0,0,20)

//====================//kwadrat czarny ( tlo postaci) + postac//======================
fill(0)
rect(this.x+27,this.y+50,100,150,60);
player_image.resize(80,80)
image(player_image,140,200);

//===========================//waga oraz gold//==========================
push();
fill(85, 128, 0)
rect(this.x+85,this.y+10,60,20,5)
rect(this.x+10,this.y+10,65,20,5)
fill(255);
noStroke();
textSize(10)
text("Pyrki: " + gracz.money,195,115,80,20)
text("Weight: 0/115",110,115,80,20)
pop();
//===========================staty postaci + wizualizacja ich//===========================
push();
fill(200);
noStroke();
  text("Health:   "   + gracz.hp,110,360,80,20)
  stroke(2)
  noFill();
  rect(175,360,70,10)
  fill("red")
  let m = map(gracz.hp,0,10,0,70)
  rect(175,360,m,10)
pop();

push();
fill(200);
noStroke();
  text("o2:         " + 10,110,375,80,20)
  stroke(2)
  noFill();
  rect(175,375,70,10)
  fill(204, 89, 51)
  rect(175,375,70,10)
pop();

push();
fill(200);
noStroke();
  text("Hunger: "     + 100,110,390,80,20)
  stroke(2)
  noFill();
  rect(175,390,70,10)
  fill(128, 204, 51)
  rect(175,390,60,10)
pop();

push();
fill(200);
noStroke();
  text("Thirst:    "  + 100,110,405,80,20)
  stroke(2)
  noFill();
  rect(175,405,70,10)
  fill(51, 89, 204)
  rect(175,405,40,10)
pop();
//==============================//pasek powiadomien na ekranie//===========================
push();
fill(0,0,50,150)
rect(this.x+151,this.y,350,15)
fill(255,150);
text("Date: 02/07/3024",270,103,120,20)
text("Time: 20:24",535,103,80,20)
pop();
inventory.show()
camera.on();
 }
}

dialog(){
this.gumpX = 250,this.gumpY = 150, this.gumpW = 400, this.gumpH = 300;
push();
//  rectMode(CENTER);
  fill(60);
  rect(this.gumpX,this.gumpY,this.gumpW,this.gumpH);
  fill(255);
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



}
