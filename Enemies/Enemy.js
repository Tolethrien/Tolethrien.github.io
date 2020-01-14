class Enemy {
constructor(){
  this.alive = true;
  this.attraction_distance = 70;
  this.circle_vis = false;
  this.follow = false;
    this.currover = false;
// this.create();
  this.stats();
}
create(xx,yy,ww,hh){
this.x = xx, this.y = yy, this.w = ww, this.h = hh;
this.enemy = createSprite(this.x,this.y,this.w,this.h);
this.enemy.addAnimation('left',left_anim);
this.enemy.addAnimation('right',right_anim);
this.enemy.addAnimation('up',up_anim);
this.enemy.addAnimation('down',down_anim);
this.enemy.maxSpeed = 0.5
this.enemy.debug = false;
  //this.enemy.setCollider("rectangle",0,0,14,10);
  enemy.add(this.enemy);
  //lvl1.arr.push();


  this.circle = createSprite(this.enemy.position.x,this.enemy.position.y,this.w,this.w);
  this.circle.setCollider("circle",0,0,this.attraction_distance);
  this.circle.visible = false;
  atention.add(this.circle);
  if (this.circle_vis == true){
    this.circle.visible = true;
    this.circle.debug = true;}

    this.circle2 = createSprite(this.enemy.position.x,this.enemy.position.y,15,30);
    this.circle2.visible = false;
    enemy.add(this.circle2);
}
//==============================================================================
allFunctions(){
this.attraction();
this.attraction_set();
this.guard();
this.walk();
this.anim();
this.dead();
this.kill();
 //console.log(Math.sign(gracz.player.position.x - this.enemy.position.x));
//this.back();
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

//==============================================================================
attraction(){
  if (this.circle.overlap(gracz.player) && !this.circle2.overlap(gracz.player)){
    this.follow = true;
    this.enemy.velocity.x = floor((this.enemy.position.x - gracz.player.position.x) * -0.05);
    this.enemy.velocity.y = floor((this.enemy.position.y - gracz.player.position.y) * -0.05);
  } else {
    this.enemy.velocity.x = 0
    this.enemy.velocity.y = 0}

}
guard(){
  if (!this.circle.overlap(gracz.player) && !this.circle2.overlap(gracz.player)){

    this.enemy.velocity.x = floor((this.enemy.position.x - this.x) * -0.05);
    this.enemy.velocity.y = floor((this.enemy.position.y - this.y) * -0.05);}


}

dead(){
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
    this.alive = false;
    this.enemy.remove();
    this.circle.remove();
    this.circle2.remove();
  }
}
//==============================================================================
walk(){
  if (this.follow == false){}
}
//==============================================================================
anim(){
if (this.enemy.velocity.x >  0.8 &&
  (this.enemy.velocity.y < 0.5 || this.enemy.velocity.y < -0.5 )){
  this.enemy.changeAnimation('right');
  //  this.enemy.mirrorX(-1);
    this.enemy.animation.play();}

if (this.enemy.velocity.x <  -0.8 &&
  (this.enemy.velocity.y < 0.5 || this.enemy.velocity.y < -0.5 )){
      this.enemy.changeAnimation('left');
    //    this.enemy.mirrorX(1);
        this.enemy.animation.play();}
  //
  if (this.enemy.velocity.y <  -0.8 &&
    (this.enemy.velocity.x < 0.5 || this.enemy.velocity.x < -0.5 )){
        this.enemy.changeAnimation('up');
          this.enemy.animation.play();}
  //
  if (this.enemy.velocity.y >  0.8 &&
    (this.enemy.velocity.x < 0.5 || this.enemy.velocity.x < -0.5 )){
        this.enemy.changeAnimation('down');
          this.enemy.animation.play();}

    else if (this.enemy.velocity.x == 0 && this.enemy.velocity.y == 0 ||
    this.enemy.velocity.x == -0 && this.enemy.velocity.y == -0){
        this.enemy.animation.changeFrame(3);
        this.enemy.animation.stop();}
}
//==============================================================================
attraction_set(){
this.circle.position.x = this.enemy.position.x;
this.circle.position.y = this.enemy.position.y;
this.circle2.position.x = this.enemy.position.x;
this.circle2.position.y = this.enemy.position.y;
}
//==============================================================================

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
