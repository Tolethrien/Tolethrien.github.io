class Drink{



  constructor(type){
this.what_type_of = type
switch(this.what_type_of){
  case "water":
                this.id =  json_descr["Drink"][0][0];
                this.name = json_descr["Drink"][0][1];
                this.description = json_descr["Drink"][0][3];
                this.save_data = json_descr["Drink"][0][4];
                  this.quality = "common"
                this.sell_prize = 10;
                this.buy_prize = 15;
          this.thirst_add = 10;

    break;
    case "botteled_water":
                  this.id =  json_descr["Drink"][1][0];
                  this.name = json_descr["Drink"][1][1];
                  this.description = json_descr["Drink"][1][3];
                  this.save_data = json_descr["Drink"][1][4];
                    this.quality = "rare"
                  this.sell_prize = 50;
                  this.buy_prize = 100;
                this.thirst_add = 20;
      break;
      case "crystalized_water":
                    this.id =  json_descr["Drink"][2][0];
                    this.name = json_descr["Drink"][2][1];
                    this.description = json_descr["Drink"][2][3];
                    this.save_data = json_descr["Drink"][2][4];
                      this.quality = "epic"
                    this.sell_prize = 50;
                    this.buy_prize = 100;
                        this.thirst_add = 50;
        break;

}
this.sort_type = json_descr["Drink"][2][2];
this.graphic = water;
this.stack_size = 10;
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
