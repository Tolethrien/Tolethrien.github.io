class Contener{
// =================== konstruktor klasy ====================
constructor(rowss,colms,xx,yy){
  let x = xx;
  let y = yy;
  let rows = rowss
  let colm = colms
  this.x = x,this.y = y, this.w = 24, this.h = 24;
this.cont = createSprite(this.x,this.y,this.w,this.h);
this.cont.addImage(chest)
items.add(this.cont);
//this.item_list = [];
this.slot = [];
this.row = rows // rows
this.col = colm // colms

  this.ui_x = ui.contener_ui_poz_x,
  this.ui_y=ui.contener_ui_poz_y,
  this.ui_w= 50 * this.row + 50,
  this.ui_h= 50 * this.col + 50;

this.slots_max = this.row * this.col; // zmien na slots
for (let i = 0; i < this.slots_max; i++){
  this.slot[i] = new Slot();}


//  this.slot[i] = new Button();}
// this.slot[0].hold = new Health_potion("small")
// this.slot[1].hold = new Drags("amphetamine")
// this.slot[2].hold = new Drags("klefedrone")
// this.slot[3].hold = new Health_potion("medium")
// this.slot[4].hold = new Health_potion("big")

this.buttons = [];
for (let i = 0; i < 2; i++){
  this.buttons[i] = new Button()
}
this.take_block = false;


}





// =============== funkcje update ====================================
allF(){
    if (this.cont.removed == false){
if (this.integration()){
  this.open_ui();
}
}}

// ======================dodawanie itemkow do inventory======================
add_to_inv(){
            if (this.take_block == false){
move_item(this.slot,inventory.slot)
}

}

//======================== dodawanie itemkow do kontenera===========================
add_to_cont(){
      if (inventory.take_block == false){
move_item(inventory.slot,this.slot)
  }
}
//========================= integracja okien z graczem ==================================
integration(){
let d = dist(gracz.player.position.x,gracz.player.position.y,this.x,this.y)
//console.log(d);
  if (gracz.menu == false){
      if (d < this.w + 1 && actionKey){
        return true;
      }
  }
}

open_ui(){
  this.show_kont();
  ui.item_info_layer(this);
  ui.contex_layer(this);

  this.show_inv();
  ui.item_info_layer(inventory);
  ui.contex_layer(inventory);

  this.add_to_inv();
  this.add_to_cont();
}
//============================ okno kufra ======================================
show_kont(){
//  let x = 125,y=75,w= 50 * this.row + 50, h= 50 * this.col + 50;
  camera.off();
ui.conteiner_look("conteiner");
ui.slots_layer("rect",this.ui_x+25,this.ui_y+25,ui.slots_w,ui.slots_h,this.slot,this.row,this.col)
camera.on();

}

//======================== okno inventory =======================================
show_inv(){
camera.off();
ui.slots_layer("rect",this.ui_x-10,this.ui_y+300,ui.slots_w,ui.slots_h,inventory.slot,inventory.row,inventory.col)
camera.on();
  }


list_of(){
  this.table_array = [];
  for (let i = 0; i < this.slot.length; i++){
this.table_array[i] = [this.slot[i].hold,this.slot[i].amount];

  }
console.table(this.table_array);
this.table_array = [];
}

}
