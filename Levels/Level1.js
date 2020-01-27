class Lvl1{
constructor(){
     this.q2_mobs = [];
   this.wrog = new Enemy();
   this.lol = new Enemy();
   this.pan_kwadrat = new Npc("Pan Kwadrat");
      this.pan_k = new Npc("Pan K");
 //this.q = new Fedex_Quests("aktywny",0,0,this.pan_k,this.pan_kwadrat);
  this.q2 = new Kill_Quests(qs.q2,"aktywny",this.pan_k,null,this.q2_mobs,2);
  //  this.walls();
    this.objects();
    this.walls();
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
  //bg.add(this.image)
}
//=============================================================================================
walls(){
//sciany
//sprts.koniec_mapy(10,300,20,600,0);
// sprts.koniec_mapy(590,300,20,600,0);
// sprts.koniec_mapy(300,10,600,20,0);
// sprts.koniec_mapy(300,590,600,20,0);
//sprts.koniec_mapy(20,0,20,300,155);
}
//=============================================================================================
objects(){
// dom(resizeX,resizeY,posX,posY,width,height,image_bot,image_top,collider)
//sprts.dom_Draw(200,200,520,110,50,50,dom,dom_top,true)
}
//=============================================================================================
teleports(){
//sprts.teleport(135,10,40,20);
//sprts.teleport(20,350,20,40);

}
//=============================================================================================
tel_Position(){
  for (let i = 0; i < tel.length; i++){
//tel do drugiej krainy
    if (gracz.player.overlap(tel[0])){
       gracz.player.position.x = 505, gracz.player.position.y = 842;
       kam.kamera.position.x = 770,   kam.kamera.position.y = 150;
       next_lvl("lvl2");
   }
//tel na srodek mapy
    if (gracz.player.overlap(tel[1])){
        gracz.player.position.x = 400, gracz.player.position.y = 150;
      }
   }
}
//=============================================================================================
trees(){
//sprts.drzewo(310,400,50,50);
}
//=============================================================================================
kamera_borders(){
// sprts.ramaKamery(
// 5,300,220,600, //lewo
// 587,300,220,600, // prawo
// 300,-20,600,200, // gora
// 300,613,600,200) // dol
}
//=============================================================================================
enemies(){
  this.lol.create(90,497,10,10);
  this.wrog.create(505,667,10,10);
    this.testarr();

}
//=============================================================================================
npcs(){
  this.pan_kwadrat.create(231,668,20,20); //231 668
    this.pan_k.create(206,414,20,20);

}
//==============================================================================================
quests(){
  this.q2.story(
    [
    ["WItaj, sprawdzisz czy mój brat kwadrat dalej jest nad wodą?",
                  "Czemu nie, jeśli zapłaczisz",
                  'Nie mam na to czasu',
                  "Odwal sie"],
    ['ooo sprawdziłeś, nie spodziewałem się. Wiedziałem że ten leń tam dalej siedzi? tu mosz złoto',
                  "Dzięki"], // [1]
                  [null],
                  [null]
              ])
this.q2_mobs.push(this.wrog,this.lol);

}
//==============================================================================================
update_lvl(){
  this.wrog.allFunctions();
  this.lol.allFunctions();
this.pan_kwadrat.allF();
this.pan_k.allF();
this.q2.start();

}
//==============================================================================================
testarr(){
  this.list =
  ["Testies",
      ["Ogry",
              ["Ogr",
                      ["ogr1","ogr2","ogr3"]
              ],
              ["Ogr Lord",
                      ["ogrLord1","OgrLord2"]
              ],
              ["Ogr Pospolity",
                      ["ogr Pospolity1","ogr Pospolity2"]
              ]
      ],
      ["Humanoidalne",
              ["Łupieżca",
                      ["Pan Kwak","Kurier","Tommy Strzelba"]
              ],
              ["NPC",
                      [this.pan_k,this.pan_kwadrat]
              ],
              ["Włóczęga",
                      [this.wrog,this.lol]
              ]
      ],
      ["koniowate",
              ["rumaki",
                    ["rumak1","rumak2"]
              ],
              ["Klacze",
                    ["klacz1","klacz2"]
              ],
              ["kucyki",
                    ["kucyk1"]
              ]
     ]
  ]

}
}
