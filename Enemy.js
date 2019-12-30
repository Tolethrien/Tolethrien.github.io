class Enemy {
constructor(){
  this.x = 200;
  this.y = 300
  this.r = 10;
  this.attraction_distance = 70;
  this.circle_vis = false;
  this.follow = false;
  this.create();
  this.stats();
}
//==============================================================================
allFunctions(){
this.attraction()
this.attraction_set();
this.walk();
this.anim();
this.kill();
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
create(){
  this.circle = createSprite(this.x,this.y,this.r,this.r);
  this.circle.setCollider("circle",0,0,this.attraction_distance);
  this.circle.visible = false;
  atention.add(this.circle);
  this.circle.maxSpeed = 0.7;
  if (this.circle_vis == true){
    this.circle.visible = true;
    this.circle.debug = true;}

this.enemy = createSprite(this.circle.position.x,this.circle.position.y,30,30);
this.enemy.addAnimation('left',left_anim);
this.enemy.addAnimation('right',right_anim);
this.enemy.addAnimation('up',up_anim);
this.enemy.addAnimation('down',down_anim);
  enemy.add(this.enemy);
}
//==============================================================================
attraction(){
  if (this.circle.overlap(p1)){
    this.follow = true;
    this.circle.velocity.x = floor((this.circle.position.x - gracz.player.position.x) * -0.05);
    this.circle.velocity.y = floor((this.circle.position.y - gracz.player.position.y) * -0.05);
  } else {
    this.circle.velocity.x = floor((this.circle.position.x - this.x) * -0.05);
    this.circle.velocity.y = floor((this.circle.position.y - this.y) * -0.05);
    if (this.circle.velocity.x == 0 && this.circle.velocity.y == 0){
          this.follow = false;
        }
  }
}
//==============================================================================
kill(){
  if (this.health <= 0){
    this.enemy.remove();
    this.circle.remove();
  }
}
//==============================================================================
walk(){
  if (this.follow == false){}
}
//==============================================================================
anim(){
if (this.circle.velocity.x >  0.8 &&
  (this.circle.velocity.y < 0.5 || this.circle.velocity.y < -0.5 )){
  this.enemy.changeAnimation('right');
  //  this.enemy.mirrorX(-1);
    this.enemy.animation.play();}

if (this.circle.velocity.x <  -0.8 &&
  (this.circle.velocity.y < 0.5 || this.circle.velocity.y < -0.5 )){
      this.enemy.changeAnimation('left');
    //    this.enemy.mirrorX(1);
        this.enemy.animation.play();}
  //
  if (this.circle.velocity.y <  -0.8 &&
    (this.circle.velocity.x < 0.5 || this.circle.velocity.x < -0.5 )){
        this.enemy.changeAnimation('up');
          this.enemy.animation.play();}
  //
  if (this.circle.velocity.y >  0.8 &&
    (this.circle.velocity.x < 0.5 || this.circle.velocity.x < -0.5 )){
        this.enemy.changeAnimation('down');
          this.enemy.animation.play();}

    else if (this.circle.velocity.x == 0 && this.circle.velocity.y == 0 ||
    this.circle.velocity.x == -0 && this.circle.velocity.y == -0){
        this.enemy.animation.changeFrame(3);
        this.enemy.animation.stop();}
}
//==============================================================================
attraction_set(){
this.enemy.position.x = this.circle.position.x;
this.enemy.position.y = this.circle.position.y;
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
