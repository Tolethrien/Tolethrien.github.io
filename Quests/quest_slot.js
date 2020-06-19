class Quest_slot extends Slot{

constructor(){
super();


}



create(x,y,w,h,angle){
this.x = x, this.y = y, this.w = w,this.h = h;
this.r = angle;

push();
// fill(this.kolor,100)
// rect(this.x,this.y,this.w,this.h)
pop();

this.show();
super.mouseON();
super.click();
super.rClick();
}



show(){
    if (this.hold != undefined){
push();
//imageMode(CENTER);
//  image(this.hold.graphic,this.x+this.w/2,this.y+20) // grafika przedmiotu (lub placeholder)
  textSize(20)
  textAlign(LEFT);
  fill(0);
  text("'"+this.hold.nazwa+"'",this.x,this.y+this.h/2)// nazwa przedmiotu
pop();
}
}




}
