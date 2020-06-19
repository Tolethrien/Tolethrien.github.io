class Loot_lvl{

//==================================================================================================
drop_lvl(lvl_temp, mob){
let target, lefel;
  lefel = lvl_temp
  target = mob;
  lvl.loot_bags_array.push(new Loot_bag(lefel, 3,2,target.x,target.y));
//console.log("added to array")
}

set_random_loot(lvv,where){
  this.lvl = lvv
  this.list = where
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
  if (this.item_drop_roll >= 1){this.list.push(new Health_potion(this.item_power))}
  if (this.item_drop_roll > 2.5) {this.list.push(new Drags("klefedrone"))}
  if (this.item_drop_roll > 2.8) {this.list.push(new Drags("amphetamine"))}
break;


}
}

set_loot_bag(list,pos_dead){
  let set_list = list
  let pos = pos_dead

lvl.loot_bags_array.push(new Loot_bag(3,2,pos.x,pos.y));

for (let i = 0; i < set_list.length; i++){
  lvl.loot_bags_array[lvl.loot_bags_array.length-1].slot[i].hold = set_list[i];
}



}


}
