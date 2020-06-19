class Spawner{

constructor(mob11,amount,st){
this.amount = amount;
this.list = [[],[]];
this.type = mob11;
this.respawns = []
this.spawn_time = st;
for (let i = 0; i < this.amount; i++){
this.mob =  new this.type;
this.list[1].push(this.mob)
this.list[0][i] = new Timer();}

}

create(xx,yy,rr,range){

  this.x =xx, this.y = yy, this.r = rr, this.range = range;
  this.spawner = createSprite(this.x,this.y,this.r,this.r);
this.spawner.setCollider("circle",0,0,this.range)
this.spawner.debug = true
this.spawner.visible = false;
spawners.add(this.spawner);
this.createEnemies();
}


allF(){
  this.update();
  this.resp();
  this.timer();
  this.del();
}

createEnemies(){
for (let i = 0; i < this.amount; i++){
  this.mobX = floor(random(this.x-this.range+10, this.x+this.range-10))
    this.mobY = floor(random(this.y-this.range+10, this.y+this.range-10))
  this.list[1][i].create(this.mobX,this.mobY,this.r,this.r)
}
}
createNew(ii){
  let index = ii;
  this.mobX = floor(random(this.x-this.range+10, this.x+this.range-10))
    this.mobY = floor(random(this.y-this.range+10, this.y+this.range-10))
  this.list[1][index].create(this.mobX,this.mobY,this.r,this.r)
}

update(){
  for (let i = 0; i < this.list[1].length; i++){
    if ( this.list[1][i] != null){
   this.list[1][i].allFunctions();
}}


}

del(){
  for (let i = 0; i < this.list[1].length; i++){
  if (this.list[1][i] != null && this.list[1][i].alive == false){
     this.list[0][i].set_time(true,this.spawn_time)
     this.list[1][i] = null}
}

}
resp(){
//
  for (let i = 0; i < this.list[0].length; i++){
    if (this.list[1][i] == null){
if (this.list[0][i].timer == false){
this.list[1][i] = this.mob = new this.type;
this.createNew(i);
}}}

}
timer(){
  for (let i = 0; i < this.list[0].length; i++){
  this.list[0][i].time_out();
}
}



}
