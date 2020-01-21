class Lvl2{
constructor(){
  this.items_array = [];
 this.wrog2 = new Enemy();
  this.wrog3 = new Enemy();
   this.pan_k = new Npc("Pan K");
     this.qtest = new Kill_Quests(qs.qtest,"aktywny",this.pan_k,this.wrog2);
    this.walls();
    this.objects();
    this.teleports();
    this.trees();
    this.kamera_borders();
    this.enemies();
    this.npcs();
    this.quests();
}
//=============================================================================================
background(){
this.image = image(poziom2,0,0);

}
//=============================================================================================
walls(){
//sciany

}
//=============================================================================================
objects(){
// dom(resizeX,resizeY,posX,posY,width,height,image_bot,image_top,collider)

}
//=============================================================================================
teleports(){
// sprts.teleport(500,800,40,20);
}
//=============================================================================================
tel_Position(){
  // if (gracz.player.overlap(tel[2])){
  //    gracz.player.position.x = 505, gracz.player.position.y = 842;
  //    kam.kamera.position.x = 770,   kam.kamera.position.y = 150;
  //    next_lvl("lvl1");
  //  }
}
//=============================================================================================
trees(){

}
//=============================================================================================
kamera_borders(){

}
//=============================================================================================
enemies(){
this.wrog2.create(200,267,14,10);
this.wrog3.create(250,267,14,10);


}
//==============================================================================================
npcs(){
  this.pan_k.create(206,414,20,20);
}
//==============================================================================================
quests(){
  this.qtest.story(
    [
    ["oh, witaj, W lesie niedaleko ukrywa sie zbujec, jeśli byś na niego trafił przypadkiem i zabił go wróć do mnie po nagrodę, Chętnie zapłacę za tego szkodnika!",
                  "Dziękuję za ostrzeżenie, zapamiętam",
                  'Nie będę nikogo zabijąć jeśli nie sam na mnie nie ruszy',
                  "Mówiłeś coś stary dziadu?"],
    ['ooo pozbyłeś się go jednak, Proszę, zapracowałeś na te Pyrki',
                  "Dzięki"], // [1]
                  [null],
                  [null]
              ])
//---------------------------------------
}
//===============================================================================================
update_lvl(){
this.wrog2.allFunctions();
this.wrog3.allFunctions();
this.pan_k.allF();
this.qtest.start();
for (let i = 0; i < this.items_array.length; i++){
  this.items_array[i].allF();
  if (this.items_array[i].picked == true){
  this.items_array.splice(i,1);}
}
}
//================================================================================================
}
