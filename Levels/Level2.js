// pozycja gracza startowa: x = 1000 y = 1000 !!!!!!!
class Lvl2{
constructor(){
  this.items_array = [];
  this.wall = []
        this.test = new Seller("test");
    this.valdemar = new Npc("Valdemar");
        this.burmistrz = new Npc("Burmistrz");
     this.start_quest = new Fedex_Quests(qs.start_quest,"aktywny",0,0,this.burmistrz,this.valdemar,this.burmistrz);

    this.tomil = new Npc("Tomil");
    this.vah_mobs = [];
       this.vah = new Kill_Quests(qs.vah,"aktywny",this.tomil,null,this.vah_mobs,2);
               this.vahel = new Enemy();
              this.beny = new Enemy();
this.spawner = new Spawner(Enemy,2);

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
this.image = image(poziom2,900,900);
//background("green")
}
//=============================================================================================
walls(){
  for (let i = 0; i < json_walls.walls.length; i++){
  this.wall = createSprite(900 + json_walls.walls[i][0],900 + json_walls.walls[i][1],json_walls.walls[i][2],json_walls.walls[i][3])
 this.wall.visible = json_walls.walls[i][4]
 //this.wall.visible = true
  sciany.add(this.wall)
   }
//sciany


}
//=============================================================================================
objects(){
// dom(resizeX,resizeY,posX,posY,width,height,image_bot,image_top,collider)
// sprts.dom_Draw(200,200,1150,1400,50,50,dom,dom_top,true)
// sprts.dom_Draw(200,200,1200,1550,50,50,dom,dom_top,true)
// sprts.dom_Draw(200,200,930,1400,50,50,dom,dom_top,true)
// sprts.dom_Draw(200,200,1000,1550,50,50,dom,dom_top,true)
// sprts.dom_Draw(200,200,850,1500,50,50,dom,dom_top,true)
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
this.vahel.create(1495,1777,10,14)
this.beny.create(1320,1760,10,14)
this.spawner.create(1050,1320,20,40)
}
//==============================================================================================
npcs(){
this.valdemar.create(1475,1035,15,15);
this.burmistrz.create(1320,1124,15,15);
this.valdemar.npc.visible = false;
this.tomil.create(1417,1294,15,15);
this.test.create(1228,1420,15,15);
}
//==============================================================================================
quests(){
  this.start_quest.story(
    [
    ["Dzielni śmiałkowie gotowi pomóc temu miastu poszukiwani! Więcej informacji u Burmistrza!",
                  '*Przeczytane*',],
    ['Oh, Witaj! Ty od ogłoszenia? Wspaniale! Popytaj ludzi w miasteczku, na pewno znajdą ci jakieś zadanie',
                  "Tak zrobię"], // [1]
                  [null],
                  [null]
              ])
//---------------------------------------
this.vah.story(
  [
  ["Dwa twoje klony zalęgły się na pobliskim cmentarzu i zakłucają spokój zmarłych, zajmiesz się nimi?",
                'Rozprawię się z nimi',
                  "nie teraz, muszę uzupelnic zapasy"],
  ['Dziękuję, mam nadzieje ze nie przyjdzie ich więcej!',
                "Oby, żegnaj"], // [1]
                [null],
                [null]
            ])
this.vah_mobs.push(this.vahel,this.beny);
}
//===============================================================================================
update_lvl(){
this.valdemar.allF();
this.burmistrz.allF();
this.test.allF();
this.tomil.allF();
this.vahel.allFunctions();
this.beny.allFunctions();
this.start_quest.start();
this.vah.start();
this.spawner.allF();
//this.qtest.start();
for (let i = 0; i < this.items_array.length; i++){
  this.items_array[i].allF();
  if (this.items_array[i].picked == true){
  this.items_array.splice(i,1);}
}
}
//================================================================================================
leyer_3(){
  this.start_quest.rozmowa();
   this.vah.rozmowa();
   this.test.okno();
}
}
