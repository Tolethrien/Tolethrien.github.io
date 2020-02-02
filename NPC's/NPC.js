class Npc{

constructor(name){
  this.name = name;
  this.attraction_distance = 20
  //to_take, taken, complited, done

  this.quest_state = null
      this.have_quest = false;
  this.pop_up = true;
    this.znakY;
    this.licznik = 0;
    this.velocity = 0;
    this.gravity = 0.02
}
//stworz NPC
create(xx,yy,ww,hh){
  this.x = xx,this.y=yy,this.w=ww,this.h=hh;
this.npc = createSprite(this.x,this.y,this.w,this.h);
//this.npc.addImage(sprzedawca);
this.npc.setDefaultCollider();
this.npc.addImage(burmistrz);
this.npc.visible = true;
this.npc.debug = false;
npcss.add(this.npc);

this.circle = createSprite(this.npc.position.x,this.npc.position.y,this.w,this.w);
this.circle.setCollider("circle",0,0,this.attraction_distance);
this.circle.visible = false;
this.circle.debug = false
atention.add(this.circle);
this.znakY = this.y - 20;
      this.ziemia = this.y - 20;
}
  //stage quest [-1: nieaktywny, 0:aktywny, 1:zebrany, 2:wykonany]
//funkcje updatu
allF(){
  if (this.quest_state == "aktywny" || "wykonany"){
this.anim_signs();
this.quests();}
this.spotOn();
this.talk();
this.reset()
}

//dodaje oraz steruje questami NPC
quests(){
if (this.quest_state == 'aktywny'){
  this.znakWykrzyknik();
}

else if (this.quest_state == 'wykonany'){
this.znak_Zapytania();
}


}



//znacznik nad glowa NPC
znakWykrzyknik(){
    push();
    imageMode(CENTER);
    image(quest_1,this.x,this.znakY)
    pop();
}

//znacznik nad glowa NPC
znak_Zapytania(){
push();
imageMode(CENTER);
image(quest_2,this.x,this.znakY)
pop();
}

//okresla czy gracz wszedl w pole interakcji oraz wyswietla guzik akcji. Zwraca true
spotOn(){
if (gracz.player.overlap(this.circle)){
ui.akcja();
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


anim_signs(){
  this.licznik ++
  this.velocity += this.gravity
if (this.licznik > 200){
   this.velocity -= 0.5
   this.licznik = 0;
}
this.znakY += this.velocity
  if ( this.znakY > this.ziemia){
this.velocity = 0
this.znakY = this.y - 20;
}

}









}
