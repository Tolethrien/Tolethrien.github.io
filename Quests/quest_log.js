class Quest_log{

constructor(){
  this.menu = false;
this.track = false;
this.tick = new Button();
this.quest_list = [];

}

allF(){
this.show();
this.ad();

}

show(){
  if (this.menu){
camera.off();
push();
rect(200,200,300,300)
this.tick.create("rect",205,210,15,15,"x",10);
this.tick.kolor(0,0,0,255,true)
this.tick.Pressed(LEFT,this.switch)
if (this.quest_list.length != 0){
text(this.quest_list[0][1].lines[4][0],230,205,280,40)}
pop();
camera.on();
}



if (this.track == true){
  camera.off();
push();
fill(100,100)
rect(750,100,150,45,20)
fill("red");
textSize(14)
stroke(4)
strokeWeight(8)
text("miłe początki",780,105,135,20)
fill(255);
textSize(10)
noStroke()
strokeWeight(2)
if (this.quest_list.length != 0){
text(this.quest_list[0][1].lines[4][1],760,125,135,20)}
pop();
camera.on();
}
}

switch(){

if (quest_log.track == false){quest_log.track = true}
else if (quest_log.track == true){quest_log.track = false}
}

ad(){
for (let i = 0; i < quests.allQ.length; i++){

if(quests.allQ[i][1].stage == "zakonczony"){
  this.quest_list.splice(i,1);
  break;
}
}

}








}
