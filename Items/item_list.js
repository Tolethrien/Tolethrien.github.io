class Item_list{

constructor(){
this.save_inv = [];




}


save_file(){
  //this.test = JSON.stringify(this.save_inv)
  save(this.save_inv,"test.json")
}



save_inve(){
  for (let i = 0; i < inventory.slot.length; i++){
if (inventory.slot[i].hold != undefined){
  this.save_inv[i] = [inventory.slot[i].hold.save_data[0],inventory.slot[i].hold.save_data[1],inventory.slot[i].amount]}
  else if (inventory.slot[i].hold == undefined){
    this.save_inv[i] = [null,null,1]}
}
}
//  this.slot[2].hold = eval(`new ${this.save_inv[i][0]}(this.save_inv[i][1])`);
load_inv(){
  for (let i = 0; i < this.save_inv.length; i++){
    if (this.save_inv[i][0] != null){
    //  inventory.slot[i].hold = this.save_inv[i][0];
        inventory.slot[i].hold = eval(`new ${this.save_inv[i][0]}(this.save_inv[i][1])`);
        inventory.slot[i].amount = this.save_inv[i][2];}
      else if (this.save_inv[i] == null){
        inventory.slot[i].hold = undefined;}
    }
}

}
