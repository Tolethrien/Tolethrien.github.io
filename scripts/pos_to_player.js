function pos_to_player(target_){
let target = target_;

  if( gracz.player.position.x < target.position.x){
  this.left = floor(target.position.x - gracz.player.position.x);
console.log(this.left);}
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



}
