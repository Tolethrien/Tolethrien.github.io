class Lvl2{
constructor(){
 this.wrog2 = new Enemy();
   this.pan_k = new Npc("Pan K");
     this.qtest = new Kill_Quests(qs.qtest,"aktywny",this.pan_k,this.wrog2);
    this.walls();
    this.obj();
    this.teleports();
    this.drzewa();
    this.kameraborder();
    this.wrogowie();
}
//=============================================================================================
bg(){
this.image = image(poziom2,0,0);



}
//=============================================================================================
walls(){
//sciany

}
//=============================================================================================
obj(){
// dom(resizeX,resizeY,posX,posY,width,height,image_bot,image_top,collider)

}
//=============================================================================================
teleports(){
sprts.teleport(500,800,40,20);
}
//=============================================================================================
drzewa(){

}
//=============================================================================================
telPoz(){
  if (gracz.player.overlap(tel[2])){
     gracz.player.position.x = 505,
     gracz.player.position.y = 842;
     kam.kamera.position.x = 770,
     kam.kamera.position.y = 150;
     next_lvl("lvl1");}
}
//=============================================================================================
kameraborder(){

}
//=============================================================================================
wrogowie(){
this.wrog2.create(505,667,10,10);
  this.pan_k.create(206,414,20,20);

  this.qtest.story(
    [
    ["WItaj,",
                  "Czemu ni",
                  'Nie czasu',
                  "Odwsie"],
    ['ooo sprawdziłeś, niezłoto',
                  "Dzięki"], // [1]
                  [null],
                  [null]
              ])
}

updatelvl(){
this.wrog2.allFunctions();
this.pan_k.allF();
this.qtest.start();
}

}
