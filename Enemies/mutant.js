class Mutant {
constructor(){
  this.alive = true;
  this.attraction_distance = 70;
  this.debugMode = true;
  this.state = "idle"
  this.hitin = false;
  this.hit_player = false;
  this.hitbox_vis = true;
  this.attack_deley = new Timer();
  this.profile();
}
//================================================================================================
create({position_x: xx,position_y: yy, size_w: ww, size_h: hh}){
this.x = xx, this.y = yy, this.w = ww, this.h = hh;
//-----------------------------------------------------
this.enemy = createSprite(this.x,this.y,this.w,this.h);
this.enemy.setCollider("rectangle",0,0,14,14);
//---------------animacje-----------------------//
//---------------------------------------------------
this.enemy.maxSpeed = this.move_speed
this.enemy.debug = false;
enemy.add(this.enemy);
//-----------------------attraction circle---------------//
this.circle = createSprite(this.enemy.position.x,this.enemy.position.y,this.w,this.w);
this.circle.setCollider("circle",0,0,this.attraction_distance);
atention.add(this.circle);
//----------------------attack circle----------------------//
this.circle2 = createSprite(this.enemy.position.x,this.enemy.position.y,25,25);
this.circle2.setCollider("rectangle",0,0,31,31)
this.circle2.visible = true;
this.circle2.debug = false;
atention.add(this.circle2);
//---------------------debug-----------------------------//
if (this.debugMode == true){
  this.circle.visible = true;
  this.circle.debug = true;
  this.circle2.visible = true;
  this.circle2.debug = true;}
else{
  this.circle.visible = false;
  this.circle.debug = false;
  this.circle2.visible = false;
  this.circle.debug = false;}
}


//==============================================================================
allFunctions(){
  this.control();
  this.timers_control();
  // |idle| - nic, |guard| - strzeż, |notice| - idz w strone gracza, |attack| - atakuj gracza
switch(this.state){
  case "idle": this.back_to_position(),this.attraction_set(),this.targeting(),this.attack_del(),this.got_hitted(),this.kill();
  break;
case "follow":  this.attraction(),this.attraction_set(),this.targeting(),this.got_hitted(),this.kill();
  break;
case "fight": this.targeting(),this.hitting_target(),this.got_hitted(),this.kill(),this.attacking();
case "dead":
  break
}
}
//===========================================================================
control(){
//in idle
if (this.circle.overlap(gracz.player) && !this.circle2.overlap(gracz.player)){
    this.state = "follow";}
// in follow
else if (this.circle2.overlap(gracz.player)){
    this.state = 'fight';
    this.enemy.velocity.x =0;
    this.enemy.velocity.y =0; }
//in fight
else if (!this.circle.overlap(gracz.player) && !this.circle2.overlap(gracz.player) && this.state != "dead"){
this.state = 'idle'}
}
//==============================================================================
profile(){
// tutaj zapisujemy wszystkie info o worgach ktore nie sa generyczne
this.health = 5;
this.mana;
this.attack = 0.5;
this.deff;
this.move_speed = 0.7
this.attack_Speed = 0.5;
this.hbl = 10;
this.charge_attack = 1;
this.charge_curr = this.charge_attack;



}


//==============================================================================
back_to_position(){
  if (!this.circle.overlap(gracz.player) && !this.circle2.overlap(gracz.player)){

    this.enemy.velocity.x = floor((this.enemy.position.x - this.x) * -0.05);
    this.enemy.velocity.y = floor((this.enemy.position.y - this.y) * -0.05);}

  if (this.enemy.velocity.x == 0 && this.enemy.velocity.y == 0){
      //  this.enemy.animation.stop();
        //this.enemy.animation.rewind();
      }

}
//===============================================================================
targeting(){
 if (this.state == "follow" || this.state == "fight"){
  if( gracz.player.position.x < this.circle.position.x){
  this.left = floor(this.circle.position.x - gracz.player.position.x);}
  else{this.left = 0;}

  if( gracz.player.position.x > this.circle.position.x){
  this.right = floor(gracz.player.position.x - this.circle.position.x);}
  else {this.right = 0;}

  if( gracz.player.position.y < this.circle.position.y){
  this.top = floor(this.circle.position.y - gracz.player.position.y);}
  else{this.top = 0;}
  if( gracz.player.position.y > this.circle.position.y){
  this.bottom = floor(gracz.player.position.y - this.circle.position.y)}
  else{this.bottom =0;}
}
if (this.state == "idle"){
  if( this.x < this.circle.position.x){
  this.left = floor(this.circle.position.x - this.x);}
  else{this.left = 0;}

  if( this.x > this.circle.position.x){
  this.right = floor(this.x - this.circle.position.x);}
  else {this.right = 0;}

  if( this.y < this.circle.position.y){
  this.top = floor(this.circle.position.y - this.y);}
  else{this.top = 0;}
  if( this.y > this.circle.position.y){
  this.bottom = floor(this.y - this.circle.position.y)}
  else{this.bottom =0;}
}


  // console.clear();
  //  console.log("left: " + pos_to_player.left);
  // console.log( "right: " + this.right);
  // console.log( "top: " + this.top);
  // console.log("bottom: " + this.bottom);

  if (this.left > this.top && this.left > this.bottom){
    //console.log("lewo");
    this.target = "left"}

  if (this.right > this.top && this.right >  this.bottom){
      //console.log("prawo");
      this.target = "right"}
  if(this.top > this.left && this.top >  this.right){
        //console.log("top");
        this.target = "top"}
  if(this.bottom > this.left && this.bottom >  this.right){
          //console.log("bottom");
          this.target = "bottom"}

}

//==================================================================================================

//================================================================================
timers_control(){

  this.attack_deley.time_out();  // kontroler licznika opoznienia ataku

  if (!this.circle2.overlap(gracz.player)){
    this.charge_curr = this.charge_attack}

 }

attack_del(){
  if (!this.circle2.overlap(gracz.player)){
    if (this.hitbox){
      this.hitbox.remove();
      this.hitin = false;
    }
  }
}
//===============================================================================
hitting_target(){
  if(this.hitbox){
  if (!this.hitbox.overlap(gracz.player)){
    this.hit_player = false;
  }
  if(this.hitbox.overlap(gracz.player) && this.hit_player == false){
    gracz.hp -= this.attack;
    this.hit_player = true;
  }
}
}
//==============================================================================
got_hitted(){
  // currover - sprawdza czy cel jest obecnie uderzany i blokuje ponowne zabranie hp
if (gracz.hitbox){
if (!gracz.hitbox.overlap(this.enemy)){
  this.currover = false;
}
if (gracz.hitbox.overlap(this.enemy) && this.currover == false ){
this.health -= 1; // zmien na ilosc dmg postaci
this.currover = true;}}

for ( let i = 0; i < bullets.length; i++){
  if (bullets[i].overlap(this.enemy)){
      this.health -= 2; // zmien na ilosc dmg postaci
      bullets[i].remove();
}}
}
//==============================================================================
kill(){
  if (this.health <= 0 && this.state != "dead"){
    this.dead = createVector();
    this.dead.x = this.enemy.position.x;
        this.dead.y = this.enemy.position.y;
    this.drop();
    this.alive = false;
    this.enemy.remove();
    this.circle.remove();
    this.circle2.remove();
    if (this.hitbox){
      this.hitbox.remove();
    }
    this.state = "dead"

  }
}
//==============================================================================

//==============================================================================
// anim(){
//
//
// if (this.circle.overlap(gracz.player) || this.state == 'idle'){
//   switch(this.target){
//     case "left": this.enemy.changeAnimation("left");
//           break;
//     case "right":this.enemy.changeAnimation("right");
//             break;
//           case "top": this.enemy.changeAnimation("up");
//             break;
//           case "bottom": this.enemy.changeAnimation("down");
//             break;
//                 }
//             }
// if (this.circle2.overlap(gracz.player)){
//     switch(this.target){
//       case "left":      this.enemy.animation.stop();
//                         this.enemy.changeAnimation("attack_left");
//                         this.enemy.animation.offX = -10;
//
//               break;
//         case "right":   this.enemy.animation.stop();
//                         this.enemy.changeAnimation("attack_right");
//                         this.enemy.animation.offX = +10;
//
//               break;
//         case "top":     this.enemy.animation.stop();
//                         this.enemy.changeAnimation("attack_up");
//                         this.enemy.animation.offY = -10;
//
//               break;
//         case "bottom":  this.enemy.animation.stop();
//                         this.enemy.changeAnimation("attack_down");
//                         this.enemy.animation.offY = +10;
//
//               break;
//               }
//         }
//
// }
//=============================================================================
attraction(){
  if (this.circle.overlap(gracz.player)){
    //  this.enemy.animation.play();
    this.enemy.velocity.x = floor((this.enemy.position.x - gracz.player.position.x) * -0.05);
    this.enemy.velocity.y = floor((this.enemy.position.y - gracz.player.position.y) * -0.05);
  } else {
    this.enemy.velocity.x = 0
    this.enemy.velocity.y = 0}

}
//==============================================================================
attraction_set(){
this.circle.position.x = this.enemy.position.x;
this.circle.position.y = this.enemy.position.y;
this.circle2.position.x = this.enemy.position.x;
this.circle2.position.y = this.enemy.position.y;
}
//==============================================================================

drop(){
  //loot.drop_lvl("common",this.dead)
//  loot.drop_lvl("rare", this.dead);

this.drop_items_list = [];

loot.set_random_loot("rare",this.drop_items_list);
//loot.cos("rare")
loot.set_loot_bag(this.drop_items_list,this.dead)
this.drop_items_list = [];


  // lvl.loot_bags_array.push(new Loot_bag(, 3,2,target.x,target.y));
}

attacking(){
  if (this.circle2.overlap(gracz.player)){
  switch(this.target){
  case "left":
  if((!this.hitbox || this.hitbox.life ==0) && this.attack_deley.timer == false){
  //  this.enemy.animation.play();
  this.charge_curr --;
  console.log(this.charge_curr)
  if (this.charge_curr == 0){
    this.hitbox = createSprite(this.enemy.position.x-15,this.enemy.position.y,15,35);
    atention.add(this.hitbox);
    this.hitbox.visible = this.hitbox_vis;
    this.hitin = true;
  this.hitbox.life = this.hbl;
  this.charge_curr = this.charge_attack;
    this.attack_deley.set_time(true,this.attack_Speed)}}
    break;
  case "right":
  if((!this.hitbox || this.hitbox.life ==0) && this.attack_deley.timer == false){
    //this.enemy.animation.play();
    this.charge_curr --;
    console.log(this.charge_curr)
    if (this.charge_curr == 0){
    this.hitbox = createSprite(this.enemy.position.x+15,this.enemy.position.y,15,35);
    atention.add(this.hitbox);
      this.hitbox.visible = this.hitbox_vis;
    this.hitin = true;
  this.hitbox.life = this.hbl;
  this.charge_curr = this.charge_attack;
    this.attack_deley.set_time(true,this.attack_Speed)}}
    break;
  case "top":
  if((!this.hitbox || this.hitbox.life ==0) && this.attack_deley.timer == false){
    //this.enemy.animation.play();
    this.charge_curr --;
    console.log(this.charge_curr)
    if (this.charge_curr == 0){
    this.hitbox = createSprite(this.enemy.position.x,this.enemy.position.y-15,35,15);
    atention.add(this.hitbox);
      this.hitbox.visible = this.hitbox_vis;
    this.hitin = true;
  this.hitbox.life = this.hbl;
  this.charge_curr = this.charge_attack;
    this.attack_deley.set_time(true,this.attack_Speed)}}
    break;
  case "bottom":
  if((!this.hitbox || this.hitbox.life ==0) && this.attack_deley.timer == false){
    //this.enemy.animation.play();
    this.charge_curr --;
    console.log(this.charge_curr)
    if (this.charge_curr == 0){
    this.hitbox = createSprite(this.enemy.position.x,this.enemy.position.y+15,35,15);
    atention.add(this.hitbox);
      this.hitbox.visible = this.hitbox_vis;
    this.hitin = true;
  this.hitbox.life = this.hbl;
  this.charge_curr = this.charge_attack;
    this.attack_deley.set_time(true,this.attack_Speed)}}
    break;
  }

}

}

}
