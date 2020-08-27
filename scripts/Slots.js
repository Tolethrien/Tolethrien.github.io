class Slot{

constructor(value){
this.x,this.y,this.w,this.h,this.r;  // pozycja slotu ustawiana w create();
this.kolor = 100 // kolor slotu ustawiana w kolor();
this.style; // ustawiac bedzie wizualny kształt slotu
this.hold = value // zmienna okreslajaca czy slot "trzyma" jakis przedmiot obecnie
this.amount = 1; // ilosc danego przedmiotu w slocie (a.k.a ilosc tego itemka :) )
this.rPressed = false; // zmienna sprawdzajaca czy prawy myszy zostal klikniety (blokada 2 kliku na przedmiot)
//this.test = 1;
}

//========================================================================================
create(rodzaj,x,y,w,h,angle){
this.style = rodzaj;
this.x = x, this.y = y, this.w = w,this.h = h;
this.r = angle;

// koło
  if (this.style == "circle"){
    push();
      fill(this.kolor)
      ellipse(this.x,this.y,this.w,this.h)
    pop();
  }

// kwadrat
else if ( this.style == "inventory"){
push();
noStroke();
fill(this.kolor,100)
rect(this.x,this.y,this.w,this.h)
pop();
}

else if (this.style == "rect" ){
push();
fill(this.kolor,100)
rect(this.x,this.y,this.w,this.h)
pop();
}

else if (this.style == "rect_cut" ){
push();
fill(this.kolor,0)
rect(this.x,this.y,this.w,this.h,20)
pop();
}

// owal
// else if ( this.style == "oval"){
// push();
// fill(this.kolor)
// rect(this.x,this.y,this.w,this.h,this.angle)
// pop();
// }
//---------------------------------------------------------------------------
//funkcje dodatkowe wgrywane wraz z pojawieniem sie slotu na ekranie
 this.show();
// this.mouseON();
// this.click();
// this.rClick();
// this.gu();
}

//=======================================================================================
show(){
    if (this.hold != undefined){
switch(this.style){
case "rect":
push();
imageMode(CENTER);
  image(this.hold.graphic,this.x+this.w/2,this.y+this.h/2) // grafika przedmiotu (lub placeholder)
  textSize(15)
  strokeWeight(1)
  fill(255, 255, 153,150)
  text(this.amount,this.x+55,this.y+65) // ilosc w slocie
pop();
break;
// case "inventory":               // stare inventory z nazwa itemka i iloscia
// push();
// imageMode(CENTER);
//   image(this.hold.graphic,this.x+this.w/2,this.y+20) // grafika przedmiotu (lub placeholder)
//   textSize(10)
//   textAlign(CENTER);
//   fill(255);
//   text(this.hold.name,this.x,this.y+35)// nazwa przedmiotu
//   stroke(255);
//   strokeWeight(1)
//   line (this.x,this.y+58,this.x+this.w,this.y+58)
//   strokeWeight(0)
//   rectMode(RADIUS)
//   text(this.amount,this.x,this.y+62) // ilosc w slocie
pop();
break;
case "inventory":       // nowe inventory
push();
imageMode(CENTER);
  image(this.hold.graphic,this.x+this.w/2,this.y+this.h/2) // grafika przedmiotu (lub placeholder)
  textSize(15)
  strokeWeight(1)
  fill(255, 255, 153,150)
  text(this.amount,this.x+55,this.y+65) // ilosc w slocie
pop();
break;
case "rect_cut":
push();
imageMode(CENTER);
  image(this.hold.graphic,this.x+this.w/2,this.y+this.h/2) // grafika przedmiotu (lub placeholder)
  textSize(15)
  strokeWeight(1)
  fill(255, 255, 153,150)
  text(this.amount,this.x+55,this.y+65) // ilosc w slocie
pop();
break;
}
}

}
//=======================================================================================
mouseON(){
  // sprawdza czy myszka znajduje sie na slocie
if ( this.hold != undefined){
if ( mouseX > this.x && mouseX < this.x+this.w &&
     mouseY > this.y && mouseY < this.y+this.h){
return true;}
      }
}

mouseON_empty_slot(){
  // sprawdza czy myszka znajduje sie na slocie
if ( mouseX > this.x && mouseX < this.x+this.w &&
     mouseY > this.y && mouseY < this.y+this.h){
return true;}
}
//=========================================================================================
click(){
  //używa itemka lub przenosi do skrzyni/inventory (odpala akcje lewego myszy)
if (this.mouseON()){
  if (mouseWentDown(LEFT)){
    if (this.rPressed == false){
      return true;}
     }
  }
}

//=======================================================================================
item_info(){
  // wyswietla ekran z informacjami o przedmiocie
if (this.mouseON()){
  push();
  //rect(325, 100, 100,150);
//  image(scroll_info,this.x+this.w+70,this.y - 50)
fill(20, 20, 57,180)
strokeWeight(2);
switch(this.hold.quality){
  case "common": stroke(100,100,100); break;
    case "rare": stroke(0, 255, 0); break;
    case "epic": stroke(204, 51, 153); break;
    case "legendary": stroke(255, 153, 51); break;

}
rect(this.x+this.w+70,this.y-50,155,300,10,10,10,10)
fill(255)
stroke(0, 153, 51)
strokeWeight(1)
  textSize(12);
  textAlign(CENTER);
  text(this.hold.name,this.x+this.w+70+75,this.y-30)
  text(this.hold.description,this.x+this.w+75,this.y+20,150,150)
  fill(0, 163, 139)
  text("Typ: " + this.hold.type,this.x+this.w+70+75,this.y-10)
  fill(0, 153, 51)
  stroke(0, 153, 51)
  strokeWeight(1)
    text("USE: " + this.hold.use_info,this.x+this.w+75,this.y+100,150,150)
    fill(255)
  text("Wartość: " + this.hold.buy_prize + " Pyrków",this.x+this.w+75,this.y+170,150,150)




  pop();
}


}

//====================================================================================
dClick(){
// use item
//setTimeout(this.test,1000)

}
//===================================================================================
rClick(){
// menu kontekstowe
if (this.mouseON()){
  if(mouseWentDown(RIGHT)){
    this.dClick();
    this.rPressed = true;
    return true;
   }
}
}
//===========wylacza konte menu po kliknieciu gdziekolwiek===============
gu(){
    this.rPressed = false;


}

}
