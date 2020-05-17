class Health_potion{

  constructor(type){
this.what_type_of = type
switch(this.what_type_of){
  case "small":
                this.name = "Mała mikstrura lecząca"
                this.type = "health_potion_01"
                this.description = json_descr["potions"][0][2];
                this.sell_prize = 50;
                this.buy_prize = 100;
                this.hp_add = 2;
    break;
    case "medium":
                  this.name = "śr. mikstrura lecząca"
                  this.type = "health_potion_02"
                  this.description = json_descr["potions"][1][2];
                  this.sell_prize = 50;
                  this.buy_prize = 100;
                  this.hp_add = 5;
      break;
      case "big":
                    this.name = "duża mikstrura lecząca"
                    this.type = "health_potion_03"
                    this.description = json_descr["potions"][2][2];
                    this.sell_prize = 50;
                    this.buy_prize = 100;
                    this.hp_add = 8;
        break;

}
this.sort_type = "potions"
this.graphic = potion;
}


use(){
if (gracz.hp < gracz.maxHP){
if (gracz.hp + this.hp_add <= gracz.maxHP){
  gracz.hp += this.hp_add;}
else {gracz.hp += (gracz.maxHP - gracz.hp)}
}

}





}
