class Seller extends Npc{

constructor(){
super();
this.attraction_distance = 20
this.xx = 100,this.yy = 100, this.ww = 700, this.hh = 300;
this.money = 200;

this.slot = [];
this.row = 4 // rows
this.col = 4 // colms

this.slots_max = this.row * this.col;
for (let i = 0; i < this.slots_max; i++){
  this.slot[i] = new Slot();}

this.trade_seller = [];
this.trade_player = [];

for (let i = 0; i < 12; i++){
  this.trade_seller[i] = new Slot();
  this.trade_player[i] = new Slot();
}

this.slot[0].hold = new Item("sakiewka",3,0,0,0,0)
this.slot[1].hold = new Item("health_potion",12,0,0,0,0)
this.slot[2].hold = new Item("lol",12,0,0,0,0)
this.slot[3].hold = new Item("ce",12,0,0,0,0)
this.slot[4].hold = new Item("me",12,0,0,0,0)
this.slot[5].hold = new Item("wu",12,0,0,0,0)
this.slot[1].amount = 6;
this.slot[0].amount = 2;
this.slot[2].amount = 2;
//rolka 1 - trade
this.roll_seller1 = 0;
this.roll_seller2 = 4

this.roll_player1 = 0;
this.roll_player2 = 4;

this.trade_seller_value = 0;
this.trade_player_value = 0;

this.finalize = new Button();
this.pres = false;

}

allF(){
  super.allF();
  //this.buy_sell_switch();

}

create(xx,yy,ww,hh){
super.create(xx,yy,ww,hh);
this.npc.addImage(sprzedawca);

}


okno(){
//if (this.talk()){
camera.off();
rect(this.xx,this.yy,this.ww,this.hh,40,40,40,40);

this.seller_okno();
this.gracz_okno();
this.trade();
this.mouseON_seller();
this.mouseON_player();
//----------------------

this.inv_to_trade();
this.trade_to_inv();
this.seller_to_trade();
this.trade_to_seller();
//---------------------

this.roll_seller();
this.roll_player();
//-----------------------------
this.finalize.create("rect",400,350,100,50,"Zaakceptuj",12)
this.finalize.kolor(0,40,0)
if (this.finalize.Pressed_true(LEFT)){
this.pres = true;
}
 this.finish_trade();
camera.on();
//}
}


seller_okno(){
  let xx = 0;
  let yy = 0;
  let swap = 1;
  for (let i = 0; i < this.slot.length; i++){
   this.slot[i].create("rect",this.xx+20+xx,this.yy+50+yy,50,50)
  //  this.slot[i].kolor(100,100,100);
   if (i == (this.row * swap) -1 ){
  yy += 50;
  xx = -50;
  swap ++;
   }
     xx += 50;
  }
}

gracz_okno(){
  let xx = 0;
  let yy = 0;
  let swap = 1;
  for (let i = 0; i < inventory.slot.length; i++){
   inventory.slot[i].create("rect",this.xx+480+xx,this.yy+50+yy,50,50)
  //  this.slot[i].kolor(100,100,100);
   if (i == (inventory.row * swap) -1 ){
  yy += 50;
  xx = -50;
  swap ++;
   }
     xx += 50;
  }
}


trade(){
  let y1 = 0;
    for (let i = this.roll_seller1; i < this.roll_seller2; i++){
      this.trade_seller[i].create("rect",this.xx+295,this.yy+50+y1,50,50)
      y1+=50;
  }

  let y2 = 0;
    for (let j = this.roll_player1; j < this.roll_player2; j++){
      this.trade_player[j].create("rect",this.xx+355,this.yy+50+y2,50,50)
      y2+=50;
  }
  textSize(12)
  text("suma: " + this.trade_seller_value ,370,130)
  textSize(12)
  text("suma: " + this.trade_player_value ,490,130)
}


inv_to_trade(){
if (move_item(inventory.slot,this.trade_player)){
    this.sum_value();
}

}

trade_to_inv(){
  if(move_item(this.trade_player,inventory.slot)){
    this.sum_value();}
}

seller_to_trade(){
//  move_item(this.slots,this.trade_seller)
    if ( move_item(this.slot,this.trade_seller)){
    //  console.log("tak")
      this.sum_value();

    }
}

trade_to_seller(){
  if(move_item(this.trade_seller,this.slot)){
    this.sum_value();
  }

}

roll_seller(){
  let wheelBlock;
for (let i = 0; i < this.trade_seller.length; i++){
  if (this.mouseON_seller()){
   if (wheelDOWN){
     for (let j = this.trade_seller.length-1; j > 0; j--){
       if (this.trade_seller[j].hold != undefined){
         wheelBlock = j;
         break;
       }
     }
  if(this.roll_seller2 < this.trade_seller.length && wheelBlock >= this.roll_seller2){
  this.roll_seller1 ++;
  this.roll_seller2 ++;}
  wheelDOWN = false;}
  else if (wheelUP){
 //console.log("UP",wheelUP)
  if(this.roll_seller1 > 0){
    this.roll_seller1 --;
    this.roll_seller2 --;}
 wheelUP = false;}
}
}

}

roll_player(){
  let wheelBlock;
for (let i = 0; i < this.trade_player.length; i++){
  if (this.mouseON_player()){
   if (wheelDOWN){
     for (let j = this.trade_player.length-1; j > 0; j--){
       if (this.trade_player[j].hold != undefined){
         wheelBlock = j;
         break;
       }
     }
  if(this.roll_player2 < this.trade_player.length && wheelBlock >= this.roll_player2){
  this.roll_player1 ++;
  this.roll_player2 ++;}
  wheelDOWN = false;}
  else if (wheelUP){
 //console.log("UP",wheelUP)
  if(this.roll_player1 > 0){
    this.roll_player1 --;
    this.roll_player2 --;}
 wheelUP = false;}
}
}

}


mouseON_seller(){
  if ( mouseX > this.xx+295 && mouseX < this.xx+295+50 &&
       mouseY > this.yy+50 && mouseY < this.yy+50+(50*4)){
         return true}

}

mouseON_player(){
  if ( mouseX > this.xx+355 && mouseX < this.xx+355+50 &&
       mouseY > this.yy+50 && mouseY < this.yy+50+(50*4)){
         return true}

}

sum_value(){
this.trade_seller_value = 0;
this.trade_player_value = 0;

for (let i = 0; i < this.trade_seller.length; i++){
if(this.trade_seller[i].hold != undefined){
    this.trade_seller_value +=  this.trade_seller[i].hold.value_buy * this.trade_seller[i].amount;}
  }

    for (let j = 0; j < this.trade_player.length; j++){
    if(this.trade_player[j].hold != undefined){
        this.trade_player_value +=  this.trade_player[j].hold.value_buy * this.trade_player[j].amount;}
}

}

finish_trade(){
//console.log(this.pres)
this.finish_trade_1();
this.finish_trade_2();

}



finish_trade_1(){
if ( this.pres == true){

      this.from = this.trade_seller;
      this.to = inventory.slot
  for (let i = 0; i < this.from.length; i++){
    while (this.from[i].hold != undefined){
        //if (this.from[i].click()){
            for ( let j = 0; j < this.to.length; j++){
                if (this.to[j].hold != undefined){
                  if (this.to[j].hold.type == this.from[i].hold.type){
                      this.to[j].amount ++;
                      if (this.from[i].amount == 1){
                          this.from[i].hold = undefined;}
                      else{this.from[i].amount --}
                      break;
                    }
                  }
                  else if (this.to[j].hold == undefined ){
                      if(j == this.to.length-1){
                        for (let k = 0; k < this.to.length; k++){
                             if (this.to[k].hold == undefined){
                               this.to[k].hold = this.from[i].hold;
                               if (this.from[i].amount == 1){
                                   this.from[i].hold = undefined;}
                               else{this.from[i].amount --}
                              break;
}}
}
}
}

    }
    if (i == this.from.length-1){
      this.trade_done = true;
    }
}
}
}

finish_trade_2(){
  if ( this.trade_done == true){

        this.from = this.trade_player;
        this.to = this.slot;
    for (let i = 0; i < this.from.length; i++){
      while (this.from[i].hold != undefined){
          //if (this.from[i].click()){
              for ( let j = 0; j < this.to.length; j++){
                  if (this.to[j].hold != undefined){
                    if (this.to[j].hold.type == this.from[i].hold.type){
                        this.to[j].amount ++;
                        if (this.from[i].amount == 1){
                            this.from[i].hold = undefined;}
                        else{this.from[i].amount --}
                        break;
                      }
                    }
                    else if (this.to[j].hold == undefined ){
                        if(j == this.to.length-1){
                          for (let k = 0; k < this.to.length; k++){
                               if (this.to[k].hold == undefined){
                                 this.to[k].hold = this.from[i].hold;
                                 if (this.from[i].amount == 1){
                                     this.from[i].hold = undefined;}
                                 else{this.from[i].amount --}
                                break;
  }}
  }
  }
  }

      }
      if (i == this.from.length-1){
        this.gold_trade();
        this.trade_seller_value = 0;
        this.trade_player_value = 0;
        this.trade_done = false;
        this.pres = false;

      }
  }
  }

}


gold_trade(){
  inventory.money -=  this.trade_seller_value;
  this.money -=  this.trade_seller_value;
  inventory.money +=   this.trade_player_value;
  this.money +=    this.trade_player_value;
}




}
