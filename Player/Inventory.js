class Inventory{

  constructor(){

this.menu = false;
this.slot = [];
this.row = 4 // rows
this.col = 4 // colms
this.slots_max = this.row * this.col; // zmien na slots
for (let i = 0; i < this.slots_max; i++){
  this.slot[i] = new Slot();}

}



show(){
   if (gracz.menu == true){
this.okno();
}
}


okno(){
   this.x = ui.x+220, this.y = ui.y+100, this.w = 50
    camera.off();
    push();
    let xx = 0;
   let yy = 0;
   let swap = 1;
   for (let i = 0; i < this.slot.length; i++){
     this.slot[i].create("rect",this.x+xx,this.y+yy,this.w,this.w)
   //  this.slot[i].kolor(100,100,100);
     if (i == (this.row * swap) -1 ){
   yy += 50;
   xx = -50;
   swap ++;
     }
       xx += 50;
   }
   camera.on();
   pop();
}


cut(){
  for (let i = 0; i < this.slots; i++){
    if (this.slot_use[i] == true){
        this.inv[i][this.inv[i].length-1].use();
          //  console.log(j);
        this.inv[i].splice(this.inv[i].length-1,1)
        this.slot_use[i] = undefined
      if (this.inv[i] == 0){
        this.text[i] = undefined;
        this.text2[i] = undefined;
      this.inv.splice(i,1)
    this.text.splice(i,1)
      this.text2.splice(i,1);}}
    else{null}}
}
set_slots(){
  if (this.inv.length < this.slots){
    this.inv.push([])
  }
}

}
