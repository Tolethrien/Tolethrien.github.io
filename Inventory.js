class Inventory{

  constructor(){
this.menu = false;
this.inv = [];
this.slot = []
for (let i = 0; i < 9; i++){
  this.slot[i] = new Button();}


}

show(){
  if (this.menu == true){
  this.x = 150, this.y = 150, this.w = 100
  camera.off();
    push();
  ui.inventory_menu();
  textAlign(CENTER);


//---------------------------------------------------------------------------------------------------
  this.slot[0].create('rect',this.x,this.y,this.w,this.w);
  if (this.inv[0] != undefined){
     text(this.inv[0].type,this.x,this.y,this.w,this.w);
     this.slot[0].Pressed(LEFT,this.cut);}
//---------------------------------------------------------------------------------------------------
  this.slot[1].create('rect',this.x+100,this.y,this.w,this.w)
    if (this.inv[1] != undefined){
       text(this.inv[1].type,this.x+100,this.y,this.w,this.w);
     this.slot[1].Pressed(LEFT,this.cut1)}
//----------------------------------------------------------------------------------------------------
  this.slot[2].create('rect',this.x+200,this.y,this.w,this.w)
    if (this.inv[2] != undefined){
      text(this.inv[2].type,this.x+200,this.y,this.w,this.w);
      this.slot[2].Pressed(LEFT,this.cut2)}
//---------------------------------------------------------------------------------------------------
  this.slot[3].create('rect',this.x,this.y+100,this.w,this.w)
    if (this.inv[3] != undefined){
      text(this.inv[3].type,this.x,this.y+100,this.w,this.w);
      this.slot[3].Pressed(LEFT,this.cut3)}
//-------------------------------------------------------------------------------------------------
  this.slot[4].create('rect',this.x+100,this.y+100,this.w,this.w)
    if (this.inv[4] != undefined){
      text(this.inv[4].type,this.x+100,this.y+100,this.w,this.w);
      this.slot[4].Pressed(LEFT,this.cut4)}
//--------------------------------------------------------------------------------------------------
  this.slot[5].create('rect',this.x+200,this.y+100,this.w,this.w)
    if (this.inv[5] != undefined){
       text(this.inv[5].type,this.x+200,this.y+100,this.w,this.w);
       this.slot[5].Pressed(LEFT,this.cut5)}
//---------------------------------------------------------------------------------------------------
  this.slot[6].create('rect',this.x,this.y+200,this.w,this.w)
    if (this.inv[6] != undefined){
      text(this.inv[6].type,this.x,this.y+200,this.w,this.w);
      this.slot[6].Pressed(LEFT,this.cut6)}
//----------------------------------------------------------------------------------------------------
  this.slot[7].create('rect',this.x+100,this.y+200,this.w,this.w)
    if (this.inv[7] != undefined){
      text(this.inv[7].type,this.x+100,this.y+200,this.w,this.w);
      this.slot[7].Pressed(LEFT,this.cut7)}
//------------------------------------------------------------------------------------------------------
  this.slot[8].create('rect',this.x+200,this.y+200,this.w,this.w)
    if (this.inv[8] != undefined){
       text(this.inv[8].type,this.x+200,this.y+200,this.w,this.w);
       this.slot[8].Pressed(LEFT,this.cut8)}
//-----------------------------------------------------------------------------------------------------
  fill(0);
  textSize(30)
pop();
camera.on();
}
}

cut(){
  inventory.inv[0].use();
    inventory.inv.splice(0,1)
}
cut1(){
inventory.inv[1].use();
  inventory.inv.splice(1,1);
}
cut2(){
  inventory.inv[2].use();
    inventory.inv.splice(2,1);
}
cut3(){
  inventory.inv[3].use();
    inventory.inv.splice(3,1)
}
cut4(){
  inventory.inv[4].use();
    inventory.inv.splice(4,1)
}
cut5(){
  inventory.inv[5].use();
    inventory.inv.splice(5,1)
}
cut6(){
  inventory.inv[6].use();
    inventory.inv.splice(6,1)
}
cut7(){
  inventory.inv[7].use();
    inventory.inv.splice(7,1)
}
cut8(){
  inventory.inv[8].use();
    inventory.inv.splice(8,1)
}

}
