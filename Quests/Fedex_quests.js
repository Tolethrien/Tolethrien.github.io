class Fedex_Quests{


  constructor(name,stage_,x_,y_,w_,h_,npctarget_,qgiver,qtaker){
//guziki
    this.odp_1 = new Button();   this.odp_1.kolor(51, 0, 26,50);
    this.odp_2 = new Button();   this.odp_2.kolor(51, 0, 26,50);
    this.odp_3 = new Button();   this.odp_3.kolor(51, 0, 26,50);
    this.odp_4 = new Button();   this.odp_4.kolor(51, 0, 26,50);
//npc's
    this.quest_giver = qgiver;
    if (this.quest_giver != null){
      this.quest_giver.have_quest = true;
      this.quest_giver.quest_state = "aktywny"
    }
    this.quest_taker = qtaker;
//sprite celu drogi lub NPC cel
    this.x = x_,this.y = y_,this.w = w_,this.h = h_;
    this.npc_target = npctarget_;
//stage questa
    this.stage = stage_;

//dodatki
    this.nazwa = name;
    this.overlaped = false;
    this.lines = [];
    this.story(json_story[this.nazwa]);
    this.created = false;

    //nagrody itp.
    this.prize = 0;
      quests.allQ.push([this.nazwa,this])
}

start(){
switch(this.stage){
case "nieaktywny":
      break;
case "aktywny":
      break;
case "zebrany": this.zadanie();
      break;
case "wykonany":
      break;
}
}
rozmowa(){

  if (this.quest_giver.talk() == true){
  this.okno_rozmowy();}

  else if (this.quest_taker.talk() == true){
  this.okno_rozmowy();}

  else{this.anim_reset();}

}

okno_rozmowy(){
  if (this.quest_giver.pop_up == true){
    if (this.lines == undefined){
      console.log("dodaj Json z tekstem")
      noLoop();}


  else if (this.stage == "aktywny"){
    if (this.quest_giver.talk() == true){
      this.talk_aktywny();}}

  else if (this.quest_taker.pop_up == true){
    if (this.stage == 'wykonany'){
          if (this.quest_taker.talk() == true){
      this.talk_wykonany();}}
    }
  }
}


talk_aktywny(){
  camera.off();
  ui.dialog();
  if (ui.startX <= ui.gumpX){
  //console.log(ui.startX,ui.gumpX)
  ui.startX += ui.anim_speed;}

  push();
    fill(255);
    text(this.lines[0][0],ui.startX+10,ui.startY+50,ui.gumpW-10,ui.gumpH);
  pop();

  this.odp_1.create('rect',ui.startX,ui.gumpY+ui.gumpH-4*20+this.t[0],ui.gumpW,20,this.lines[0][1],15)
        if(this.odp_1.Pressed_true()){
            this.stage = "zebrany";
            this.quest_giver.quest_state = "zebrany"
            this.quest_giver.pop_up = false;
            this.anim_reset();
            this.add_quest_log();}


  if ( this.lines[0][2] != null){
   this.odp_2.create('rect',ui.startX,ui.gumpY+ui.gumpH-3*20+this.t[0],ui.gumpW,20,this.lines[0][2],15);
         if(this.odp_2.Pressed_true()){
           this.quest_giver.pop_up = false;}}

  if ( this.lines[0][3] != null){
   this.odp_3.create('rect',ui.startX,ui.gumpY+ui.gumpH-2*20+this.t[0],ui.gumpW,20,this.lines[0][3],15);}

 if (this.lines[0][4] != null){
  this.odp_4.create('rect',ui.startX,ui.gumpY+ui.gumpH-1*20+this.t[0],ui.gumpW,20,this.lines[0][4],15)}

  camera.on();
}

talk_wykonany(){
  camera.off();
  ui.dialog();
  if (ui.startX <= ui.gumpX){
  //console.log(ui.startX,ui.gumpX)
  ui.startX += ui.anim_speed;}

  push();
   fill(255);
   text(this.lines[1][0],ui.startX+10,ui.startY+50,ui.gumpW-10,ui.gumpH);
   text("+ " + this.prize + " Pyrków",ui.gumpX+250,ui.gumpY + 240)
  pop();

   this.odp_1.create('rect',ui.startX,ui.gumpY+ui.gumpH-4*20+this.t[1],ui.gumpW,20,this.lines[1][1],15)
          if(this.odp_1.Pressed_true()){
              this.stage = "zakonczony"
              this.quest_giver.quest_state = "zakonczony";
              this.quest_taker.quest_state =  null;
              this.quest_giver.have_quest = false;;
              gracz.money += this.prize
              this.quest_taker.pop_up = false;
            this.anim_reset();}


  if ( this.lines[1][2] != undefined){
  this.odp_2.create('rect',ui.gumpX,ui.gumpY+ui.gumpH-3*20+this.t[1],ui.gumpW,20,this.lines[1][2],15)
          if(this.odp_2.Pressed_true()){
              this.stage = "zakonczony"
              this.quest_giver.quest_state = "zakonczony";
              this.quest_taker.quest_state =  null;
              this.quest_giver.have_quest = false;
              gracz.money += this.prize;
              this.quest_taker.pop_up = false;
            this.anim_reset();}}

  if ( this.lines[1][3] != undefined){
  this.odp_3.create('rect',ui.gumpX,ui.gumpY+ui.gumpH-2*20+this.t[1],ui.gumpW,20,this.lines[0][3],15);}

  if ( this.lines[1][4] != undefined){
  this.odp_4.create('rect',ui.gumpX,ui.gumpY+ui.gumpH-2*20+this.t[1],ui.gumpW,20,this.lines[0][3],15);}

  camera.on();
}

story(lines){
  this.t = []
  if(lines){
  this.lines = lines}
  for (let i = 0; i < this.lines.length-1; i++){
    this.t[i]=0;
if (this.lines[i][2] == undefined){this.t[i] += 20;}
if (this.lines[i][3] == undefined){this.t[i] += 20;}
if (this.lines[i][4] == undefined){this.t[i] += 20;}
}
}

zadanie(){
  //dostan sie do koordynatów
  if (this.x != 0 && this.y != 0 && this.created == false){
    this.target = createSprite(this.x,this.y,this.w,this.h)
    this.target.visible = false;
    this.target.debug = true;
    this.created = true;}
if (this.x != 0 && this.y != 0){
    if (gracz.player.overlap(this.target)){
      this.stage = "wykonany";
      this.quest_taker.quest_state = "wykonany";
    this.target.remove();}}

  //dostań się do odpowiedniego NPC
if (this.npc_target != null && this.stage == "zebrany"){
  if (gracz.player.overlap(this.npc_target.circle) && this.overlaped == false){
    this.overlaped = true;
    this.stage = "wykonany";
    this.quest_taker.quest_state = "wykonany";}
}
}

anim_reset(){
ui.startX = -200, ui.startY = 250, ui.startW = 300, ui.startH = 300;

}

add_quest_log(){
quest_log.quest_list.push([this.nazwa,this])
}

}
