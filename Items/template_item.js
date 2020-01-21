class Items{
constructor(gold,value,xx,yy,ww,hh){
  this.type = gold;
  this.value = value;
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

    if (inventory.inv.length <= inventory.slots){

if (this.type == "gold"){
  inventory.inv[0].push(this);
        this.item.remove();
      this.picked = true;}


      if (this.type == "health_potion"){
        inventory.inv[1].push(this);
              this.item.remove();
            this.picked = true;}






}
}
}

use(){
  if (this.type == "gold"){
      console.log("+ " + this.value + " money")
    gracz.money += this.value;}

if (this.type == "health_potion"){
    console.log("+ " + this.value + " HP")
  gracz.hp += this.value;}

}






}
