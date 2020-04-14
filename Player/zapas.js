class Inventory{

  constructor(){
this.menu = false;
this.inv = [
  []
            ]; // storuje itemki
this.slot = [] // numer slota na ktorym jest item
this.slot_use = [] // sprawdza ktory slot byl klikniety oraz używa tego slotu
this.slots = 16
this.text = [];
this.text2 = [];
//this.inv[0].push(this.item = new Item("health_potion",1,0,0,5,5))
for (let i = 0; i < this.slots; i++){
  this.slot[i] = new Button();}

}

show(){
  if (gracz.menu == true){
  this.x = ui.x+220, this.y = ui.y+100, this.w = 70
  camera.off();
    push();
//  ui.inventory_menu();
  textAlign(CENTER);
  fill(0);
  textSize(16 - (100 - this.w)/10 -4)
//100 - this.w
let c = 0 - (100 - this.w), v = 0 - (100 - this.w);

for (let i = 0; i < this.slot.length; i++){
  this.slot[i].create('rect',this.x+c,this.y+v,this.w,this.w);
  this.slot[i].kolor(204, 230, 255,20);

if (this.text[i] != undefined){
    text(this.text[i],this.x+c+2,this.y+v+this.w/2-25,this.w,this.w);
    text(this.text2[i],this.x+c+2,this.y+v+this.w/2-5,this.w,this.w);}

if (this.inv[i] != undefined){
    for (let j = 0; j < this.inv[i].length; j++){
        if (this.inv[i][j] != undefined){
            this.text[i]  = this.inv[i][0].type;
            this.text2[i] = this.inv[i].length;}
        if (  this.slot[i].Pressed_true(LEFT)){
            this.slot_use[i] = true;}
    }
}

if (i == 3 || i == 7 || i == 11){
  v += 100- (100 - this.w);
  c = -100;}
  c += 100 - (100 - this.w);
}

pop();
camera.on();
}
}

cut(){
  for (let i = 0; i < this.slots; i++){
    if (this.slot_use[i] == true){
        this.inv[i][this.inv[i].length-1].use();
          //  console.log(j);
        this.inv[i].splice(this.inv[i].length-1,1)
        this.slot_use[i] = undefined
      if (this.inv[i] == 0){
        this.text[i] = undefined;
        this.text2[i] = undefined;
      this.inv.splice(i,1)
    this.text.splice(i,1)
      this.text2.splice(i,1);}}
    else{null}}
}
set_slots(){
  if (this.inv.length < this.slots){
    this.inv.push([])
  }
}

}


// for (let k = 0; k < inventory.inv.length; k++){
// if(inventory.inv[k].length == 0){
//   for (let j = 0; j < inventory.inv.length; j++){
//      if (inventory.inv[j].length != 0){
//     if (inventory.inv[j][0].type == this.slot[i].hold.type){
//          inventory.inv[j].push(this.slot[i].hold);
//          if (this.slot[i].amount == 0){
//             this.slot[i].hold = undefined;}
//             else{this.slot[i].amount --}
//          break;}
//            break;}
//          }
//   inventory.inv[k].push(this.slot[i].hold);
//      if (this.slot[i].amount == 0){
//         this.slot[i].hold = undefined;}
//         else{this.slot[i].amount --}
//   break;}
// else if (inventory.inv[k].length != 0){
//    if (inventory.inv[k][0].type == this.slot[i].hold.type){
//      inventory.inv[k].push(this.slot[i].hold);
//      if (this.slot[i].amount == 0){
//         this.slot[i].hold = undefined;}
//         else{this.slot[i].amount --}
//     break;}
//    }
// }


//
//
// }
//     }
//     }
//   }
// }






// add_to_inv(){
//   if(this.integration()){
//   for (let i = 0; i < this.slot.length; i++){
//     if (this.slot[i].hold != undefined){
//       if (this.slot[i].click()){
//
//
//
// for (let k = 0; k < inventory.slot.length; k++){
// if (inventory.slot[k].hold == undefined){
//       for (let j = 0; j < inventory.slot.length; j++){
//         if (inventory.slot[j].hold != undefined){
//         if (inventory.slot[j].hold.type == this.slot[i].hold.type){
//           inventory.slot[j].amount ++;
//           if (this.slot[i].amount == 1){
//                      this.slot[i].hold = undefined;}
//                     else{this.slot[i].amount --}
//           break;}
//         break;}
//       }
//       inventory.slot[k].hold = this.slot[i].hold;
//       console.log("dodaje 1 item")
//       if (this.slot[i].amount == 1){
//                  this.slot[i].hold = undefined;}
//                 else{this.slot[i].amount --}
//             break;}
//   else if (inventory.slot[k].hold != undefined){
//           if (inventory.slot[k].hold.type == this.slot[i].hold.type){
//               inventory.slot[k].amount ++;
//               if (this.slot[i].amount == 1){
//                          this.slot[i].hold = undefined;}
//                         else{this.slot[i].amount --}
//
//               break;}
//
// } } } } } }
// }



//======================================

// if(this.integration()){
// for (let i = 0; i < this.slot.length; i++){
//   if (this.slot[i].hold != undefined){
//     if (this.slot[i].click()){
//       console.log("klik")
//
//
// for ( let j = 0; j < inventory.slot.length; j++){
// if (inventory.slot[j].hold != undefined){
//   console.log("zloopowalem - jest jakis item", j)
//   if (inventory.slot[j].hold.type == this.slot[i].hold.type){
//     console.log("zloopowalem - to ten item", j)
//       console.log("dodano! pole: ", j)
//     break;
//   }
// }
// else if (inventory.slot[j].hold == undefined ){
//   console.log("zloopowalem - nie ma itemka", j)
//   if(j == inventory.slot.length-1){
//      for (let k = 0; k < inventory.slot.length; k++){
//        if (inventory.slot[k].hold == undefined){
//          console.log("oo, tutaj moge wstawic, pole: ", k)
//          console.log("dodano na polu: ", k)
//          break;
//        }
//      }
//    }
//
// }
//
// }
// }
// }
// }
// }
// }



//============================
// add_to_cont(){
//   if(this.integration()){
//   for (let i = 0; i < inventory.slot.length; i++){
//       if (inventory.slot[i].hold != undefined){
//           if (inventory.slot[i].click()){
//             for (let k = 0; k < this.slot.length; k++){
//             if (this.slot[k].hold == undefined){
//                   for (let j = 0; j < this.slot.length; j++){
//                     if (this.slot[j].hold != undefined){
//                     if (this.slot[j].hold.type == inventory.slot[i].hold.type){
//                       this.slot[j].amount ++;
//                       if (inventory.slot[i].amount == 1){
//                                  inventory.slot[i].hold = undefined;}
//                                 else{inventory.slot[i].amount --}
//                       break;}
//                     break;}
//                   }
//                   this.slot[k].hold = inventory.slot[i].hold;
//                   if (inventory.slot[i].amount == 1){
//                              inventory.slot[i].hold = undefined;}
//                             else{inventory.slot[i].amount --}
//                         break;}
//               else if (this.slot[k].hold != undefined){
//                       if (this.slot[k].hold.type == inventory.slot[i].hold.type){
//                           this.slot[k].amount ++;
//                           if (inventory.slot[i].amount == 1){
//                                      inventory.slot[i].hold = undefined;}
//                                     else{inventory.slot[i].amount --}
//
//                           break;}
//           } } } } }  }
//
// }
