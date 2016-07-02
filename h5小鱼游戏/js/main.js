var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var bgPic= new Image();

var ane;
var fruit;

document.body.onload=game;
function game(){
	init();
	lastTime=Date.now();
	deltaTime=0;
	gameloop();
}
function init(){
	//获得canvas context
	can1=document.getElementById("canvas1");//fishes,dust,ui,circle
	ctx1=can1.getContext('2d');
	can2=document.getElementById("canvas2");//background,ane,fruits
	ctx2=can2.getContext('2d');
	
	//背景图片绘制
	bgPic.src="src/background.jpg";
	
	canWidth=can1.width;
	canHeight=can1.height;
	
	ane=new aneObj();
	ane.init();
	
	fruit=new fruitObj();
	fruit.init();
	//
}

function gameloop(){
	window.requestAnimFrame(gameloop);//优点：相对于setInterval，setTimeout更科学，当前绘制完成后，根据机器性能智能计算绘制下一帧的时间
									  //缺点：帧与帧之间的间隔不同，时间大小不同，速度变化突兀
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;

	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
}
