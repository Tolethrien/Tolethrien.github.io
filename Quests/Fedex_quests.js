// 1. nowy Fedex = nowy quest(stan poczatkowy,cel,quest giver)
//2.  nowy Fedex.story() - Podajemy array tekstu w formie [
                                                            // ["tekstNPC",'odp1','odp2','odp3','odp4']
                                                            // ["tekstNPC linia 2",'odp1','odp2','odp3','odp4']
                                                            // ["tekstNPC linia 3",'odp1','odp2','odp3','odp4']
                                                            // ]
//3 nowy Fedex.start(); - uruchamia wszystkie funkcje potrzebne do wygenerowania questa ( odbywa sie w draw)

class Fedex_Quests{

//stage początkowy, cel dostarczenia(npc,coordy), npc dajacy quest
constructor(store,stage_,x_,y_,npctarget,npc){
  this.odp_1 = new Button();   this.odp_1.kolor(51, 0, 26,50);
  this.odp_2 = new Button();   this.odp_2.kolor(51, 0, 26,50);
  this.odp_3 = new Button();   this.odp_3.kolor(51, 0, 26,50);
  this.odp_4 = new Button();   this.odp_4.kolor(51, 0, 26,50);
  this.x = x_,this.y = y_;
  //stage quest [-1: nieaktywny, 0:aktywny, 1:zebrany, 2:wykonany]
    if (store != "done"){
  this.stage = stage_;}
  this.target_pos = createVector(this.x,this.y);
    this.npc_target = npctarget;
  this.quest_giver = npc; //nazwa NPC
  if (this.stage == 'aktywny'){
    this.quest_giver.quest_state = 'to_take'
  this.quest_giver.have_quest = true;}
  //coordy i wielkosc gumpa rozmowy
  this.gumpX = 250,this.gumpY = 150, this.gumpW = 400, this.gumpH = 300;

//dwuwymiarowa lista z tekstem
this.line = [];

}
start(){
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

story(lines){
  this.t = []
  if(lines){
  this.line = lines}
  for (let i = 0; i < this.line.length; i++){
    this.t[i]=0;
if (this.line[i][2] == undefined){this.t[i] += 20;}
if (this.line[i][3] == undefined){this.t[i] += 20;}
if (this.line[i][4] == undefined){this.t[i] += 20;}
}
}


zadanie(){
  //dostan sie do koordynatów
  if (this.x != 0 && this.y != 0){
    if (gracz.player.position.x > this.target_pos.x && gracz.player.position.y > this.target_pos.y){
      this.stage = "wykonany";
      this.quest_giver.quest_state = "complited";}
  }
  //dostań się do odpowiedniego NPC
if (this.npc_target != undefined){
  if (gracz.player.overlap(this.npc_target.circle)){
    this.stage = "wykonany";
    this.quest_giver.quest_state = "complited";}

}

}


okno_rozmowy(){
  if (this.quest_giver.pop_up == true){
if (this.line == undefined){
  console.log("dodaj quest.story(story) w formie array")
  noLoop();
}
else if (this.stage == "aktywny"){
this.talk_stage1();
}

else if (this.stage == 'wykonany'){
this.talk_stage2();
}
}
}
odp1(){
  if (this.stage == 'aktywny'){
        if(this.odp_1.Pressed_true()){
            this.stage = "zebrany";
            this.quest_giver.quest_state = "taken"
            this.quest_giver.pop_up = false;}}

  if (this.stage == 'wykonany'){
      if(this.odp_1.Pressed_true()){
            this.quest_giver.quest_state = 'done';
            this.stage = "zakonczone"
                this.quest_giver.have_quest = false;
                gracz.money += 100;
              this.quest_giver.pop_up = false;}}

}
odp2(){
  if (this.stage == 'aktywny'){
        if(this.odp_2.Pressed_true()){
          console.log("ss")
          this.quest_giver.pop_up = false;}}

    if (this.stage == 'wykonany'){
          if(this.odp_2.Pressed_true()){
            this.quest_giver.quest_state = 'done';
            this.quest_giver.have_quest = false;
                  this.stage = "zakonczone"
              gracz.money += 100;
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
ui.dialog();
   fill(255);
  text(this.line[0][0],this.gumpX+10,this.gumpY+50,this.gumpW-10,this.gumpH);
  pop();
   this.odp_1.create('rect',this.gumpX,this.gumpY+this.gumpH-4*20+this.t[0],this.gumpW,20,this.line[0][1],15)
 if ( this.line[0][2] != null){
   this.odp_2.create('rect',this.gumpX,this.gumpY+this.gumpH-3*20+this.t[0],this.gumpW,20,this.line[0][2],15);}
   if ( this.line[0][3] != null){
   this.odp_3.create('rect',this.gumpX,this.gumpY+this.gumpH-2*20+this.t[0],this.gumpW,20,this.line[0][3],15);}
if (this.line[0][4] != null){
  this.odp_4.create('rect',this.gumpX,this.gumpY+this.gumpH-1*20+this.t[0],this.gumpW,20,this.line[0][4],15)}
  camera.on();
}
talk_stage2(){
  camera.off();
  push();
  //  rectMode(CENTER);
ui.dialog();
   fill(255);
  text(this.line[1][0],this.gumpX+10,this.gumpY+50,this.gumpW-10,this.gumpH);
   text("+100 Pyrków",this.gumpX+250,this.gumpY + 240)
   pop();
   this.odp_1.create('rect',this.gumpX,this.gumpY+this.gumpH-4*20+this.t[1],this.gumpW,20,this.line[1][1],15)
  if ( this.line[1][2] != undefined){
  this.odp_2.create('rect',this.gumpX,this.gumpY+this.gumpH-3*20+this.t[1],this.gumpW,20,this.line[1][2],15)}
  if ( this.line[1][3] != undefined){
  this.odp_3.create('rect',this.gumpX,this.gumpY+this.gumpH-2*20+this.t[1],this.gumpW,20,this.line[0][3],15);}
  if ( this.line[1][4] != undefined){
  this.odp_4.create('rect',this.gumpX,this.gumpY+this.gumpH-2*20+this.t[1],this.gumpW,20,this.line[0][3],15);}
   camera.on();}


}
