class Loot_lvl{

//=================================================================================================
lvl_1(mob){
let x,y,gold_value,target,potions;
target = mob;
gold_value = floor(random(25,80));
potions = floor(random(1,3));

this.item = new Item("sakiewka",gold_value,target.x,target.y,5,5);
lvl.items_array.push(this.item);

if (random(1) < 0.7){
for (let i = 0; i < potions; i++){
    this.item = new Item("health_potion",1,target.x,target.y,5,5);
      lvl.items_array.push(this.item);}}
}

//==================================================================================================
lvl_2(mob){
let x,y,gold_value,target,potions;
target = mob;
gold_value = floor(random(100,300));
potions = floor(random(2,6));

this.item = new Item("gold",gold_value,target.x,target.y,5,5);
lvl.items_array.push(this.item);

if (random(1) < 0.7){
for (let i = 0; i < potions; i++){
    this.item = new Item("health_potion",1,target.x,target.y,5,5);
      lvl.items_array.push(this.item);}}
}
//==================================================================================================


}
