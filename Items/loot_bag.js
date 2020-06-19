class Loot_bag extends Contener{

constructor(rows,colms,xx,yy){
super(rows,colms,xx,yy);
this.cont.addImage(dead_bones)
this.opened = false;
this.item_power;
this.pos_set = false;

}



allF(){
//super.allF();
  if (this.cont.removed == false){
this.remove_after_loot();
if (this.integration()){
  if (this.opened == true){
this.show_kont();
this.add_to_inv();
ui.item_info_layer(this);
ui.contex_layer(this);
ui.move_loot_bag();
}}
this.bag_open();
//this.bag_open();
}
}



remove_after_loot(){
  if (this.cont.removed == false){
for (let i = 0; i < this.slot.length; i++){
  if(this.slot[i].hold != undefined){
    //console.log(i)
    break;}
    else if (i == this.slot.length -1 && this.slot[i].hold == undefined){
      this.cont.remove();
        //  console.log("usuwam")
          return true;
    }     }
      }
}

bag_open(){
  //console.log(this.opened)
if(!this.integration()){
 this.opened = false;}


}

show_kont(){

  this.ui_x = ui.loot_bag_ui_poz_x,
  this.ui_y=ui.loot_bag_ui_poz_y,
  this.ui_w= 50 * this.row + 50,
  this.ui_h= 50 * this.col + 50;
  camera.off();
ui.conteiner_look("corpse",this.ui_x+15,this.ui_y);
ui.slots_layer("rect_cut",this.ui_x+25,this.ui_y+25,ui.slots_w,ui.slots_h,this.slot,this.row,this.col)
camera.on();
}






}
