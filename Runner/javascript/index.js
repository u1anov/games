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

var touch = pjs.touchControl;
touch.initTouchControl();

var height = game.getWH().h;
var width = game.getWH().w;

var fonBG = game.newImageObject({
    x:0, y:0,
    file:'img/e57a57608b61a8d90fa3388041ea55ec.jpg',
    h:height,
    onload:function(){
       fonBGTwo.x = fonBG.w+fonBG.x;
    }
});
var fonBGTwo = game.newImageObject({
    x:fonBG.w+fonBG.x, y:0,
    file:'img/e57a57608b61a8d90fa3388041ea55ec.jpg',
    h:height
});
var ground = game.newImageObject({
    x:0, y:0,
    file:'img/sozdanie-beskonechnogo-rannera-na-JavaScript-mehanika-dvijeniya-fona-3.png',
    w:width,
    onload:function(){
      groundTwo.y = ground.y = height - ground.h;
      groundTwo.x = ground.w + ground.x;
    }
});
var groundTwo = game.newImageObject({
    x:0, y:0,
    file:'img/sozdanie-beskonechnogo-rannera-na-JavaScript-mehanika-dvijeniya-fona-3.png',
    w:width,
});
var dog = game.newAnimationObject({
    x:0, y:0,
    w:120, h:150,
    delay:5,
    animation: pjs.tiles.newAnimation('img/sozdanie-beskonechnogo-rannera-na-JavaScript-mehanika-dvijeniya-fona-4.png',150,180,5)
});
var moveBackGround = function (s){
    fonBG.move(point(-s / 2, 0));
    fonBGTwo.move(point(-s / 2, 0));

    ground.move(point(-s, 0));
    groundTwo.move(point(-s, 0));

    if(fonBG.x + fonBG.w < 0 ){
        fonBG.x = fonBGTwo.x + fonBG.w;
    };
    if(fonBGTwo.x + fonBGTwo.w < 0 ){
        fonBGTwo.x = fonBG.x + fonBG.w;
    }
    if(ground.x + ground.w < 0 ){
        ground.x = groundTwo.x + ground.w;
    };
    if(groundTwo.x + groundTwo.w < 0 ){
        groundTwo.x = ground.x + ground.w;
    }
};
game.newLoop('Runner',function(){
    fonBG.draw();
    fonBGTwo.draw();
    ground.draw();
    groundTwo.draw();
    moveBackGround(5);
    dog.y = ground.y - dog.h / 3
    dog.draw();
});
game.startLoop('Runner',60);