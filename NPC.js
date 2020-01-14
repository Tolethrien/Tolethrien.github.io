class Npc{

constructor(name){
  this.name = name;
  this.attraction_distance = 20
  //to_take, taken, complited, done
  this.quest_state = null;
    if(this.quest_state != null || "done"){
      this.have_quest = true}
  this.pop_up = true;
}
//stworz NPC
create(xx,yy,ww,hh){
  this.x = xx,this.y=yy,this.w=ww,this.h=hh;
this.npc = createSprite(this.x,this.y,this.w,this.h);
this.npc.setDefaultCollider();
this.npc.debug = false;
npcs.add(this.npc);

this.circle = createSprite(this.npc.position.x,this.npc.position.y,this.w,this.w);
this.circle.setCollider("circle",0,0,this.attraction_distance);
this.circle.visible = true;
this.circle.debug = false
atention.add(this.circle);
}
  //stage quest [-1: nieaktywny, 0:aktywny, 1:zebrany, 2:wykonany]
//funkcje updatu
allF(){
  if (this.have_quest == true){
this.quests();}
this.spotOn();
this.talk();
this.reset()
}

//dodaje oraz steruje questami NPC
quests(){
if (this.quest_state == 'to_take'){
  this.znakWykrzyknik();
}

else if (this.quest_state == 'complited'){
this.znak_Zapytania();
}
else if (this._quest_state == 'done'){
null
}

}




//znacznik nad glowa NPC
znakWykrzyknik(){
    push();
    quest_1.resize(60,40);
    imageMode(CENTER);
    image(quest_1,this.x,this.y-20)
    pop();
}

//znacznik nad glowa NPC
znak_Zapytania(){
push();
quest_2.resize(60,40);
imageMode(CENTER);
image(quest_2,this.x,this.y-20)
pop();
}

//okresla czy gracz wszedl w pole interakcji oraz wyswietla guzik akcji. Zwraca true
spotOn(){
if (gracz.player.overlap(this.circle)){
  push();
  rectMode(CENTER);
  rect(gracz.player.position.x,gracz.player.position.y-20,8,8);
     textSize(5);
     text("E",gracz.player.position.x+2,gracz.player.position.y-18,8,8);
  pop();
  return true;
}
}

talk(){
if (this.spotOn() && actionKey){
  return true;
}
}



  reset(){
  if (!gracz.player.overlap(this.circle)){
    this.pop_up = true;
  }
}












}
