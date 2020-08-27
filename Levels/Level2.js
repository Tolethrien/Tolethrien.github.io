// pozycja gracza startowa: x = 1000 y = 1000 !!!!!!!
class Lvl2{
constructor(){
  this.loot_bags_array = [];
  this.wall = []
        this.test = new Alt_seller("test");
    this.valdemar = new Npc("Valdemar");
        this.burmistrz = new Npc("Burmistrz");

this.kont = new Contener(4,4,1580,1080);
    this.tomil = new Npc("Tomil");
    this.vah_mobs = [];
//       this.vah = new Kill_Quests(qs.vah,"aktywny",this.tomil,null,this.vah_mobs,2);
               this.vahel = new Enemy();
              this.beny = new Enemy();
this.spawner = new Spawner(Enemy,2,10);
this.mutant = new Mutant();
//this.slot_machine = new Slot_machine();


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
//   for (let i = 0; i < json_walls.walls.length; i++){
//       // let d = dist (gracz.player.position.x,gracz.player.position.y,json_walls.walls[i][0]+900,json_walls.walls[i][1]+900)
//       // if(d < 500){
//   this.wall = createSprite(900 + json_walls.walls[i][0],900 + json_walls.walls[i][1],json_walls.walls[i][2],json_walls.walls[i][3])
//  this.wall.visible = json_walls.walls[i][4]
//  //this.wall.visible = true
//   sciany.add(this.wall)
// //}
//    }
   // this.wall2 = createSprite(-50,-50,25,25);
   // sciany.add(this.wall2);
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
this.mutant.create({position_x: 1320, position_y:1360,
                    size_w: 10, size_h: 14})
//this.mutant.create(1320,1360,10,14)
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
  // this.start_quest.story(
  //   [
  //   ["Dzielni śmiałkowie gotowi pomóc temu miastu poszukiwani! Więcej informacji u Burmistrza!",
  //                 '*Przeczytane*',],
  //   ['Oh, Witaj! Ty od ogłoszenia? Wspaniale! Popytaj ludzi w miasteczku, na pewno znajdą ci jakieś zadanie',
  //                 "Tak zrobię"], // [1]
  //                 [null],
  //                 [null],
  //                 ["odnalazłeś po drodzę znak który skierował cię prosto do burmistrza",
  //                 "- udaj się do burmistrza"]
  //             ])
//quest_log.quest_list.push(this.start_quest);
//---------------------------------------
// this.vah.story(
//   [
//   ["Dwa twoje klony zalęgły się na pobliskim cmentarzu i zakłucają spokój zmarłych, zajmiesz się nimi?",
//                 'Rozprawię się z nimi',
//                   "nie teraz, muszę uzupelnic zapasy"],
//   ['Dziękuję, mam nadzieje ze nie przyjdzie ich więcej!',
//                 "Oby, żegnaj"], // [1]
//                 [null],
//                 [null]
//             ])
//this.vah_mobs.push(this.vahel,this.beny);
}
//===============================================================================================
update_lvl(){
this.valdemar.allF();
this.burmistrz.allF();
this.test.allF();
this.tomil.allF();
this.vahel.allFunctions();
this.beny.allFunctions();
//this.start_quest.start();
//this.vah.start();
this.spawner.allF();
this.kont.allF();
this.mutant.allFunctions();
//this.slot_machine.create();
//this.qtest.start();

}
//================================================================================================
leyer_3(){
  //this.start_quest.rozmowa();
  // this.vah.rozmowa();
   this.test.okno();
   // loopa odpowiedzialna za funkcjonalnosc loot bagow, za usuwanie pustych oraz za blokowanie
   //    otwarcia kilku naraz jesli są na sobie
   for (let i = 0; i < this.loot_bags_array.length; i++){
     this.loot_bags_array[i].allF();
     if (this.loot_bags_array[i].cont.removed == true){
       this.loot_bags_array.splice(i,1);
   }

   for (let i = 0; i < this.loot_bags_array.length; i++){
       if (this.loot_bags_array[i].opened  == true){
         break;}
       else if (i == this.loot_bags_array.length -1){
         for (let j = 0; j < this.loot_bags_array.length; j++){
             if (this.loot_bags_array[j].integration()){
               this.loot_bags_array[j].opened  = true;
               break;}
             }
           }
         }

   }
}
}
