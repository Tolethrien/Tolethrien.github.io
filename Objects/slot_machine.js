class Slot_machine{

constructor(){

this.slot_machine = createSprite(1557,1034,20,20)

this.slot1 = [1,2,3,4]
this.slot2 = [1,2,3,4]
this.slot3 = [1,2,3,4]
this.index1 = floor(random(5));
this.index2 = floor(random(5));
this.index3 = floor(random(5));
this.for1 = 9
this.for1 = 5
this.for1 = 2
this.show = 1;
this.i = 0;
this.time = 0;

}



create(){
camera.off();
  push();
rect(100,100,400,200)
textSize(20)
text(this.index1,110,150)
text(this.index2,250,150)
text(this.index3,370,150)
pop();
camera.on();
//this.time_by(60);
this.update();
}

update(){
for (let i = 0; i <= this.for1; i++){
  if(this.time_by(60)){
    this.index1 ++;
  }
  if(i == this.for1){break;}
}

}




time_by(go_time){
let time_done = go_time;
this.time++;
console.log(this.time);
if (this.time >= time_done){
  this.time = 0;
  return true;
}




}












}
