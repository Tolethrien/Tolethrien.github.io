class Quests{

constructor(){
  this.allQ = []
  //fedex = nazwa,stageQuesta,pozycjaX,Y,W,H,lub npc target,questGiver,komuOddajemy


}

questy(){
  this.start_quest = new Fedex_Quests("quest_start","aktywny",0,0,0,0,lvl.burmistrz,lvl.valdemar,lvl.burmistrz);
  //this.vah = new Kill_Quests(qs.vah,"aktywny",lvl.tomil,null,2);
}



quests_start(){
  for (let all of this.allQ){
all[1].start();
}
 //this.start_quest.start();
//this.vah.start();
}


leyer_3(){
  for (let all of this.allQ){
all[1].rozmowa();
}
}


}
