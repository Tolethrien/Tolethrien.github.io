class Seller extends Npc{

constructor(){
super();
this.attraction_distance = 20
//constractor
this.buy_items = [
                  [],
                  []
                ];
this.sell_items = [];
this.slot = [];
this.side = "buy"
this.buy = new Button();   this.buy.kolor(51, 0, 26,50);
this.sell = new Button();   this.sell.kolor(51, 0, 26,50);
this.buy_items[0].push(this.item = new Item("health_potion",1,0,0,5,5))
this.buy_items[0].push(this.item = new Item("health_potion",1,0,0,5,5))
this.buy_items[1].push(this.item = new Item("blah",1,0,0,5,5))
this.buy_items[1].push(this.item = new Item("blah",1,0,0,5,5))
this.buy_items[1].push(this.item = new Item("blah",1,0,0,5,5))
for (let i = 0; i < 5; i++){
  this.slot[i] = new Button();   this.slot[i].kolor(51, 0, 26,50);
}

}

allF(){
  super.allF();
  this.buy_sell_switch();
  switch(this.side){
    case "buy":   this.add_to_inv();
    break;
    case "sell": this.sell_to_store();
    break;
  }
}
okno(){
  if (this.talk()){
  camera.off();
  ui.dialog();
  line(ui.gumpX+ui.gumpW/2,ui.gumpY,ui.gumpX+ui.gumpW/2,ui.gumpY+ui.gumpH)
    this.buy.create('rect',ui.gumpX,ui.gumpY,ui.gumpW/2,30,"Kup",16);
    this.sell.create('rect',ui.gumpX+ui.gumpW/2,ui.gumpY,ui.gumpW/2,30,"Sprzedaj",16);
  let y = ui.gumpY+30;

if (this.side == "buy"){
for (let i = 0; i < 5; i++){
  this.slot[i].create('rect',ui.gumpX,y,ui.gumpW/2-20,30);
y += 30
}
 y = ui.gumpY+45;
for (let i = 0; i < this.buy_items.length; i++){
  if (this.buy_items[i].length != 0){
  text(this.buy_items[i][0].type,ui.gumpX+10,y)
  text(this.buy_items[i].length,ui.gumpX +185,y)
  y+= 30;
}}}
if (this.side == "sell"){
for (let i = 0; i < 5; i++){
  this.slot[i].create('rect',ui.gumpX+ui.gumpW/2,y,ui.gumpW/2-20,30);
y += 30
}
 y = ui.gumpY+45;
for (let i = 0; i < inventory.inv.length; i++){
  if (inventory.inv[i].length != 0){
  text(inventory.inv[i][0].type,ui.gumpX+ui.gumpW/2+10,y)
  text(inventory.inv[i].length,ui.gumpX+ui.gumpW/2 +185,y)
  y+= 30;}
}}
  camera.on();
}
}

buy_sell_switch(){
  if (this.buy.Pressed_true(LEFT)){
this.side = "buy"
  }
  if (this.sell.Pressed_true(LEFT)){
this.side = "sell"
  }
}

add_to_inv(){
for (let h = 0;  h < this.slot.length; h++){
      if (this.slot[h].Pressed_true()){
            if (h < this.buy_items.length){
        if (this.buy_items[h].length != 0){

if (inventory.inv.length <= inventory.slots){
        console.log(this.buy_items[h][0].type);
        for (let i = 0; i < inventory.inv.length; i++){
          if(inventory.inv[i].length != 0){
             if (inventory.inv[i][0].type == this.buy_items[h][0].type){
            console.log(this.buy_items[h][0].type);
              inventory.inv[i].push(this.buy_items[h][0])
                 this.buy_items[h].splice(0,1);
                 if (this.buy_items[h].length == 0){
                   this.buy_items.splice(h,1);}
            break;}
            }
            else if (inventory.inv[i].length == 0 ){
                  inventory.inv[i].push(this.buy_items[h][0]);
                     this.buy_items[h].splice(0,1);
                     if (this.buy_items[h].length == 0){
                       this.buy_items.splice(h,1);}
            break;}
          }
      }
    }
   }
  }
 }
}

sell_to_store(){
  for (let h = 0;  h < this.slot.length; h++){
        if (this.slot[h].Pressed_true()){
              if (h < inventory.inv.length){
          if (inventory.inv[h].length != 0){
            console.log("pyk")
            inventory.inv[h].splice(-1,1);
            if (inventory.inv[h].length == 0){
             inventory.inv.splice(-1,1);
          inventory.text.splice(-1,1)
         }
}
}
}}



}




}
