
// przenosi przedmioty miedzy 2 pojemnikami ( w tym inventory)
function move_item(from,to){

  this.from = from;
  this.to = to;
  for (let i = 0; i < this.from.length; i++){
    if (this.from[i].hold != undefined){
        if (this.from[i].click()){
            for ( let j = 0; j < this.to.length; j++){
                if (this.to[j].hold != undefined){
                  if (this.to[j].hold.id == this.from[i].hold.id){
                    if(this.to[j].amount < this.to[j].hold.stack_size){
                      this.to[j].amount ++;
                      if (this.from[i].amount == 1){
                          this.from[i].hold = undefined;}
                      else{this.from[i].amount --}
                      return true;
                      break;
                    }
                  }
                }
                  else if (this.to[j].hold == undefined ){
                      if(j == this.to.length-1){
                        for (let k = 0; k < this.to.length; k++){
                             if (this.to[k].hold == undefined){
                               this.to[k].hold = this.from[i].hold;
                               if (this.from[i].amount == 1){
                                   this.from[i].hold = undefined;}
                               else{this.from[i].amount --}
                               return true;
                              break;
}}}}}
        }
      }
    }




}

// przenosi przedmioty miedzy invoentory a sprzedawca ( sprzedaje)
function sell_item(from,to){
this.curr_item;
  this.from = from;
  this.to = to;


  for (let i = 0; i < this.from.slot.length; i++){
    if (this.from.slot[i].hold != undefined){
        if (this.from.slot[i].click()){
          if (this.to != inventory){
            if (this.to.money >= this.from.slot[i].hold.sell_prize){
            for ( let j = 0; j < this.to.slot.length; j++){
                if (this.to.slot[j].hold != undefined){
                  if (this.to.slot[j].hold.id == this.from.slot[i].hold.id){
                      this.to.slot[j].amount ++;
                      curr_item = this.from.slot[i].hold
                      if (this.from.slot[i].amount == 1){
                          this.from.slot[i].hold = undefined;}
                      else{this.from.slot[i].amount --}
                         return this.curr_item;
                     return true;
                      break;
                    }
                  }
                  else if (this.to.slot[j].hold == undefined ){
                      if(j == this.to.slot.length-1){
                        for (let k = 0; k < this.to.slot.length; k++){
                             if (this.to.slot[k].hold == undefined){
                               this.to.slot[k].hold = this.from.slot[i].hold;
                               curr_item = this.from.slot[i].hold
                               if (this.from.slot[i].amount == 1){
                                   this.from.slot[i].hold = undefined;}
                               else{this.from.slot[i].amount --}
                               return this.curr_item;
                              return true;
                              break;
}}}}}
        }else {console.log("nie stać cie")
                bruh.play();}
              }
      else if (this.to == inventory){
          if (this.to.money >= this.from.slot[i].hold.buy_prize){
          for ( let j = 0; j < this.to.slot.length; j++){
              if (this.to.slot[j].hold != undefined){
                if (this.to.slot[j].hold.id == this.from.slot[i].hold.id){
                    this.to.slot[j].amount ++;
                    curr_item = this.from.slot[i].hold
                    if (this.from.slot[i].amount == 1){
                        this.from.slot[i].hold = undefined;}
                    else{this.from.slot[i].amount --}
                       return this.curr_item;
                   return true;
                    break;
                  }
                }
                else if (this.to.slot[j].hold == undefined ){
                    if(j == this.to.slot.length-1){
                      for (let k = 0; k < this.to.slot.length; k++){
                           if (this.to.slot[k].hold == undefined){
                             this.to.slot[k].hold = this.from.slot[i].hold;
                             curr_item = this.from.slot[i].hold
                             if (this.from.slot[i].amount == 1){
                                 this.from.slot[i].hold = undefined;}
                             else{this.from.slot[i].amount --}
                             return this.curr_item;
                            return true;
                            break;
}}}}}
      }else {console.log("nie stać cie")
    bruh.play();}}







      }
      }
    }




}
