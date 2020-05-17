class Loot_lvl{

//==================================================================================================
drop_lvl(lvl_temp, mob){
let target, lefel;
  lefel = lvl_temp
  target = mob;
  lvl.loot_bags_array.push(new Loot_bag(lefel, 3,3,target.x,target.y));
//console.log("added to array")
}

}
