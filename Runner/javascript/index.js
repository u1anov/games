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
game.newLoop('Runner',function(){
    fonBG.draw();
    fonBGTwo.draw();
    
    camera.move(point(1,0))
});
game.startLoop('Runner',60);