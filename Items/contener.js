class Contener{
// =================== konstruktor klasy ====================
constructor(rows,colms){
  this.x = 1526,this.y = 1080, this.w = 24, this.h = 24;
this.cont = createSprite(this.x,this.y,this.w,this.h);
this.cont.addImage(chest)
items.add(this.cont);
this.item_list = [];
this.slot = [];
this.row = 3 // rows
this.col = 2 // colms
this.slots_max = this.row * this.col; // zmien na slots
for (let i = 0; i < this.slots_max; i++){
  this.slot[i] = new Slot();}


//  this.slot[i] = new Button();}
this.slot[0].hold = new Item("sakiewka",3,0,0,0,0)
this.slot[1].hold = new Item("health_potion",12,0,0,0,0)
this.slot[2].hold = new Item("lol",12,0,0,0,0)
this.slot[1].amount = 6;
this.slot[0].amount = 2;
this.slot[2].amount = 2;

//inventory.slot[12].hold = new Item("lol",3,0,0,0,0)


}

// =============== funkcje update ====================================
allF(){
this.integration();
this.integration()
this.add_to_inv();
this.add_to_cont();
}

// ======================dodawanie itemkow do inventory======================
add_to_inv(){
  if(this.integration()){
  for (let i = 0; i < this.slot.length; i++){
    if (this.slot[i].hold != undefined){
      if (this.slot[i].click()){
        //console.log("klik")


for ( let j = 0; j < inventory.slot.length; j++){
  if (inventory.slot[j].hold != undefined){
    //console.log("zloopowalem - jest jakis item", j)
    if (inventory.slot[j].hold.type == this.slot[i].hold.type){
      //console.log("zloopowalem - to ten item", j)
          inventory.slot[j].amount ++;
          if (this.slot[i].amount == 1){
              this.slot[i].hold = undefined;}
          else{this.slot[i].amount --}
        //console.log("dodano! pole: ", j)
      break;
    }
  }
  else if (inventory.slot[j].hold == undefined ){
    //console.log("zloopowalem - nie ma itemka", j)
    if(j == inventory.slot.length-1){
       for (let k = 0; k < inventory.slot.length; k++){
         if (inventory.slot[k].hold == undefined){
           //console.log("oo, tutaj moge wstawic, pole: ", k)
            inventory.slot[k].hold = this.slot[i].hold;
            if (this.slot[i].amount == 1){
                this.slot[i].hold = undefined;}
            else{this.slot[i].amount --}
           //console.log("dodano na polu: ", k)
           break;
         }
       }
     }

  }

}
}
}
}
}
}

//======================== dodawanie itemkow do kontenera===========================
add_to_cont(){
  if(this.integration()){
  for (let i = 0; i < inventory.slot.length; i++){
      if (inventory.slot[i].hold != undefined){
          if (inventory.slot[i].click()){


            for ( let j = 0; j < this.slot.length; j++){
              if (this.slot[j].hold != undefined){
                //console.log("zloopowalem - jest jakis item", j)
                if (this.slot[j].hold.type == inventory.slot[i].hold.type){
                  //console.log("zloopowalem - to ten item", j)
                      this.slot[j].amount ++;
                      if (inventory.slot[i].amount == 1){
                          inventory.slot[i].hold = undefined;}
                      else{inventory.slot[i].amount --}
                    //console.log("dodano! pole: ", j)
                  break;
                }
              }
              else if (this.slot[j].hold == undefined ){
                //console.log("zloopowalem - nie ma itemka", j)
                if(j == this.slot.length-1){
                   for (let k = 0; k < this.slot.length; k++){
                     if (this.slot[k].hold == undefined){
                       //console.log("oo, tutaj moge wstawic, pole: ", k)
                        this.slot[k].hold = inventory.slot[i].hold;
                        if (inventory.slot[i].amount == 1){
                            inventory.slot[i].hold = undefined;}
                        else{inventory.slot[i].amount --}
                       //console.log("dodano na polu: ", k)
                       break;
                     }
                   }
                 }

              }

            }
            }
            }
            }
            }


}
//========================= integracja okien z graczem ==================================
integration(){
let d = dist(gracz.player.position.x,gracz.player.position.y,this.x,this.y)
//console.log(d);
if (d < this.w + 1){
this.show_kont();
this.show_inv();
return true;
}
}

//============================ okno kufra ======================================
show_kont(){
  let x = 125,y=75,w= 50 * this.row + 50, h= 50 * this.col + 50;
  camera.off();
 rect(x,y,w,h,40);
 let xx = 0;
let yy = 0;
let swap = 1;
for (let i = 0; i < this.slot.length; i++){
  this.slot[i].create("rect",150+xx,100+yy,50,50)
//  this.slot[i].kolor(100,100,100);
  if (i == (this.row * swap) -1 ){
yy += 50;
xx = -50;
swap ++;
  }
    xx += 50;
}
camera.on();
}

//======================== okno inventory =======================================
show_inv(){
inventory.okno();
  }


}
