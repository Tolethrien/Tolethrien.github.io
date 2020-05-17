class Inventory{

  constructor(){
this.money = 100;
this.menu = false;
this.slot = [];
this.row = 4 // rows
this.col = 4 // colms
this.slots_max = this.row * this.col; // zmien na slots
for (let i = 0; i < this.slots_max; i++){
  this.slot[i] = new Slot();}

  this.buttons = [];
  for (let i = 0; i < 2; i++){
    this.buttons[i] = new Button()
  }
  this.take_block = false;
  //
  //
  // this.slot[0].hold = new Item("sakiewka",3,0,0,0,0)
  // this.slot[1].hold = new Item("health_potion",12,0,0,0,0)
  // this.slot[2].hold = new Item("lol",12,0,0,0,0)
  //   this.slot[3].hold = new Item("lola",12,0,0,0,0)
  //     this.slot[4].hold = new Item("lolu",12,0,0,0,0)
  //       this.slot[5].hold = new Item("lolo",12,0,0,0,0)
  //
  // this.slot[1].amount = 6;
  // this.slot[0].amount = 2;
  // this.slot[2].amount = 2;
}



show(){
   if (gracz.menu == true){

this.okno();
this.use_item();
this.contex_menu();
}
}


okno(){
   this.x = ui.x+175, this.y = ui.y+40, this.w = ui.slots_w, this.h = ui.slots_h
    camera.off();
    push();
    let xx = 0;
   let yy = 0;
   let swap = 1;
   for (let i = 0; i < this.slot.length; i++){
     this.slot[i].create("rect",this.x+xx,this.y+yy,this.w,this.h)
   //  this.slot[i].kolor(100,100,100);
     if (i == (this.row * swap) -1 ){
   yy += ui.slots_h;
   xx = -ui.slots_w;
   swap ++;
     }
       xx += ui.slots_w;
   }
   camera.on();
   pop();
}


use_item(){
    for (let i = 0; i < this.slot.length; i++){
  if (this.slot[i].click()){
      if (this.take_block == false){
 this.slot[i].hold.use();
 //console.log("dodalem")
 if (this.slot[i].amount == 1){
     this.slot[i].hold = undefined;}
 else{this.slot[i].amount --}
 break;}
    }
  }
}


contex_menu(){
    let y = 0;
    let name = "USE"
    for (let i = 0; i < this.slot.length; i++){
    //  console.log("loop, add inv ", i)
      if (this.slot[i].hold != undefined){
        this.slot[i].rClick();}

      if (this.slot[i].rPressed == true){
          this.take_block = true;
          for (let j = 0; j < 2; j++){
this.buttons[j].create("rect", this.slot[i].x+this.slot[i].w/2,this.slot[i].y+this.slot[i].h/2+y,70,30,name,10)
y += 30;
name = "TEST"
        if (this.buttons[0].Pressed_true(LEFT)){
          console.log("use item: ", i, "guzik: ", j)
              this.take_block = false;
            this.slot[i].hold.use();
                  if (this.slot[i].amount == 1){
                    this.slot[i].hold = undefined;}
                    else{this.slot[i].amount --}
                    this.slot[i].gu();
                      break;}

          else if (this.buttons[1].Pressed_true(LEFT)){
            console.log("test item: ", i, "guzik: ", j)
              this.slot[i].hold.test();
             this.take_block = false;
              this.slot[i].gu();
            break;}

          else if (mouseWentDown(LEFT) || mouseWentDown(RIGHT)){
            if (this.slot[i].mouseON() != true){
                 this.take_block = false;
              this.slot[i].gu();
              break;}

          }
          }
}

  }
}



}
