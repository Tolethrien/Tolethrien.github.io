class Fedex_Quests{

constructor(stage_,x_,y_,npc){
  this.odp_1 = new Button();
    this.odp_1.kolor(51, 0, 26);
  this.odp_2 = new Button();
    this.odp_2.kolor(31, 0, 36);
  this.odp_3 = new Button();
  this.odp_4 = new Button();
  let x = x_,y = y_;
  //stage quest [-1: nieaktywny, 0:aktywny, 1:zebrany, 2:wykonany]
  this.stage = stage_;
  this.target_pos = createVector(x,y);
  this.quest_giver = npc; //nazwa NPC

//dwuwymiarowa lista z tekstem
this.line = [
  ["witoj, pojdziesz tam? o,o tam!","pojde!",'Sam se idź'], // [0]
  ['ooo pojszedłeś, no dzięki nie? tu mosz złoto',"no dzieki,","tylko tyle?!"], // [1]
  [null],
  [null]
            ]

}
allF(){
  if (this.stage != -1){
  this.rozmowa();
   this.zadanie();
   this.odp1();
   this.odp2();
   this.odp3();
   this.odp4();}

}
rozmowa(){
// console.log(this.target_pos)
if (this.quest_giver.talk() == true){
  this.okno_rozmowy();
}

}

zadanie(){
  if (gracz.player.position.x > this.target_pos.x && gracz.player.position.y < this.target_pos.y){
    this.stage = 2;
    this.quest_giver.quest_state = "complited";}
  }


okno_rozmowy(){
  if (this.quest_giver.pop_up == true){

if (this.quest_giver.quest_state == 'to_take'){
this.talk_stage1();
}

if (this.quest_giver.quest_state == 'complited'){
this.talk_stage2();
}
}
}
odp1(){
  if (this.quest_giver.quest_state == 'to_take'){
        if(this.odp_1.Pressed_true()){
            this.quest_giver.quest_state = "taken";
            this.stage = 1
            this.quest_giver.pop_up = false;}}
  if (this.quest_giver.quest_state == 'complited'){
      if(this.odp_1.Pressed_true()){
            this.quest_giver.quest_state = 'done';
                this.quest_giver.have_quest = false;
              this.quest_giver.pop_up = false;}}

}
odp2(){
  if (this.quest_giver.quest_state == 'to_take'){
        if(this.odp_2.Pressed_true()){
          this.quest_giver.pop_up = false;}}
    if (this.quest_giver.quest_state == 'complited'){
          if(this.odp_2.Pressed_true()){
            this.quest_giver.have_quest = false;
            this.quest_giver.pop_up = false;}}
}
odp3(){

}
odp4(){

}


talk_stage1(){
  camera.off();
  push();
  //  rectMode(CENTER);
   fill(60);
   rect(500,50,400,300);
   fill(255);
  text(this.line[0][0],520,100,350,200);
  domek.resize(100,100)
      image(domek,700,100);
  pop();
  this.odp_1.create('rect',510,280,100,30,this.line[0][1])
   this.odp_2.create('rect',510,310,100,30,this.line[0][2])
  camera.on();
}
talk_stage2(){
  camera.off();
  push();
  //  rectMode(CENTER);
   fill(60);
   rect(500,50,400,300);
   fill(255);
   text(this.line[1][0],520,100,350,200);
   text("+100 Pyrków",560,160)
   pop();
   this.odp_1.create('rect',510,280,100,30,this.line[1][1])
    this.odp_2.create('rect',510,310,100,30,this.line[1][2])
   camera.on();}


}
