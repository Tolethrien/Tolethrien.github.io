



//itemki z ziemi

if (inventory.inv.length <= inventory.slots){
for (let i = 0; i < inventory.inv.length; i++){
if(inventory.inv[i].length == 0){
for (let j = 0; j < inventory.inv.length; j++){
       if (inventory.inv[j].length != 0){
         if (inventory.inv[j][0].type == this.type){
           inventory.inv[j].push(this);
          this.item.remove();
          this.picked = true;
          break;}
        break;}
      }
inventory.inv[i].push(this);
this.item.remove();
this.picked = true;
       break;}
else if (inventory.inv[i].length != 0){
   if (inventory.inv[i][0].type == this.type){
     inventory.inv[i].push(this);
    this.item.remove();
    this.picked = true;
    break;}
   }
}
}


// itemki od kupca/ze skrzyni
for (let h = 0;  h < this.slot.length; h++){
      if (this.slot[h].Pressed_true()){
            if (h < this.buy_items.length){
        if (this.buy_items[h].length != 0){

if (inventory.inv.length <= inventory.slots){
        console.log(this.buy_items[h][0].type);
        for (let i = 0; i < inventory.inv.length; i++){
          if(inventory.inv[i].length != 0){
             if (inventory.inv[i][0].type == this.buy_items[h][0].type){
            console.log(this.buy_items[h][0].type);
              inventory.inv[i].push(this.buy_items[h][0])
                 this.buy_items[h].splice(0,1);
                 if (this.buy_items[h].length == 0){
                   this.buy_items.splice(h,1);}
            break;}
            }
            else if (inventory.inv[i].length == 0 ){
                  inventory.inv[i].push(this.buy_items[h][0]);
                     this.buy_items[h].splice(0,1);
                     if (this.buy_items[h].length == 0){
                       this.buy_items.splice(h,1);}
                         break;
            }
          }
}
}
}
}
}
