class Alt_seller extends Npc{

  constructor(){
  super();
  this.attraction_distance = 20
  this.xx = 100,this.yy = 100, this.ww = 800, this.hh = 400;
  this.money = 200;

  this.slot = [];
  this.row = 4 // rows
  this.col = 4 // colms

  this.slots_max = this.row * this.col;
  for (let i = 0; i < this.slots_max; i++){
    this.slot[i] = new Slot();}


this.profit = new Timer();           // pozwala handlarzowi zarabiac na siebie
this.profit_money = 50               // ustala utarg jaki handlarz zrobi w okreslonym czasie
this.profit.set_time(true,60)        // ustala czas co ile handlarz dostaje zastrzyk gotowki

  }


  allF(){
    super.allF();
this.seller_profit();
  }

  create(xx,yy,ww,hh){
  super.create(xx,yy,ww,hh);
  this.npc.addImage(sprzedawca);

  }

  okno(){
if (this.talk()){
  camera.off();
  push();
  rect(this.xx,this.yy,this.ww,this.hh,40,40,40,40);
  textSize(20);
  text(this.money,200,130);
  text(inventory.money,650,130)
  pop();
this.seller_okno();
this.gracz_okno();
this.player_sell();
this.seller_buy();

ui.item_info_layer(this);

ui.item_info_layer(inventory);

camera.on();
}
}

seller_okno(){
let xx = 0;
let yy = 0;
let swap = 1;
for (let i = 0; i < this.slot.length; i++){
 this.slot[i].create("rect",this.xx+20+xx,this.yy+50+yy,ui.slots_w,ui.slots_h)
//  this.slot[i].kolor(100,100,100);
 if (i == (this.row * swap) -1 ){
yy += ui.slots_h;
xx = -ui.slots_w;
swap ++;
 }
   xx += ui.slots_w;
}
}

gracz_okno(){
  let xx = 0;
  let yy = 0;
  let swap = 1;
  for (let i = 0; i < inventory.slot.length; i++){
   inventory.slot[i].create("rect",this.xx+480+xx,this.yy+50+yy,ui.slots_w,ui.slots_h)
  //  this.slot[i].kolor(100,100,100);
   if (i == (inventory.row * swap) -1 ){
  yy += ui.slots_h;
  xx = -ui.slots_w;
  swap ++;
   }
     xx += ui.slots_w;
  }
}

player_sell(){
if (sell_item(inventory,this)){
  inventory.money += curr_item.sell_prize
  this.money -= curr_item.sell_prize
console.log(curr_item);
}
}

seller_buy(){
if (sell_item(this,inventory)){

  this.money += curr_item.buy_prize
inventory.money -= curr_item.buy_prize
console.log(curr_item);
}
}



seller_profit(){
if (this.profit.time_out()){
  this.money += this.profit_money;
  this.profit.set_time(true,60)
    }
}






}
