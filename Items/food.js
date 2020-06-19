class Food{



  constructor(type){
this.what_type_of = type
switch(this.what_type_of){
  case "meat":
    this.id = 5;
                this.name = json_descr["Food"][0][1];
                this.type = json_descr["Food"][0][0];
                this.description = json_descr["Food"][0][2];
                this.sell_prize = 10;
                this.buy_prize = 15;
                this.hunger_add = 10;
                this.graphic = meat;
    break;
    case "cooked_meat":
      this.id = 6;
                  this.name = json_descr["Food"][1][1];
                  this.type = json_descr["Food"][1][0];
                  this.description = json_descr["Food"][1][2];
                  this.sell_prize = 50;
                  this.buy_prize = 100;
                  this.hunger_add = 25;
                 this.graphic = cooked_meat;
      break;


}
this.sort_type = "food"
}


use(){
  switch(this.what_type_of){
  case "meat":
if (gracz.hunger < gracz.hunger_max){
  if ( gracz.hunger + this.hunger_add <= gracz.hunger_max){
    gracz.hunger += this.hunger_add;}
    else {gracz.hunger += (gracz.hunger_max - gracz.hunger)}
  }
  break;
  case "cooked_meat":
if (gracz.hunger < gracz.hunger_max){
  if ( gracz.hunger + this.hunger_add <= gracz.hunger_max){
    gracz.hunger += this.hunger_add;}
    else {gracz.hunger += (gracz.hunger_max - gracz.hunger)}
  }
  break;

  }
}







}
