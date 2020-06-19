class Light{

constructor(){
this.light = createSprite(gracz.player.position.x,gracz.player.position.y+2,16,16)
this.light.addImage(light_blob)
par_top.add(this.light)
}


poz(){
  this.light.position.x  = gracz.player.position.x;
  this.light.position.y  = gracz.player.position.y;

}



}
