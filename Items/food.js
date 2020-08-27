class Food{



  constructor(type){
this.what_type_of = type
switch(this.what_type_of){
  case "meat":
                this.id = json_descr["Food"][0][0];
                this.name = json_descr["Food"][0][1];
                this.description = json_descr["Food"][0][3];
                  this.save_data = json_descr["Food"][0][4];
                    this.quality = "common"
                this.sell_prize = 10;
                this.buy_prize = 15;
                this.hunger_add = 10;
                this.graphic = meat;
    break;
    case "cooked_meat":
                  this.id = json_descr["Food"][1][0];
                  this.name = json_descr["Food"][1][1];
                  this.description = json_descr["Food"][1][3];
                  this.save_data = json_descr["Food"][1][4];
                    this.quality = "epic"
                  this.sell_prize = 50;
                  this.buy_prize = 100;
                  this.hunger_add = 25;
                 this.graphic = cooked_meat;
      break;


}
this.sort_type = json_descr["Food"][0][2];
this.stack_size = 3;
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
