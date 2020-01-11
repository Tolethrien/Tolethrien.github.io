function loadFiles(){
left_sheet = loadSpriteSheet('sprites/player/left.png',14,24,6);
right_sheet = loadSpriteSheet('sprites/player/right.png',14,24,6);
up_sheet = loadSpriteSheet('sprites/player/up.png',14,24,6);
down_sheet = loadSpriteSheet('sprites/player/down.png',14,24,6);
shadow_sheet = loadSpriteSheet('sprites/player/shadow.png',14,24,6);
attack_left_sheet = loadSpriteSheet('sprites/player/attack_left.png',35,20,7);
 attack_right_sheet = loadSpriteSheet('sprites/player/attack_right.png',35,20,7);
 attack_up_sheet = loadSpriteSheet('sprites/player/attack_up.png',28,40,7);
 attack_down_sheet = loadSpriteSheet('sprites/player/attack_down.png',28,40,7);

dom = loadImage('sprites/world/house.png')
domek = loadImage('sprites/world/house.png')
dom_top = loadImage('sprites/world/house_top.png')
drzewo = loadImage('sprites/world/tree.png')
drzewo_top = loadImage('sprites/world/tree_top.png')
//trawa = loadImage('sprites/world/castle.png')
trawa = loadImage('sprites/world/aa2.png')
kamera = loadImage('sprites/world/camera.png')
quest_1 = loadImage('sprites/world/questMark.png')
quest_2 = loadImage('sprites/world/zapytanie.png')


left_anim = loadAnimation(left_sheet);
right_anim = loadAnimation(right_sheet);
up_anim = loadAnimation(up_sheet);
down_anim = loadAnimation(down_sheet);
shadow_anim = loadAnimation(shadow_sheet);
attack_left = loadAnimation(attack_left_sheet);
attack_up = loadAnimation(attack_up_sheet);
attack_down = loadAnimation(attack_down_sheet);
attack_right = loadAnimation(attack_right_sheet);
}
//=============================================================================================
function groups(){
  sciany = new Group();
  p1 = new Group();
  tel = new Group();
  par_top = new Group();
  par_bottom = new Group();
  bg = new Group();
  cam = new Group();
  ramacam = new Group();
  enemy = new Group();
  atention = new Group();
  npcs = new Group();
}
//=============================================================================================
