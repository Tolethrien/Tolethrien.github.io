class Inventory{

  constructor(){
this.menu = false;
this.inv = [
  [],[],[],[],[],[],
            ]; // storuje itemki
this.slot = [] // numer slota na ktorym jest item
this.slot_use = [] // sprawdza ktory slot byl klikniety oraz używa tego slotu
this.slots = 16
this.text = [];
this.text2 = [];
for (let i = 0; i < this.slots; i++){
  this.slot[i] = new Button();}
    this.suma = 0;


}

show(){
  if (this.menu == true){
  this.x = 150, this.y = 150, this.w = 100
  camera.off();
    push();
//  ui.inventory_menu();
  textAlign(CENTER);
  fill(0);
  textSize(16)

let c = 0, v = 0;

for (let i = 0; i < this.slot.length; i++){
  this.slot[i].create('rect',this.x+c,this.y+v,this.w,this.w);
  this.slot[i].kolor(150,220,70,100);

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
  v += 100;
  c = -100;}
  c += 100;
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

}
