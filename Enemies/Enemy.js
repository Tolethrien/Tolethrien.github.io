class Enemy {
constructor(){
  this.alive = true;
  this.attraction_distance = 70;
  this.debugMode = false;
  this.state = "idle"
  this.hitin = false;
  this.hit_player = false;
  this.hitbox_vis = true;
  this.attack_deley = new Timer();
    this.attack_time = 2;
  this.stats();
}
//================================================================================================
create(xx,yy,ww,hh){
this.x = xx, this.y = yy, this.w = ww, this.h = hh;
//-----------------------------------------------------
this.enemy = createSprite(this.x,this.y,this.w,this.h);
this.enemy.setCollider("rectangle",0,5,14,10);
//---------------animacje-----------------------//
this.enemy.addAnimation('left',left_anim);
this.enemy.addAnimation('right',right_anim);
this.enemy.addAnimation('up',up_anim);
this.enemy.addAnimation('down',down_anim);
this.enemy.addAnimation('attack_up',attack_up);
this.enemy.addAnimation('attack_left',attack_left);
this.enemy.addAnimation('attack_right',attack_right);
this.enemy.addAnimation('attack_down',attack_down);
//---------------------------------------------------
this.enemy.maxSpeed = 0.5
this.enemy.debug = false;
enemy.add(this.enemy);
//-----------------------attraction circle---------------//
this.circle = createSprite(this.enemy.position.x,this.enemy.position.y,this.w,this.w);
this.circle.setCollider("circle",0,0,this.attraction_distance);
atention.add(this.circle);
//----------------------attack circle----------------------//
this.circle2 = createSprite(this.enemy.position.x,this.enemy.position.y,25,25);
this.circle2.setCollider("rectangle",0,5,31,31)
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
  // |idle| - nic, |guard| - strzeż, |notice| - idz w strone gracza, |attack| - atakuj gracza
switch(this.state){
  case "idle": this.guard(),this.attraction_set(),this.anim(),this.targeting();
  break;
case "follow":  this.attraction(),this.attraction_set(),this.targeting(),this.anim(),this.attack_del();
break;
case "fight": this.anim(),this.targeting(),this.attack(),this.dead(),this.kill(),this.hit();
  }

}
//===========================================================================
control(){
    this.at();
  //  console.log(this.attack_deley.timer);
//in idle
if (this.circle.overlap(gracz.player) && !this.circle2.overlap(gracz.player)){
    this.enemy.animation.play();
    this.state = "follow";}
// in follow
else if (this.circle2.overlap(gracz.player)){
    this.state = 'fight';
    this.enemy.velocity.x =0;
    this.enemy.velocity.y =0; }
//in fight
else if (!this.circle.overlap(gracz.player) && !this.circle2.overlap(gracz.player)){
this.state = 'idle'}
}
//==============================================================================
stats(){
this.health = 5;
this.mana;
this.attack;
this.deff;
this.atcSpeed;
this.moveSpeed;
}

//==============================================================================
guard(){
  if (!this.circle.overlap(gracz.player) && !this.circle2.overlap(gracz.player)){

    this.enemy.velocity.x = floor((this.enemy.position.x - this.x) * -0.05);
    this.enemy.velocity.y = floor((this.enemy.position.y - this.y) * -0.05);}

  if (this.enemy.velocity.x == 0 && this.enemy.velocity.y == 0){
        this.enemy.animation.stop();
        this.enemy.animation.rewind();}

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
attack(){
if (this.circle2.overlap(gracz.player)){
switch(this.target){
case "left":
if(!this.hitin && this.attack_deley.timer == false){
  this.enemy.animation.play();
  this.hitbox = createSprite(this.enemy.position.x-10,this.enemy.position.y,15,15);
  atention.add(this.hitbox);
  this.hitbox.visible = this.hitbox_vis;
  this.hitin = true;}
  break;
case "right":
if(!this.hitin && this.attack_deley.timer == false){
  this.enemy.animation.play();
  this.hitbox = createSprite(this.enemy.position.x+10,this.enemy.position.y,15,15);
  atention.add(this.hitbox);
    this.hitbox.visible = this.hitbox_vis;
  this.hitin = true;}
  break;
case "top":
if(!this.hitin && this.attack_deley.timer == false){
  this.enemy.animation.play();
  this.hitbox = createSprite(this.enemy.position.x,this.enemy.position.y-10,15,15);
  atention.add(this.hitbox);
    this.hitbox.visible = this.hitbox_vis;
  this.hitin = true;}
  break;
case "bottom":
if(!this.hitin && this.attack_deley.timer == false){
  this.enemy.animation.play();
  this.hitbox = createSprite(this.enemy.position.x,this.enemy.position.y+15,15,15);
  atention.add(this.hitbox);
    this.hitbox.visible = this.hitbox_vis;
  this.hitin = true;}
  break;
}

}
if (this.enemy.animation.getFrame() == 5){
     this.enemy.animation.changeFrame(0);
    this.hitin = false;
   this.hitbox.remove();
   if (this.enemy.animation.getFrame() == 0){
     this.hitin = false;
    this.hitbox.remove();
   }
  this.enemy.animation.stop();
       this.attack_deley.set_time(true,this.attack_time)

}
}
//================================================================================
at(){
  this.attack_deley.time_out();
}
attack_del(){
  if (!this.circle2.overlap(gracz.player)){
    if (this.hitbox){
      this.hitbox.remove();
    }
  }
}
//===============================================================================
hit(){
  if(this.hitbox){
  if (!this.hitbox.overlap(gracz.player)){
    this.hit_player = false;
  }
  if(this.hitbox.overlap(gracz.player) && this.hit_player == false){
    gracz.hp -= 1;
    this.hit_player = true;
  }
}
}
//==============================================================================
dead(){
  // currover - sprawdza czy cel jest obecnie uderzany i blokuje ponowne zabranie hp
if (gracz.hitbox){
if (!gracz.hitbox.overlap(this.enemy)){
  this.currover = false;
}
if (gracz.hitbox.overlap(this.enemy) && this.currover == false ){
this.health -= 1;
this.currover = true;}}
}
//==============================================================================
kill(){
  if (this.health <= 0){
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

  }
}
//==============================================================================
walk(){
  if (this.follow == false){}
}
//==============================================================================
anim(){


if (this.circle.overlap(gracz.player) || this.state == 'idle'){
  switch(this.target){
    case "left": this.enemy.changeAnimation("left");
          break;
    case "right":this.enemy.changeAnimation("right");
            break;
          case "top": this.enemy.changeAnimation("up");
            break;
          case "bottom": this.enemy.changeAnimation("down");
            break;
                }
            }
if (this.circle2.overlap(gracz.player)){
    switch(this.target){
      case "left":      this.enemy.animation.stop();
                        this.enemy.changeAnimation("attack_left");
                        this.enemy.animation.offX = -10;

              break;
        case "right":   this.enemy.animation.stop();
                        this.enemy.changeAnimation("attack_right");
                        this.enemy.animation.offX = +10;

              break;
        case "top":     this.enemy.animation.stop();
                        this.enemy.changeAnimation("attack_up");
                        this.enemy.animation.offY = -10;

              break;
        case "bottom":  this.enemy.animation.stop();
                        this.enemy.changeAnimation("attack_down");
                        this.enemy.animation.offY = +10;

              break;
              }
        }

}
//=============================================================================
attraction(){
  if (this.circle.overlap(gracz.player)){
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
  loot.lvl_1(this.dead);

}

}
// - przeciwnik musi miec okręg zainteresowania
// - kiedy gracz wejdzie w okreg przeciwnik idzie w jego kierunku
// - kiedy gracz oddali sie dostatecznie od przeciwnika ten wraca na swoja pozycje startowa
// - animacja przeciwnika zawsze jest skierowana w strone gracza
// - atak nastepuje kiedy gracz znajdzie sie w obszarze ataku przeciwnika
// - przeciwnik musi miec HP, ATTACK, SPEED
// -----------------NA POZNIEJ--------------------------------
// - ataki dystansowe oparte sa o dystans oraz kąt prosty 3kata miedzy przeciwnikiem a graczem??
// - Attack,HP, speed w oparciu o staty + (jeśli) broń/item
