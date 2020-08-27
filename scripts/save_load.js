// zrob liste wszystkich kontenerow w grze oraz zapisz ich zawartosc w arreyu
// inventory gracza
// pozycja gracza
// statystyki gracza
// obecnie ubrane/użyte przedmioty
// pozycja przeciwnikow
// statystyki przeciwnikow
// stan questow
// quest log
// pozycje UI
// lista itemkow/ilosc kasy u kupcow
// lootbagi




function save_game(){
let save_array = [];







}
function save_inventory(){
  for (let i = 0; i < inventory.slot.length; i++){
if (inventory.slot[i].hold != undefined){
  this.save_inv[i] = [inventory.slot[i].hold.save_data[0],inventory.slot[i].hold.save_data[1],inventory.slot[i].amount]}
  else if (inventory.slot[i].hold == undefined){
    this.save_inv[i] = [null,null,1]}
}
}

}
