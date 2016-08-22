var width;
var height;
var line;
var radius;
var i=0;
var colors=['#3c58e7','#addbf3','#f06e00','#f5d09c','#55972b','#d0e50e','#080669','#6c66c8'];
var wins=function(){
	width=g('canvasbox').offsetWidth;
	g('canvasbox').style.height=width*1.5+'px';
	height=g('canvasbox').offsetHeight;
	
	radius=width*0.25/2;
	line=width*0.8/5-radius;
//	console.log(width,height);
	draw();
}
var draw=function(){
	var canvas=g('canvas');
	var context=canvas.getContext('2d');
	
	canvas.width=width;
	canvas.height=height;
	
	drawArc(width/4,height/6,1.6,context,"photoshop");
	drawArc(width/4*3,height/6,1.6,context,"photoshop");
	drawArc(width/4,height/6*3,1.75,context,"photoshop");
	drawArc(width/4*3,height/6*3,1.75,context,"photoshop");
	drawArc(width/4,height/6*5,1.75,context,"photoshop");
	drawArc(width/4*3,height/6*5,1.75,context,"photoshop");
}
function drawArc(x,y,rate,cxt,key){
	cxt.strokeStyle=colors[i];
	cxt.beginPath();
	cxt.arc(x,y,radius,0,rate*Math.PI,false);
	cxt.lineWidth = line;
	cxt.stroke();
	cxt.closePath();

	cxt.strokeStyle=colors[i+1];
	cxt.beginPath();
	cxt.arc(x,y,radius,0,rate*Math.PI,true);
	cxt.lineWidth = line;
	cxt.stroke();
	cxt.closePath();
	
	cxt.font="bold 40px Arial";
	cxt.fillStyle="#7f7f7f";
	cxt.fillText(Math.ceil((rate/2)*100)+'%',x-radius/2,y+radius/4);
	
	cxt.fillStyle=colors[i];
	cxt.fillRect(x-radius-line/2,y+radius+line*1.1,radius*2+line,line*2);
	console.log(x-radius-line/2,y+radius+line*1.1);
	
	cxt.font="20px Arial";
	cxt.fillStyle="#fff";
	cxt.fillText(key,x-radius/8*7+line/4*3,y+radius+line*2.2);
	console.log(x-radius,y+radius+line*1.6);
	
	i+=2;
	if(i>7)
	i=0;
}
var g=function(id){
	return document.getElementById(id);
}
window.onload=wins();

