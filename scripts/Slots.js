class Slot{

constructor(value){
this.x
this.y
this.w
this.h
this.kolor = 100
this.angle
this.style
this.hold = value
this.amount = 1;
}


create(rodzaj,x,y,w,h,angle){
this.style = rodzaj, this.x = x, this.y = y, this.w = w,this.h = h, this.angle = angle;
// koło
  if (this.style == "circle"){
    push();
      fill(this.kolor)
      ellipse(this.x,this.y,this.w,this.h)
    pop();
  }
// kwadrat
else if ( this.style == "rect"){
push();
fill(this.kolor)
rect(this.x,this.y,this.w,this.h)
pop();
}
// owal
else if ( this.style == "oval"){
push();
fill(this.kolor)
rect(this.x,this.y,this.w,this.h,this.angle)
pop();
}

this.show();
this.mouseON();
this.click();
}


show(){
  push();
  if (this.hold != undefined){
    rect(this.x+this.w/2-10,this.y+5,20,20);
    textSize(8)
    textAlign(CENTER);
  text(this.hold.type,this.x,this.y+30,this.w,this.h)
line (this.x,this.y+38,this.x+this.w,this.y+38)
text(this.amount,this.x,this.y+40,this.w,this.h)}
  pop();
}

mouseON(){
if ( this.hold != undefined){
if ( mouseX > this.x && mouseX < this.x+this.w &&
     mouseY > this.y && mouseY < this.y+this.w){
       //console.log("ta")
rect(325, 100, 100,150);
textSize(12);
    textAlign(CENTER);
text("blablablablabla opis opis, ogolnie to wstawie tutaj pozniej opisy itemka   " +
"test item: " + this.hold.type,325,100,100,150)
return true;
     }
}
}

click(){
  //nie mam pomyslu
  if (this.mouseON()){
  if (mouseWentDown(LEFT)){
  //  console.log("no")
    return true;
  }
       }
}


blah(){




}
dClick(){
// use item

}

rClick(){
// menu kontekstowe
}

}
