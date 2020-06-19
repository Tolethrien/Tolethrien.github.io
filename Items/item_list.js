class Item_list{

constructor(){
this.save_inv = [];




}


save_file(){
  //this.test = JSON.stringify(this.save_inv)
  save(this.save_inv,"test.json")
}

swap_id(){
  for (let i = 0; i < inventory.slot.length; i++){
    if (inventory.slot[i].hold != undefined){
switch(inventory.slot[i].hold){
  case 0:
  inventory.slot[i].hold = new Drags("amphetamine");
break;
  case 1:
  inventory.slot[i].hold = new Health_potion("medium");
  break;
  case 2:
  inventory.slot[i].hold = new Health_potion("big");
  break;
  case 3:
  inventory.slot[i].hold = new Health_potion("small");
break;
case 4:
inventory.slot[i].hold = new Drags("klefedrone");
break;
case 5:
inventory.slot[i].hold = new Food("meat");
break;
case 6:
inventory.slot[i].hold = new Food("cooked_meat");
break;
case 7:
inventory.slot[i].hold = new Drink("water");
break;
case 8:
inventory.slot[i].hold = new Drink("botteled_water");
break;
case 9:
inventory.slot[i].hold = new Drink("crystalized_water");
break;

}
}
}


}

save_inve(){
  for (let i = 0; i < inventory.slot.length; i++){
if (inventory.slot[i].hold != undefined){
  this.save_inv[i] = [inventory.slot[i].hold.id,inventory.slot[i].amount]}
  else if (inventory.slot[i].hold == undefined){
    this.save_inv[i] = [null,1]}
}
}

load_inv(){
  for (let i = 0; i < this.save_inv.length; i++){
    if (this.save_inv[i][0] != null){
      inventory.slot[i].hold = this.save_inv[i][0];
        inventory.slot[i].amount = this.save_inv[i][1];}
      else if (this.save_inv[i] == null){
        inventory.slot[i].hold = undefined;}
    }
this.swap_id();
}

}
