class Items{
constructor(gold,value,xx,yy,ww,hh){
  this.type = gold;
  this.value = value;
  this.x = xx + random(-10,10), this.y = yy + random(-10,10), this.w = ww, this.h = hh

    this.item = createSprite(this.x,this.y,this.w,this.h);
  items.add(this.item);
  this.picked = false;


}
allF(){
this.pickup();

}

pickup(){
  if(this.item.overlap(gracz.player)){
    if (inventory.inv.length <= 8){
      if(this.type != "gold"){
          inventory.inv.push(this);
          this.item.remove();
          this.picked = true;}
      if(this.type == "gold"){
        console.log("+ " + this.value + " pyrków")
        gracz.money += this.value;
        this.item.remove();
        this.picked = true;}
      }

  }
}

use(){


if (this.type == "health_potion"){
    console.log("+ " + this.value + " HP")
  gracz.hp += this.value;}

}






}
