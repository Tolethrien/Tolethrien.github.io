class Lvl1{
constructor(){
  this.loot_bags_array = [];

    this.walls();
    this.obj();
    this.teleports();
    this.drzewa();
    this.kameraborder();
    this.wrogowie();
    this.mutant = new Mutant();
  //  this.spawner = new Spawner(Mutant,2,10);
  //  this.spawner.create(0,100,20,40)
    this.mutant.create(0,80,14,14);
//this.test = JSON.stringify(inventory.slot[0].hold)
//this.json = {
  //"array": []
//}
// this.stest = inventory.slot.toString();
//   //this.test = tostring()
//   this.json.array.push(this.stest)
//   //saveJSON(this.json,"array")
//   this.test  = String(potion)
//this.test = JSON.stringify(inventory.slot[0].hold)
//save(this.test,"test.json")
}
//=============================================================================================
leyer_3(){
this.mutant.allFunctions();
//this.spawner.allF();
//console.log(JSON.parse(this.test))
for (let i = 0; i < this.loot_bags_array.length; i++){
  this.loot_bags_array[i].allF();
  if (this.loot_bags_array[i].cont.removed == true){
    this.loot_bags_array.splice(i,1);
}

for (let i = 0; i < this.loot_bags_array.length; i++){
    if (this.loot_bags_array[i].opened  == true){
      break;}
    else if (i == this.loot_bags_array.length -1){
      for (let j = 0; j < this.loot_bags_array.length; j++){
          if (this.loot_bags_array[j].integration()){
            this.loot_bags_array[j].opened  = true;
            break;}
          }
        }
      }

}
}




bg(){


//trawa.resize(900,600);
//  trawa.resize(1300,1200)
  //bg.add(this.image)
}
//=============================================================================================
walls(){
//sciany

}
//=============================================================================================
obj(){
// dom(resizeX,resizeY,posX,posY,width,height,image_bot,image_top,collider)

}
//=============================================================================================
teleports(){

}
//=============================================================================================
drzewa(){

}
//=============================================================================================
telPoz(){

}
//=============================================================================================
kameraborder(){

}
//=============================================================================================
wrogowie(){

}

updatelvl(){


}

update_lvl(){

}

}
