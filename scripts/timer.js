class Timer{
constructor(){

this.timer = false;
}
//=============================================================================================
set_time(bol, sek){
this.timer = bol;
this.sek = sek * 60;
this.timeStart = this.sek;
this.time = this.timeStart
}
//=============================================================================================
time_out(){

if(this.timer == true){
this.time--;
}
if (this.time <= 0){
  // console.log("timeout, start event");
  this.timer = false;
  this.time = this.timeStart
  return true;
}
}
//=============================================================================================
}
