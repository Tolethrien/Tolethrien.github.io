class Sprts{
constructor(){
}
//==============================================================================
dom_Draw(rrX,rrY,xx,yy,ww,hh,ib,it,bol){
// dom(resizeX,resizeY,posX,posY,width,height,image_bot,image_top,collider)
let rX=rrX,rY=rrY,x=xx,y=yy,w=ww,h=hh,img_bot=ib,img_top=it, col = bol;
dom.resize(rX,rY);
dom_top.resize(rX,rY);
this.house = createSprite(x,y,w,h);
this.house_top = createSprite(x-3,y-15,w,h);
this.house.addImage(img_bot);
this.house_top.addImage(img_top);
par_bottom.add(this.house);
par_top.add(this.house_top);
if (col == true){this.house.setCollider("rectangle",0,35,90,85);}
}
//==============================================================================
koniec_mapy(xx,yy,ww,hh,cc){
  // koniec_mapy(x,y,w,h,kolor) <CENTERMODE - w oraz h oznacza długosc od srodka spritu>
let x = xx, y = yy, w = ww, h = hh,c = cc;
  this.wall = createSprite(x,y,w,h);
    this.wall.setDefaultCollider();
    this.wall.shapeColor = c;
    sciany.add(this.wall);
}
//==============================================================================
teleport(xx,yy,ww,hh){
  let x = xx, y = yy, w = ww, h = hh;
  this.tel = createSprite(x,y,w,h);
  this.tel.visible = false;
  tel.add(this.tel);
}
//==============================================================================
drzewo(xx,yy,ww,hh){
    let x = xx, y = yy, w = ww, h = hh;
this.drzewo = createSprite(x,y,w,h);
this.drzewo.addImage(drzewo);
this.drzewo.setCollider("rectangle",-1,35,22,15);
par_bottom.add(this.drzewo);
this.drzewo_top = createSprite(x-2,y-19,w,h);
this.drzewo_top.addImage(drzewo_top);
par_top.add(this.drzewo_top);
}
//==============================================================================
ramaKamery(lxx,lyy,lww,lhh,rxx,ryy,rww,rhh,uxx,uyy,uww,uhh,dxx,dyy,dww,dhh){
  this.rysowanie = false;
  let lx=lxx, ly=lyy, lw=lww, lh=lhh;
  this.lewo = createSprite(lx,ly,lw,lh);
  this.lewo.setDefaultCollider();
  ramacam.add(this.lewo);
let rx=rxx, ry=ryy, rw=rww, rh=rhh;
  this.prawo = createSprite(rx,ry,rw,rh);
  this.prawo.setDefaultCollider();
  ramacam.add(this.prawo);
let ux=uxx,uy=uyy,uw=uww,uh=uhh;
  this.gora = createSprite(ux,uy,uw,uh);
  this.gora.setDefaultCollider();
  ramacam.add(this.gora);
let dx=dxx,dy=dyy,dw=dww,dh=dhh;
  this.dol = createSprite(dx,dy,dw,dh);
  this.dol.setDefaultCollider();
  ramacam.add(this.dol);

    this.lewo.debug = true;
    this.prawo.debug = true;
    this.gora.debug = true;
    this.dol.debug = true;

if (this.rysowanie == true){
this.lewo.visible = true;
  this.prawo.visible = true;
    this.gora.visible = true;
      this.dol.visible = true;
} else {
  this.lewo.visible = false;
    this.prawo.visible = false;
      this.gora.visible = false;
        this.dol.visible = false;}
}
//==============================================================================

}
