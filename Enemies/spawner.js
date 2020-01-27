class Spawner{

constructor(mob11,amount){
this.amount = amount;
this.list = [];
this.type = mob11;
for (let i = 0; i < this.amount; i++){
this.mob =  new this.type;
this.list.push(this.mob)}

this.respawn = new Timer();

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
  this.list[i].create(this.mobX,this.mobY,this.r,this.r)
}
}
createNew(){
  this.mobX = floor(random(this.x-this.range+10, this.x+this.range-10))
    this.mobY = floor(random(this.y-this.range+10, this.y+this.range-10))
  this.list[this.list.length-1].create(this.mobX,this.mobY,this.r,this.r)
}

update(){
  for (let i = 0; i < this.list.length; i++){
   this.list[i].allFunctions();
}


}

del(){
  for (let i = 0; i < this.list.length; i++){
  if (this.list[i].alive == false){
     this.list.splice(i,1)
     this.respawn.set_time(true,10)}
}

}
resp(){
if (this.list.length < this.amount){
if (this.respawn.timer == false){
  this.mob = new Enemy();
this.list.push(this.mob)
this.createNew();
     this.respawn.set_time(true,10)
}}

}
timer(){
  this.respawn.time_out();
}


}
