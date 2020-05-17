class Item{
constructor(gold,amount,xx,yy,ww,hh){
  this.type = gold;
  this.amount = amount;
  if ( this.type == "health_potion"){
  this.value_buy = 100;
  this.value_sell = 200;
  this.graphic = rect(this.x+this.w/2-10,this.y+5,20,20);
}
if ( this.type == "sakiewka"){
this.value_buy = 25;
this.value_sell = 50;
this.graphic = rect(this.x+this.w/2-10,this.y+5,20,20);
}
if ( this.type == "blah"){
this.value_buy = 50;
this.value_sell = 75;
//rect(this.x+this.w/2-10,this.y+5,20,20);
}
  this.x = xx + random(-10,10), this.y = yy + random(-10,10), this.w = ww, this.h = hh
this.picked = false;
    this.item = createSprite(this.x,this.y,this.w,this.h);
  items.add(this.item);

}
allF(){
this.pickup();

}

pickup(){
  if(this.item.overlap(gracz.player)){
   // inventory.add_to();


    if (inventory.inv.length <= inventory.slots){


 for (let i = 0; i < inventory.inv.length; i++){
if(inventory.inv[i].length == 0){
  for (let j = 0; j < inventory.inv.length; j++){
           if (inventory.inv[j].length != 0){
             if (inventory.inv[j][0].type == this.type){
               inventory.inv[j].push(this);
              this.item.remove();
              this.picked = true;
              break;}
            break;}
          }
    inventory.inv[i].push(this);
    this.item.remove();
    this.picked = true;
           break;}
    else if (inventory.inv[i].length != 0){
       if (inventory.inv[i][0].type == this.type){
         inventory.inv[i].push(this);
        this.item.remove();
        this.picked = true;
        break;}
       }
    }


}
}
}

use(){
  if (this.type == "sakiewka"){
      console.log("+ " + this.amount + " money")
    inventory.money += this.amount;}

if (this.type == "health_potion"){
      console.log(" HP")
    if (gracz.hp < gracz.maxHP){
        console.log("+ " + this.amount + " HP")
  gracz.hp += this.amount;}}
return true;
}


test(){
  console.log("niuch")
}



}
