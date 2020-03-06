class Plejer{
constructor(){
  //=================SPRITE I ANIMACJE=========================
    this.player = createSprite(1526,980,14,24);
    this.player.addAnimation('left',left_anim);
      this.player.addAnimation('down',down_anim);
    this.player.addAnimation('right',right_anim);
    this.player.addAnimation('up',up_anim);
    this.player.addAnimation('attack_up',attack_up);
    this.player.addAnimation('attack_left',attack_left);
    this.player.addAnimation('attack_right',attack_right);
    this.player.addAnimation('attack_down',attack_down);
    //=====================FIZYKA==================================
  //  this.player.immovable = true;
    this.player.setCollider("rectangle",0,5,14,10);
    p1.add(this.player);
    this.base_spd = 1;
    this.spd = this.base_spd;
    this.dash = new Timer();
    this.dash_cd = new Timer();
    this.state = 'move'
    this.hitin = false;
  //  this.currover = false;
    this.hitbox_vis = false;
    this.maxHP = 10;
    this.money = 0;
    this.hp = 10;
    this.menu = false;
    this.currover = false
    this.attack_style = "dist"

    //======================================ATAK DYSTANSOWY=======================
    this.dot = createVector(this.player.position.x,this.player.position.y)
    this.no = false;
    this.created = false;

}
//=============================================================================
allFunctions(){
  this.colider();
if (this.state == 'move'){
    this.ruch_state();
    this.dash_state();
  this.hit();}

if (this.state == 'attack'){
    this.attack_state();
//  this.hit();
}
  //this.back_state();
}
//=============================================================================
attack_state(){
   if(this.player.getAnimationLabel() == ('up' || 'down' || 'left' || 'right')){
          this.player.animation.rewind();
          this.player.animation.stop();}
this.player.velocity.x = 0;
this.player.velocity.y = 0;

switch(this.player.getAnimationLabel()){
    case 'up':  this.player.changeAnimation('attack_up');
                this.player.animation.offY = -10;
              break;
    case 'down':  this.player.changeAnimation('attack_down');
                      this.player.animation.offY = +10;
              break;
   case 'left':  this.player.changeAnimation('attack_left');
                this.player.animation.offX = -10;
              break;
   case 'right':  this.player.changeAnimation('attack_right');
                  this.player.animation.offX = +10;
              break;
}

if (this.player.animation.getFrame() <= 3 && this.hitin == false){
  if (this.player.getAnimationLabel() == 'attack_up'){
  this.hitbox = createSprite(this.player.position.x,this.player.position.y-8,15,15)
    this.hitbox.visible = this.hitbox_vis;
  this.hitin = true;
  p1.add(this.hitbox);}

  else if (this.player.getAnimationLabel() == 'attack_down'){
  this.hitbox = createSprite(this.player.position.x,this.player.position.y+10,15,15)
    this.hitbox.visible = this.hitbox_vis;
  this.hitin = true;
  p1.add(this.hitbox);}

  else if (this.player.getAnimationLabel() == 'attack_left'){
  this.hitbox = createSprite(this.player.position.x-8,this.player.position.y,15,15)
    this.hitbox.visible = this.hitbox_vis;
  this.hitin = true;
  p1.add(this.hitbox);}

  else if (this.player.getAnimationLabel() == 'attack_right'){
  this.hitbox = createSprite(this.player.position.x+8,this.player.position.y,15,15)
    this.hitbox.visible = this.hitbox_vis;
  this.hitin = true;
  p1.add(this.hitbox);}

}
    if(this.player.animation.getFrame() == 6){
        this.player.animation.changeFrame(0);
        this.hitin = false;
       this.hitbox.remove();
        this.state = 'move';}
}
//=============================================================================
dist_attack(){
if (this.attack_style == 'dist'){
cursor(CROSS)
camera.off();
push();
//  translate(width/2,height/2);
  translate(this.player.position.x,this.player.position.y)
  this.v1 = createVector(0,-height/2+100)
  this.v2 = createVector(mouseX-width/2,mouseY-height/2)
      if (mouseX > width/2){
          this.angle = this.v1.angleBetween(this.v2) - PI/2}
      if (mouseX < width/2){
          this.angle = (this.v1.angleBetween(this.v2) + PI/2) * -1}
pop();
camera.on();

if (this.no == true){
this.dot = createVector(this.player.position.x,this.player.position.y)
this.bullet = createSprite(this.dot.x,this.dot.y,5,5)
this.bullet.draw = function() { ellipse(0,0,2,2) }
this.bullet.visible = true;
bullets.add(this.bullet);

this.ang = p5.Vector.fromAngle(this.angle);
  this.ang.mult(10)
  this.no = false
  this.bullet.setVelocity(this.ang.x,this.ang.y)
}

for (let i = 0; i < bullets.length; i++){
  let d = dist(this.player.position.x,this.player.position.y,bullets[i].position.x,bullets[i].position.y)
  if (bullets[i].overlap(sciany)){
    bullets[i].remove();
  }
  else if(d > 150){
    bullets[i].remove();
  }

}

//  if (!this.bullet){
//   // push();
//   this.dot = createVector(this.player.position.x,this.player.position.y)
//   this.bullet = createSprite(this.dot.x,this.dot.y,20,20)
//   this.bullet.draw = function() { ellipse(0,0,5,5) }
//   this.bullet.visible = true;
//   p1.add(this.bullet);
// }
//       if (this.no == true){
//           this.ang = p5.Vector.fromAngle(this.angle);
//         //  this.ang.mult(10)
//           this.no = false
//           this.bullet.setVelocity(this.ang.x,this.ang.y)}


}else {cursor("sprites/mouse.png")}
//console.log(this.mx)





}


//============================================================================
hit(){
if (this.hp < 0){
  this.player.remove();
  game_stage = "menu"
}
}
//=============================================================================
ruch_state(){
  ruch_imputs();
//kierunki swiata
if (w){
      this.player.setSpeed(this.spd,180);
      this.player.changeAnimation('left');
      //  this.player.mirrorX(1);
        this.player.animation.play();}
    else if (e){
        this.player.setSpeed(this.spd,360);
        this.player.changeAnimation('right');
      //  this.player.mirrorX(-1);
        this.player.animation.play();}
    else if (n){
        this.player.setSpeed(this.spd,270);
        this.player.changeAnimation('up');
        this.player.animation.play('up');}
    else if (s){
        this.player.setSpeed(this.spd,90);
        this.player.changeAnimation('down');
        this.player.animation.play();}
    else if (se){
        this.player.setSpeed(this.spd,45);}
    else if (ne){
        this.player.setSpeed(this.spd,315);}
    else if (sw){
        this.player.setSpeed(this.spd,135);}
    else if (nw){
        this.player.setSpeed(this.spd,225);}
//bezruch
    else{
        this.player.setSpeed(0);

        switch(this.player.getAnimationLabel()){
            case 'attack_up':  this.player.changeAnimation('up');
                      break;
            case 'attack_down':  this.player.changeAnimation('down');
                      break;
            case 'attack_left':  this.player.changeAnimation('left');
                      break;
            case 'attack_right':  this.player.changeAnimation('right');
                      break;
                    }

        this.player.animation.changeFrame(3);
        this.player.animation.stop();}
}
//=============================================================================
dash_state(){
 if (keyWentDown(dashKey) && this.dash_cd.timer == false){
    this.dash.set_time(true,0.10)
     this.spd = 4;
 }
 if (this.dash.time_out()){
   this.spd = this.base_spd;
 this.dash_cd.set_time(true,3);}

 if (this.dash_cd.timer == true){
 this.dash_cd.time_out();
let pasek = map(this.dash_cd.time,0,180,20,0);
fill(0,255,0,100)
rect(this.player.position.x-8,this.player.position.y - 18,pasek,5);}
}
//=============================================================================
back_state(){
 if (keyWentDown('c')){
    this.back.set_time(true,2)
 }
 if (this.back.time_out()){
   console.log('beng');}

}
//==============================================================================
colider(){
      this.player.collide(sciany);
      this.player.collide(par_bottom);
        this.player.overlap(tel);
        this.player.collide(enemy);
          this.player.collide(npcss);
        if (this.hitbox){
        this.hitbox.overlap(enemy);}
}
//=============================================================================
}
