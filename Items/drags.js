class Drags{

  constructor(type){
this.what_type_of = type
switch(this.what_type_of){
case "amphetamine":
          this.id = 0;
          this.name = json_descr["drags"][1][1];
          this.type = json_descr["drags"][1][0];
          this.description = json_descr["drags"][1][2];
          this.sell_prize = 250;
          this.buy_prize = 500;
          this.graphic = drags_jar_gray;



break;
case "klefedrone":
  this.id = 4;
          this.name = json_descr["drags"][0][1];
          this.type = json_descr["drags"][0][0];
          this.description = json_descr["drags"][0][2];
          this.sell_prize = 250;
          this.buy_prize = 500;
          this.graphic = drags_jar_red;
break;

}
this.sort_type = "drags"

// this.amphetamine, - done
// this.klefedrone,  - done
// this.morphine,
// this.ketamine
// this.codeine,
// this.cocaine
// this.heroine
}


use(){
  switch(this.what_type_of){
  case "amphetamine":
console.log("JAZDA KURWA JAZDA BYKU JAZDA JAZDA!!!!")
  break;
  case "klefedrone":
console.log("ŁO JAK CI DOBRZEEE I MILUUTKOOOO")
  break;

  }
}





















}
