var canvasWidth=800;
var canvasHeight=canvasWidth;
var isMouseDown=false;
var lastLoc={x:0,y:0};

var canvas=document.getElementById('canvas');
var context=canvas.getContext("2d");

canvas.width=canvasWidth;
canvas.height=canvasHeight;

drawGrid();
canvas.onmousedown=function(e){
	e.preventDefault();
	isMouseDown=true;
	lastLoc=windowToCanvas(e.clientX,e.clientY);
	console.log(lastLoc.x+','+lastLoc.y);
}
canvas.onmouseup=function(e){
	e.preventDefault();
	isMouseDown=false;
}
canvas.onmouseout=function(e){
	e.preventDefault();
	isMouseDown=false;
}
canvas.onmousemove=function(e){
	e.preventDefault();
	if(isMouseDown){
		var curLoc=windowToCanvas(e.clientX,e.clientY);
		
		context.beginPath();
		console.log(lastLoc.x+','+lastLoc.y);
		context.moveTo(lastLoc.x,lastLoc.y);
		context.lineTo(curLoc.x,curLoc.y);
		
		context.strokeStyle="black";
		context.stroke();
		
		lastLoc=curLoc;
	}
}

function windowToCanvas(x,y){
	var bbox=canvas.getBoundingClientRect();
	return {x:Math.round(x-bbox.left),y:Math.round(y-bbox.top)};
}

function drawGrid(){
context.strokeStyle="rgb(230,11,9)";

context.beginPath();
context.moveTo(3,3);
context.lineTo(canvasWidth-3,3);
context.lineTo(canvasWidth-3,canvasHeight-3);
context.lineTo(3,canvasHeight-3);
context.closePath();

context.lineWidth=6;
context.stroke();

context.beginPath();
context.moveTo(0,0);
context.lineTo(canvasWidth,canvasHeight);

context.moveTo(canvasWidth,0);
context.lineTo(0,canvasHeight);

context.moveTo(canvasWidth/2,0);
context.lineTo(canvasWidth/2,canvasHeight);

context.moveTo(0,canvasHeight/2);
context.lineTo(canvasWidth,canvasHeight/2);

context.lineWidth=1;
context.stroke();
	
}






