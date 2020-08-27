class Health_potion{

  constructor(type){
this.what_type_of = type
switch(this.what_type_of){
  case "small":
                this.id = json_descr["potions"][0][0];
                this.name = json_descr["potions"][0][1];
                this.description = json_descr["potions"][0][3];
                this.save_data = json_descr["potions"][0][4];
                  this.quality = "common"
                    this.use_info = "Natychmiast przywraca x % zdrowia"
                    this.sort_type =  json_descr["potions"][0][2];
                this.sell_prize = 50;
                this.buy_prize = 100;
                this.hp_add = 2;
    break;
    case "medium":
                  this.id = json_descr["potions"][1][0];
                  this.name = json_descr["potions"][1][1];
                  this.description = json_descr["potions"][1][3];
                    this.save_data = json_descr["potions"][1][4];
                    this.sort_type =  json_descr["potions"][1][2];
                      this.quality = "legendary"
                      this.use_info = "'Natychmiast przywraca x % zdrowia'"
                  this.sell_prize = 50;
                  this.buy_prize = 100;
                  this.hp_add = 5;
      break;
      case "big":
                    this.id = json_descr["potions"][2][0];
                    this.name = json_descr["potions"][2][1];
                    this.description = json_descr["potions"][2][3];
                      this.save_data = json_descr["potions"][2][4];
                      this.sort_type =  json_descr["potions"][2][2];
                        this.quality = "legendary"
                    this.sell_prize = 50;
                    this.buy_prize = 100;
                    this.hp_add = 8;
        break;

}
this.graphic = potion;
this.stack_size = 10;
}


use(){
if (gracz.hp < gracz.maxHP){
if (gracz.hp + this.hp_add <= gracz.maxHP){
  gracz.hp += this.hp_add;}
else {gracz.hp += (gracz.maxHP - gracz.hp)}
}

}





}
