class Kam{
constructor(){
  this.x = gracz.player.position.x;
  this.y = gracz.player.position.y;
  this.kamera = createSprite(this.x,this.y,10,10);
    this.kamera.setCollider('rectangle',0,0,20,20);
    this.kamera.addImage(kamera)
this.kamera.visible = false;
this.kamera.debug = false;
  cam.add(this.kamera);
}
//==============================================================================
follow(){
  camera.position.x = this.kamera.position.x;
  camera.position.y = this.kamera.position.y;

this.kamera.velocity.x =(this.kamera.position.x - gracz.player.position.x) * -0.06;
this.kamera.velocity.y =(this.kamera.position.y - gracz.player.position.y) * -0.06;
//cam.collide(ramacam);
 camera.on();
 camera.Zoom = 4;
}
//==============================================================================

}
