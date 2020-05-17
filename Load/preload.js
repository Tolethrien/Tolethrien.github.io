let side_anim,up_anim,down_anim;
let side_sheet,up_sheet,down_sheet;



function loadFiles(){

//PLAYER
left_sheet = loadSpriteSheet('sprites/player/left.png',14,24,6);
right_sheet = loadSpriteSheet('sprites/player/right.png',14,24,6);
up_sheet = loadSpriteSheet('sprites/player/up.png',14,24,6);
down_sheet = loadSpriteSheet('sprites/player/down.png',14,24,6);
shadow_sheet = loadSpriteSheet('sprites/player/shadow.png',14,24,6);
attack_left_sheet = loadSpriteSheet('sprites/player/attack_left.png',35,20,7);
 attack_right_sheet = loadSpriteSheet('sprites/player/attack_right.png',35,20,7);
 attack_up_sheet = loadSpriteSheet('sprites/player/attack_up.png',28,40,7);
 attack_down_sheet = loadSpriteSheet('sprites/player/attack_down.png',28,40,7);
 player_image = loadImage('sprites/player/player_image.png')
//soundtrack = loadSound('sprites/sounds.mp3');

//MOBS
//34 pozycje
dead_bones = loadImage('sprites/Mobs/bones.png')

//NPC
quest_1 = loadImage('sprites/Npc/questMark.png')
quest_2 = loadImage('sprites/Npc/zapytanie.png')
sprzedawca = loadImage('sprites/Npc/seller.png')
burmistrz = loadImage('sprites/Npc/burmistrz.png')

//WORLD
dom = loadImage('sprites/world/house.png')
domek = loadImage('sprites/world/house.png')
dom_top = loadImage('sprites/world/house_top.png')
drzewo = loadImage('sprites/world/tree.png')
drzewo_top = loadImage('sprites/world/tree_top.png')
//trawa = loadImage('sprites/world/castle.png')
poziom1 = loadImage('sprites/world/aa2.png')
poziom2 = loadImage('sprites/world/13.jpg')
//poziom3 = loadImage('sprites/world/castle.png')
//poziom4 = loadImage('sprites/world/trawa.png')
kamera = loadImage('sprites/world/camera.png')

//PRZEDMIOTY
chest = loadImage('sprites/Items/chest.png')
scroll_info = loadImage('sprites/Items/scroll.png')
inside_chest = loadImage('sprites/Items/inside.png')
potion = loadImage('sprites/Items/Health-potion.png')
drags_jar_gray = loadImage('sprites/Items/jar.png')
drags_jar_red = loadImage('sprites/Items/jar_red.png')
placeholder = loadImage('sprites/Items/placeholder.jpg')






//ANIMACJE
left_anim = loadAnimation(left_sheet);
right_anim = loadAnimation(right_sheet);
up_anim = loadAnimation(up_sheet);
down_anim = loadAnimation(down_sheet);
shadow_anim = loadAnimation(shadow_sheet);
attack_left = loadAnimation(attack_left_sheet);
attack_up = loadAnimation(attack_up_sheet);
attack_down = loadAnimation(attack_down_sheet);
attack_right = loadAnimation(attack_right_sheet);

//JSON
json_walls = loadJSON("Levels/walls.json");
json_story = loadJSON("Quests/storys.json");
json_descr = loadJSON("Items/descriptions.json");
}
//=============================================================================================
