class Quest_log{

constructor(){
  this.menu = false;
  this.track = false;
  this.quest_list = [];
  //     for (let i = 0; i < 20; i++){
  // this.quest_list.push(i)}
  //this.buttons = [];
  this.slot_track = [];
    for (let i = 0; i < 20; i++){
      this.quest_list[i] = new Quest_slot();
    }
//dodatki
this.text_log; // zapisuje numer array wyswietlanego tekstu w quest logu
this.text_track; //zapisuje numer array wyswietlanego tekstu w tracku
this.show_min = 0;
this.show_max = 9;

}

allF(){
// this.show();
// this.splice();
// this.pres();
if (this.menu){
this.design();
  this.logo();}
}





show(){
this.quest_log();
this.quest_track();


}

design(){
  camera.off();
  push();
ui.quest_log();
    textFont(caveat_bold)
textSize(24);
text("Notatki: ",ui.ql_X+150,ui.ql_Y+80)
textSize(20);
text("Strona: ",ui.ql_X+280,ui.ql_Y+100)
let y = 40;
for (let i = this.show_min; i < this.show_max; i++){
    this.quest_list[i].create(ui.ql_X+80,ui.ql_Y+80+y,270,40);
    if (this.quest_list[i].hold != undefined){
        text(i+1,ui.ql_X+300,ui.ql_Y+100+y)
    }
    y += 40;
  }
pop();
camera.on();

}



logo(){
  for (let i = 0; i < this.quest_list.length; i++){
    if(this.quest_list[i].click()){
      turn_page.play();
      this.line1 = this.quest_list[i].hold.lines[4][0];
        this.line2 = this.quest_list[i].hold.lines[4][1];
          this.line3 = this.quest_list[i].hold.lines[4][2];
            this.line4 = this.quest_list[i].hold.lines[4][3];
      this.q_stat = this.quest_list[i].hold.stage
    }
  }
  if (this.line1 != null){
    push();
        textSize(20);
          textFont(caveat_font)
text("<Get_day>",ui.ql_X+420,ui.ql_Y+60,300,20)
text("<get_date&&clock>",ui.ql_X+550,ui.ql_Y+90,300,20)

text(this.line1,ui.ql_X+420,ui.ql_Y+120,300,400)
if (this.line2 != null){
text(this.line2,ui.ql_X+420,ui.ql_Y+300,300,100)
line(ui.ql_X+420,ui.ql_Y+330,ui.ql_X+500,ui.ql_Y+330)}

if (this.line3 != null){
text(this.line3,ui.ql_X+420,ui.ql_Y+340,300,100)
line(ui.ql_X+420,ui.ql_Y+370,ui.ql_X+560,ui.ql_Y+370)}

if (this.line4 != null){
text(this.line4,ui.ql_X+420,ui.ql_Y+380,300,100)
line(ui.ql_X+420,ui.ql_Y+410,ui.ql_X+560,ui.ql_Y+410)}

text("status: " + this.q_stat,ui.ql_X+420,ui.ql_Y+440,300,100)
pop();}
}













pres(){
for( let i = 0; i < this.quest_list.length; i++){
if (this.slot[i].Pressed_true(LEFT)){
  this.text_log = i;}
if (this.slot_track[i].Pressed_true(LEFT)){
  //  this.switch();
  this.text_track = i;}
}
}

switch(){

if (quest_log.track == false){quest_log.track = true}
else if (quest_log.track == true){quest_log.track = false}
}

splice(){
for (let i = 0; i < this.quest_list.length; i++){
  if(this.quest_list[i][1].stage == "zakonczony"){
    this.quest_list.splice(i,1);
    this.c -= 1;
    this.t = 0;
    break;}
}

}

quest_log(){

if (this.menu){
    camera.off();
  let u = ui.ql_Y;

ui.quest_log();

  if (this.quest_list.length != 0){
    if (this.text_log == undefined){
      this.text_log = 0;}

  push();
    fill(255);
    textSize(15);
    text(this.quest_list[this.text_log][1].lines[4][0],430,325,270,300);
  pop();}

for( let i = 0; i < this.quest_list.length; i++){
  if (this.quest_list[i].length != 0){
    this.slot[i].create("rect",200,u-30,178,30,this.quest_list[i][0],10)
    this.slot_track[i].create("rect",382,u-30,40,30,"TRACK",10);
  }
u += 30;
}
this.track = true;
camera.on();
}

}

quest_track(){

  if (this.track == true){
      camera.off();
      ui.quest_track();

      if (this.quest_list.length != 0){
        if (this.text_track == undefined){
          this.text_track = this.text_log;
        }

        push();
          fill("red");
          textSize(14)
          stroke(4)
          strokeWeight(8)
          text(this.quest_list[this.text_track][0],width-100,105,280,200);
        pop();

    push();
      fill(255);
      textSize(12);
      text(this.quest_list[this.text_track][1].lines[4][1],width-130,125,280,200);
    pop();}



  camera.on();
  }

}

add_to(quest){
  for (let i = 0; i < this.quest_list.length; i++){
    if (this.quest_list[i].hold == undefined){
      this.quest_list[i].hold = quest;
      break;
    }
}
}




}
