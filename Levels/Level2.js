// pozycja gracza startowa: x = 1000 y = 1000 !!!!!!!
class Lvl2{
constructor(){
  this.items_array = [];
  this.wall = []
        this.test = new Seller("test");
    this.valdemar = new Npc("Valdemar");
     this.start_quest = new Fedex_Quests(qs.start_quest,"aktywny",0,0,this.test,this.valdemar,this.test);

    this.tomil = new Npc("Tomil");
    this.vah_mobs = [];
       this.vah = new Kill_Quests(qs.vah,"aktywny",this.tomil,null,this.vah_mobs,2);
               this.vahel = new Enemy();
              this.beny = new Enemy();


    this.walls();
    this.objects();
    this.teleports();
    this.trees();
    this.kamera_borders();
    this.enemies();
    this.npcs();
    this.quests();

 for (let i = 0; i < json_walls.walls.length; i++){
 this.wall = createSprite(900 + json_walls.walls[i][0],900 + json_walls.walls[i][1],json_walls.walls[i][2],json_walls.walls[i][3])
this.wall.visible = json_walls.walls[i][4]
 sciany.add(this.wall)
  }

}
//=============================================================================================
background(){
  poziom2.resize(1200,1000)
this.image = image(poziom2,900,900);
//background("green")
}
//=============================================================================================
walls(){
//sciany
// sprts.koniec_mapy(980,980,20,100,0);
// sprts.koniec_mapy(1025,930,100,20,0);
// sprts.koniec_mapy(1070,980,20,100,0);

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
this.vahel.create(200,1500,10,14)
this.beny.create(200,1600,10,14)

}
//==============================================================================================
npcs(){
this.valdemar.create(2038,1618,15,15);
this.valdemar.npc.visible = false;
this.tomil.create(1140,1510,15,15);
this.test.create(1958,1614,15,15);
}
//==============================================================================================
quests(){
  this.start_quest.story(
    [
    ["Dzielni śmiałkowie gotowi pomóc temu miastu poszukiwani! Więcej informacji u Burmistrza!",
                  '*Przeczytane*',],
    ['hah, pomyslales ze moze bedzie sie dalo oddac tego questa? prawdziwy z ciebie gracz! Tu masz kilka pyrków',
                  "Dzięki"], // [1]
                  [null],
                  [null]
              ])
//---------------------------------------
this.vah.story(
  [
  ["Dwa twoje klony zalęgły się niedaleko miasteczka i boimy sie ze moga nas zaatakowac, zajmiesz się nimi? są na wschód od nas",
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
this.test.allF();
this.tomil.allF();
this.vahel.allFunctions();
this.beny.allFunctions();
this.start_quest.start();
this.vah.start();
//this.qtest.start();
for (let i = 0; i < this.items_array.length; i++){
  this.items_array[i].allF();
  if (this.items_array[i].picked == true){
  this.items_array.splice(i,1);}
}
}
//================================================================================================
}
