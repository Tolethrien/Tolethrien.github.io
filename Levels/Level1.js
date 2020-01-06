class Lvl1{
constructor(){
   this.wrog = new Enemy();
   this.lol = new Enemy();
   this.npc = new Npc();
    this.walls();
    this.obj();
     this.teleports();
     this.drzewa();
    this.kameraborder();
    this.wrogowie();
}
//=============================================================================================
bg(){
  this.image = image(trawa,0,0);

trawa.resize(900,600);
//  trawa.resize(1300,1200)
  //bg.add(this.image)
}
//=============================================================================================
walls(){
//sciany
sprts.koniec_mapy(10,300,20,600,0);
sprts.koniec_mapy(590,300,20,600,0);
sprts.koniec_mapy(300,10,600,20,0);
sprts.koniec_mapy(300,590,600,20,0);
}
//=============================================================================================
obj(){
// dom(resizeX,resizeY,posX,posY,width,height,image_bot,image_top,collider)
sprts.dom_Draw(200,200,520,110,50,50,dom,dom_top,true)
}
//=============================================================================================
teleports(){
sprts.teleport(20,250,20,40);
sprts.teleport(20,350,20,40);

}
//=============================================================================================
drzewa(){
sprts.drzewo(310,400,50,50);
}
//=============================================================================================
telPoz(){
  for (let i = 0; i < tel.length; i++){
//tel do drugiej krainy
    if (gracz.player.overlap(tel[0])){
       gracz.player.position.x = 770,
       gracz.player.position.y = 150;
       kam.kamera.position.x = 770,
       kam.kamera.position.y = 150;}
//tel na srodek mapy
    if (gracz.player.overlap(tel[1])){
        gracz.player.position.x = 400,
        gracz.player.position.y = 150;}
  }
}
//=============================================================================================
kameraborder(){
sprts.ramaKamery(
5,300,220,600, //lewo
587,300,220,600, // prawo
300,-20,600,200, // gora
300,613,600,200) // dol
}
//=============================================================================================
wrogowie(){
//  this.lol.create(300,300,10,10);
  //this.wrog.create(400,400,10,10);
  this.npc.create();

}
updatelvl(){
//  this.wrog.allFunctions();
//  this.lol.allFunctions();
this.npc.allF();

}
}
