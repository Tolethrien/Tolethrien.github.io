function pos_to_player(target_){
let target = target_;
this.position;
  if( gracz.player.position.x < target.position.x){
  this.left = floor(target.position.x - gracz.player.position.x);}
  else{this.left = 0;}

  if( gracz.player.position.x > target.position.x){
  this.right = floor(gracz.player.position.x - target.position.x);}
  else {this.right = 0;}

  if( gracz.player.position.y < target.position.y){
  this.top = floor(target.position.y - gracz.player.position.y);}
  else{this.top = 0;}
  if( gracz.player.position.y > target.position.y){
  this.bottom = floor(gracz.player.position.y - target.position.y)}
  else{this.bottom =0;}

  if (this.left > this.top && this.left > this.bottom){
    //console.log("lewo");
    this.position = "left"}

  else if (this.right > this.top && this.right >  this.bottom){
      //console.log("prawo");
  this.position = "right"}
  else if(this.top > this.left && this.top >  this.right){
        //console.log("top");
        this.position = "top"}
  else if(this.bottom > this.left && this.bottom >  this.right){
          //console.log("bottom");
    this.position = "down"}

}
