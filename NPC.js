class Npc{

constructor(){
  this.x = 200,this.y = 300, this.w = 20, this.h = 20;
  this.quest = 'quest_1';
  this.attraction_distance = 20
  this.tak = new Button();
  this.nie = new Button();
  this.taken = false;
}

create(){
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

znak(){
  if (this.quest == 'quest_1'){
    push();
    quest_1.resize(60,40);
    imageMode(CENTER);
    image(quest_1,this.x,this.y-20)
    pop();
}





  if (this.quest == 'quest_2'){
push();
quest_2.resize(60,40);
imageMode(CENTER);
image(quest_2,this.x,this.y-20)
pop();
}
}

allF(){
this.znak();
this.spotOn();
this.talk();
this.reset();
}

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

okno(){
if (this.talk() && this.taken == false){
  camera.off();
  push();
  //  rectMode(CENTER);
   rect(200,50,400,300);
text("dobry człowieku, czy chciałys ruchać psa jak sra kiedy ja będę to nagrywał?",250,100,350,200);
pop();
this.tak.create('rect',210,280,100,30,'TAK')
 this.nie.create('rect',210,310,100,30,'NIE')
 this.tak.kolor(0,255,0);
 this.nie.kolor(255,0,0);
 this.tak.Pressed(LEFT,this.jass);
  this.nie.Pressed(LEFT,this.noo);

camera.on();
}

}

jass(){
lvl1.npc.taken = true;
lvl1.npc.quest = 'quest_2';

}
noo(){
lvl1.npc.taken = true;
}
reset(){
if (!gracz.player.overlap(this.circle)){
  lvl1.npc.taken = false;
}
}










}
