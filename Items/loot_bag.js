class Loot_bag extends Contener{

constructor(lvle, rows,colms,xx,yy){
super(rows,colms,xx,yy);
this.cont.addImage(dead_bones)
this.opened = false;
this.lvl = lvle;
this.item_power;

switch(this.lvl){
case "common":
    this.item_drop_roll = random(0,2);
    this.item_power_roll = random(1)
      if(this.item_power_roll > 0.7){this.item_power = "medium"}else{this.item_power = "small"}
      if (this.item_drop_roll <= 1.5){this.slot[0].hold = new Health_potion(this.item_power)}
      if (this.item_drop_roll > 1.5) {this.slot[1].hold = new Drags("klefedrone")}
break;

case "rare":
this.item_drop_roll = random(0,3);
this.item_power_roll = random(1)
  if(this.item_power_roll > 0.7){this.item_power = "big"}else{this.item_power = "medium"}
  if (this.item_drop_roll >= 1){this.slot[0].hold = new Health_potion(this.item_power)}
  if (this.item_drop_roll > 2.5) {this.slot[1].hold = new Drags("klefedrone")}
  if (this.item_drop_roll > 2.8) {this.slot[2].hold = new Drags("amphetamine")}
break;


}



}

allF(){
super.allF();
  if (this.cont.removed == false){
this.remove_after_loot();}
//this.bag_open();

}



remove_after_loot(){
  if (this.cont.removed == false){
for (let i = 0; i < this.slot.length; i++){
  if(this.slot[i].hold != undefined){
    //console.log(i)
    break;}
    else if (i == this.slot.length -1 && this.slot[i].hold == undefined){
      this.cont.remove();
          console.log("usuwam")
          return true;
    }     }
      }
}

bag_open(){
if(this.integration()){
  this.opened = true;
} else {this.opened = false;}


}








}
