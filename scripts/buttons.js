// -----------------------costomowe guziki--------------------------
// 1/ tworzymy nowy guzik za pomoca zmiennej ( let guzik = new Button);
// 2/ dodajemy funkcje (guzik.create('figura',x,y,w,h,'text') gdzie podajemy parametry:
//                         'rect' - tworzy guzik w krztałcie kwadratu/prostokąta
//                         'circle' - tworzy owalny guzik
//                         pozycjaX,pozycjaY,szerokosc,długość
//                          string tekstu na guziku)
// 3/ guzik.kolor(r,g,b,alfa,zielone podswietlenie On/Off) // bez podania guzik bedzie biały
// 4/ guzik.pressed(guzik myszy, funkcja do aktywowania
//                                 (odwolanie do funkcji po nacisnieciu guzika)

class Button{
  constructor(){
this.color = (200 || this.kolor());
this.x;
this.y;
this.w;
this.h;
this.pressed = false;
this.lightOn = true;
this.state;
}
//=================================================================================
create(figura,xx,yy,ww,hh,txt,ts){
this.state = figura;
let tekst = txt;
this.x = xx, this.y = yy, this.w = ww, this.h = hh;
  this.ts = ts || this.w/7
if (this.state == 'rect'){
    push();
    stroke(255);
    strokeWeight(1);
    stroke(0)
    //noStroke();
      fill(this.color);
      rect(this.x,this.y,this.w,this.h);
    pop();
    push();
    fill(255);
    if (tekst != undefined){
    textSize(this.ts)
    textAlign(CENTER);
    text(tekst,this.x + this.w/2,this.y+ this.h/2 +4);}
    pop();
}else if (this.state == 'circle'){
    push();
    stroke(255);
    strokeWeight(2);
      fill(this.color);
      circle(this.x,this.y,this.w,this .h);
    pop();
    push();
    fill(255);
        if (tekst != undefined){
    textSize(this.w/7)
      textAlign(CENTER);
    text(tekst,this.x,this.y);}
    pop();
  }
}
//====================================================================================
kolor(rr,gg,bb,aa,light){
  this.lightOn = light
  if (this.pressed == true && this.lightOn == true){
    this.color = color(0,180,0);}
    else{
let r = rr, g = gg, b = bb, a = aa;
return this.color = color(r,g,b,a);
}}
//====================================================================================
Pressed(l,callback){
if (mouseWentDown(l) && this.mouseOnButton()){
  if (this.pressed == false){
        this.pressed = true;
      if (callback){
      return callback();}}
else {
  if (this.pressed == true){
      this.pressed = false;
      if (callback){
      return callback()}
          }
        }
    }
}

Pressed_true(l){
  if (mouseWentDown(l) && this.mouseOnButton()){
    if (this.pressed == false){
          this.pressed = true;
          return true;}
          else {
            if (this.pressed == true){
                this.pressed = false;
                  return true;}}
}
}
//======================================================================================
mouseOnButton(){
  if (this.state == 'rect'){
if (mouseX > this.x && mouseX < this.x + this.w &&
    mouseY > this.y && mouseY < this.y + this.h)
    {return true;}}
    if ( this.state == 'circle'){
let d = dist(mouseX,mouseY,this.x,this.y);
if (d < this.w/2){return true}
    }
}
//======================================================================================
}
