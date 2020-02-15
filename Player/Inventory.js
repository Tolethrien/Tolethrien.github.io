class Inventory{

  constructor(){
this.menu = false;
this.inv = [
  []
            ]; // storuje itemki
this.slot = [] // numer slota na ktorym jest item
this.slot_use = [] // sprawdza ktory slot byl klikniety oraz używa tego slotu
this.slots = 16
this.text = [];
this.text2 = [];
//this.inv[0].push(this.item = new Item("health_potion",1,0,0,5,5))
for (let i = 0; i < this.slots; i++){
  this.slot[i] = new Button();}

}

show(){
  if (gracz.menu == true){
  this.x = ui.x+220, this.y = ui.y+100, this.w = 70
  camera.off();
    push();
//  ui.inventory_menu();
  textAlign(CENTER);
  fill(0);
  textSize(16 - (100 - this.w)/10 -4)
//100 - this.w
let c = 0 - (100 - this.w), v = 0 - (100 - this.w);

for (let i = 0; i < this.slot.length; i++){
  this.slot[i].create('rect',this.x+c,this.y+v,this.w,this.w);
  this.slot[i].kolor(204, 230, 255,20);

if (this.text[i] != undefined){
    text(this.text[i],this.x+c+2,this.y+v+this.w/2-25,this.w,this.w);
    text(this.text2[i],this.x+c+2,this.y+v+this.w/2-5,this.w,this.w);}

if (this.inv[i] != undefined){
    for (let j = 0; j < this.inv[i].length; j++){
        if (this.inv[i][j] != undefined){
            this.text[i]  = this.inv[i][0].type;
            this.text2[i] = this.inv[i].length;}
        if (  this.slot[i].Pressed_true(LEFT)){
            this.slot_use[i] = true;}
    }
}

if (i == 3 || i == 7 || i == 11){
  v += 100- (100 - this.w);
  c = -100;}
  c += 100 - (100 - this.w);
}

pop();
camera.on();
}
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
        this.text2[i] = undefined;}}
    else{null}}
}
set_slots(){
  if (this.inv.length < this.slots){
    this.inv.push([])
  }
}

}
