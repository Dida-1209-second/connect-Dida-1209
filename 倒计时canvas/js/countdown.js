window.onload=function(){
	
	var canvas=document.getElementById('canvas');
	var context=canvas.getContext('2d');
	
	canvas.width=WINDOW_WIDTH;
	canvas.height=WINDOW_HEIGHT;
	
	render(context)
}

function render(cxt){
	var hours=12;
	var minutes=34;
	var seconds=56;
	
	renderDigit(0,0,parseInt(hours/10),cxt)
}
