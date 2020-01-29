function change_lvl(){
  if (current_lvl == "lvl1" && created == false){
      lvl = new Lvl1();
      created = true;}
      if (current_lvl == "lvl2" && created == false){
          lvl = new Lvl2();
          created = true;}
}

function next_lvl(lewel){
  groups_clear();
  current_lvl = lewel
created = false;
}
