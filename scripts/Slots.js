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
this.mouseON();
this.click();
this.rClick();
//this.gu();
}

//=======================================================================================
show(){
    if (this.hold != undefined){
switch(this.style){
case "rect":
push();
//console.log("dzialam")
imageMode(CENTER);
  image(this.hold.graphic,this.x+this.w/2,this.y+20) // grafika przedmiotu (lub placeholder)
  textSize(10)
  textAlign(CENTER);
  fill(0);
  text(this.hold.name,this.x,this.y+35,this.w,this.h)// nazwa przedmiotu
  stroke(0);
  line (this.x,this.y+58,this.x+this.w,this.y+58)
  strokeWeight(0)
  text(this.amount,this.x,this.y+62,this.w,this.h) // ilosc w slocie
pop();
break;
case "inventory":
push();
imageMode(CENTER);
  image(this.hold.graphic,this.x+this.w/2,this.y+20) // grafika przedmiotu (lub placeholder)
  textSize(10)
  textAlign(CENTER);
  fill(255);
  text(this.hold.name,this.x,this.y+35,this.w,this.h)// nazwa przedmiotu
  stroke(255);
  strokeWeight(1)
  line (this.x,this.y+58,this.x+this.w,this.y+58)
  strokeWeight(0)
  text(this.amount,this.x,this.y+62,this.w,this.h) // ilosc w slocie
pop();
break;
case "rect_cut":
push();
imageMode(CENTER);
  image(this.hold.graphic,this.x+this.w/2,this.y+17) // grafika przedmiotu (lub placeholder)
  textSize(10)
  textAlign(CENTER);
  fill(255);
  text(this.hold.name,this.x,this.y+30,this.w,this.h)// nazwa przedmiotu
  stroke(255);
  strokeWeight(1)
  line (this.x+10,this.y+53,this.x+this.w-10,this.y+53)
  text(this.amount,this.x,this.y+57,this.w,this.h) // ilosc w slocie
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
  image(scroll_info,this.x+this.w+70,this.y - 50)
  textSize(12);
  textAlign(CENTER);
  text(this.hold.name,this.x+this.w+77,this.y-10,100,150)
  text(this.hold.description,this.x+this.w+77,this.y+40,100,150)
  pop();
}


}
//====================================================================================
dClick(){
// use item

}
//===================================================================================
rClick(){
// menu kontekstowe
if (this.mouseON()){
  if(mouseWentDown(RIGHT)){
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
