class Quests{

constructor(){
  this.allQ = []
  //fedex = nazwa,stageQuesta,pozycjaX,Y,W,H,lub npc target,questGiver,komuOddajemy


}

questy(){
  this.start_quest = new Fedex_Quests("quest_start","aktywny",0,0,0,0,lvl.burmistrz,lvl.valdemar,lvl.burmistrz);
  //this.vah = new Kill_Quests("aktywny",lvl.tomil,null,2);
    this.s_quest = new Fedex_Quests("q_start","aktywny",0,0,0,0,lvl.burmistrz,lvl.tomil,lvl.tomil);
//  this.allQ.push(this.vah)
}



quests_start(){
  // Uwaga! [1] odnosi sie do pierwszego miejsca w arrey [nazwa_questa, (-tu->) funkcja_Quest] nie do tylko pierwszego questa
   for (let all of this.allQ){
 all[1].start();
}

}


leyer_3(){
  for (let all of this.allQ){
all[1].rozmowa();
}
}


}
