class Archer{


constructor(xx,yy,ww,hh,state){
  this.x = xx, this.y = yy, this.w = ww, this.h = hh, this.state = state;
  //-----------------------------------------------------
  this.enemy = createSprite(this.x,this.y,this.w,this.h);
  this.enemy.setCollider("rectangle",0,0,14,14);
this.current_state = this.state
this.HP = 1;

}













allF(){
switch(this.current_state){




  
}


}





kontroler // bedzie musial kontrolowac i wybierac zadania

wykonawca // bedzie wykonywal czynnosci zadan podane przez kontroler




stany (){
patrol
guard
poscig
atak
ucieczka/leczenie
sprowadzanie posilkow
powrot na pozycje

}




patrol(){
idz do punktu a
idz do punktu b
wyszukuj wroga


}

guard(){
stoj i szukaj wroga

}

poscig (){
gon wroga
jesli wrog za daleko lub za daleko od punktu poczatkowego wracaj
jesli blisko wroga atak()
}


atak (){
gon wroga
jesli wrog za daleko lub za daleko od punktu poczatkowego wracaj
atak wroga
jesli zycie za male - ucieczka()
jesli zycie ok - atak()

}

ucieczka(){
sprawdz gdzie znajduje sie gracz
zacznij biegnac w jakimkolwiek innym kierunku
jesli dystans od gracza jest wiekszy niz potrzebny - leczenie();
jesli leczenie() skonczone - powrot()



}


kontroler(){
co kazda klatke sprawdzaj
  if (poziom zycia za niski) - > leczenie();
  else if (wrog w zasiegu) - > poscig();
    else if (wrog niewidoczny) - > guard()/patrol();









}



































}
