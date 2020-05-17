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
this.item_list = [];
this.slot = [];
this.row = rows // rows
this.col = colm // colms
  this.ui_x = 125,this.ui_y=75,this.ui_w= 50 * this.row + 50, this.ui_h= 50 * this.col + 50;
this.slots_max = this.row * this.col; // zmien na slots
for (let i = 0; i < this.slots_max; i++){
  this.slot[i] = new Slot();}


//  this.slot[i] = new Button();}
// this.slot[0].hold = new Health_potion("small")
// this.slot[1].hold = new Drags("amphetamine")
// this.slot[2].hold = new Drags("klefedrone")
// this.slot[3].hold = new Health_potion("medium")
// this.slot[4].hold = new Health_potion("big")
// //this.slot[1].hold = new Item("health_potion",12,0,0,0,0)
// //this.slot[2].hold = new Item("lol",12,0,0,0,0)
// //this.slot[1].amount = 6;
// this.slot[0].amount = 2;
// //this.slot[2].amount = 2;


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
this.add_to_inv();
this.add_to_cont();
this.contex_menu();
this.show_item_info();}
if (gracz.menu == false){
inventory.contex_menu();}
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
        this.show_kont();
        this.show_inv();
        return true;
      }
  }
}

//============================ okno kufra ======================================
show_kont(){
//  let x = 125,y=75,w= 50 * this.row + 50, h= 50 * this.col + 50;
  camera.off();
 image(inside_chest,this.ui_x-35,this.ui_y+15);
 let xx = 0;
let yy = 0;
let swap = 1;
for (let i = 0; i < this.slot.length; i++){
  this.slot[i].create("rect",this.ui_x+25+xx,this.ui_y+25+yy,ui.slots_w,ui.slots_h)
//  this.slot[i].kolor(100,100,100);
  if (i == (this.row * swap) -1 ){
yy += ui.slots_h;
xx = -ui.slots_w;
swap ++;
  }
    xx += ui.slots_w;
}
camera.on();
}

show_item_info(){
for (let i = 0; i < this.slot.length; i++){
  this.slot[i].item_info();}

}

//======================== okno inventory =======================================
show_inv(){
//inventory.okno();
camera.off();
push();
let xx = 0;
let yy = 0;
let swap = 1;
for (let i = 0; i < inventory.slot.length; i++){
 inventory.slot[i].create("rect",this.ui_x-10+xx,this.ui_y+300+yy,ui.slots_w,ui.slots_h)
//  this.slot[i].kolor(100,100,100);
 if (i == (inventory.row * swap) -1 ){
yy += ui.slots_h;
xx = -ui.slots_w;
swap ++;
 }
   xx += ui.slots_w;
}
camera.on();
pop();




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
        //  console.log("use item: ", i, "guzik: ", j)
            this.slot[i].hold.use();
            this.take_block = false;
            if (this.slot[i].amount == 1){
                this.slot[i].hold = undefined;}
            else{this.slot[i].amount --}
                this.slot[i].gu();
              break;}

          else if (this.buttons[1].Pressed_true(LEFT)){
          //  console.log("test item: ", i, "guzik: ", j)
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
