class Inventory{

  constructor(){
this.money = 100;
this.menu = true;
this.slot = [];
this.row = 5 // rows
this.col = 5 // colms
this.slots_max = this.row * this.col; // zmien na slots
for (let i = 0; i < this.slots_max; i++){
  this.slot[i] = new Slot();}

  this.buttons = [];
  for (let i = 0; i < 2; i++){
    this.buttons[i] = new Button()
  }
  this.take_block = false;


  this.slot[0].hold = new Health_potion("small")
    this.slot[1].hold = new Health_potion("big")
      this.slot[2].hold = new Food("meat")
        this.slot[3].hold = new Drags("klefedrone")
 this.slot[0].amount = 98;


}



show(){
   if (gracz.menu == true){


//ui.slots_layer(ui.x+175,ui.y+40,ui.slots_w,ui.slots_h,this.slot,this.row,this.col)
//ui.slots_layer(this)
this.okno();
this.use_item();
ui.item_info_layer(this)
ui.contex_layer(this);
//this.contex_menu();
}
}


okno(){
   this.x = ui.char_info_x+369, this.y = ui.char_info_y+77, this.w = ui.slots_w, this.h = ui.slots_h
    camera.off();
    push();
    let xx = 0;
   let yy = 0;
   let swap = 1;
   for (let i = 0; i < this.slot.length; i++){
     this.slot[i].create("inventory",this.x+xx,this.y+yy,this.w,this.h)
     if (i == (this.row * swap) -1 ){
   yy += 91;
   xx = -91;
   swap ++;
     }
       xx += 91;
   }
      pop();
   camera.on();
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


sort_name(){
  this.sort_list = [];
 for (let i = 0; i < this.slot.length; i++){
   if (this.slot[i].hold != undefined){
   this.sort_list.push([this.slot[i].hold.name,this.slot[i].hold.save_data,this.slot[i].amount]);
}}
this.sort_list.sort();

for (let i = 0; i < this.sort_list.length; i++){
  inventory.slot[i].hold = eval(` new ${this.sort_list[i][1][0]}(this.sort_list[i][1][1])`);
    inventory.slot[i].amount = this.sort_list[i][2]
  }
}

sort_type(){
  this.sort_list = [];
 for (let i = 0; i < this.slot.length; i++){
   if (this.slot[i].hold != undefined){
   this.sort_list.push([this.slot[i].hold.sort_type,this.slot[i].hold.save_data,this.slot[i].amount]);
}}
this.sort_list.sort();

for (let i = 0; i < this.sort_list.length; i++){
  inventory.slot[i].hold = eval(` new ${this.sort_list[i][1][0]}(this.sort_list[i][1][1])`);
  inventory.slot[i].amount = this.sort_list[i][2]
  }
}



}
