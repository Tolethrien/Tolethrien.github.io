class Drink{



  constructor(type){
this.what_type_of = type
switch(this.what_type_of){
  case "water":
    this.id = 7;
                this.name = json_descr["Drink"][0][1];
                this.type = json_descr["Drink"][0][0];
                this.description = json_descr["Drink"][0][2];
                this.sell_prize = 10;
                this.buy_prize = 15;
          this.thirst_add = 10;
    break;
    case "botteled_water":
      this.id = 8;
                  this.name = json_descr["Drink"][1][1];
                  this.type = json_descr["Drink"][1][0];
                  this.description = json_descr["Drink"][1][2];
                  this.sell_prize = 50;
                  this.buy_prize = 100;
                this.thirst_add = 20;
      break;
      case "crystalized_water":
        this.id = 9;
                    this.name = json_descr["Drink"][2][1];
                    this.type = json_descr["Drink"][2][0];
                    this.description = json_descr["Drink"][2][2];
                    this.sell_prize = 50;
                    this.buy_prize = 100;
                        this.thirst_add = 50;
        break;

}
this.sort_type = "Drink"
this.graphic = water;
}


use(){
  switch(this.what_type_of){
  case "water":
if (gracz.thirst < gracz.thirst_max){
  if ( gracz.thirst + this.thirst_add <= gracz.thirst_max){
    gracz.thirst += this.thirst_add;}
    else {gracz.thirst += (gracz.thirst_max - gracz.thirst)}
  }
  break;
  case "botteled_water":
if (gracz.thirst < gracz.thirst_max){
  if ( gracz.thirst + this.thirst_add <= gracz.thirst_max){
    gracz.thirst += this.thirst_add;}
    else {gracz.thirst += (gracz.thirst_max - gracz.thirst)}
  }
  break;
  case "crystalized_water":
if (gracz.thirst < gracz.thirst_max){
  if ( gracz.thirst + this.thirst_add <= gracz.thirst_max){
    gracz.thirst += this.thirst_add;}
    else {gracz.thirst += (gracz.thirst_max - gracz.thirst)}
  }
  break;

  }
}







}
