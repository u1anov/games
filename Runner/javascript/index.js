var pjs = new PointJS('2d',400,400);
pjs.system.initFullPage();

var vector = pjs.vector;
var log = pjs.system.log;
var opp = pjs.OPP;
var brush = pjs.brush;
var camera = pjs.camera;
var size = vector.size;
var point = vector.point;
var game = pjs.game;
var presets = pjs.presets;

var touch = pjs.touchControl;
touch.initTouchControl();

var height = game.getWH().h;
var width = game.getWH().w;

var fonBG = game.newImageObject({
    x:0, y:0,
    file:'img/e57a57608b61a8d90fa3388041ea55ec.jpg',
    h:height
});
var ground = game.newImageObject({
    x:0, y:0,
    file:'img/sozdanie-beskonechnogo-rannera-na-JavaScript-mehanika-dvijeniya-fona-3.png',
    w:width,
    onload:function(){
      ground.y = height - ground.h;
    }
});
var dog = game.newAnimationObject({
    x:0, y:0,
    w:120, h:150,
    delay:5,
    animation: pjs.tiles.newAnimation('img/sozdanie-beskonechnogo-rannera-na-JavaScript-mehanika-dvijeniya-fona-4.png',150,180,5)
});
game.newLoop('Runner',function(){

    presets.bgCycle(fonBG, -5, 0, 0, 0);
    fonBG.draw();
    presets.bgCycle(ground, -5, 0, 0, 0);
    ground.draw();
    
    dog.y = ground.y - dog.h / 3
    dog.draw();
});
game.startLoop('Runner',60);