var dustObj=function(){
	this.x=[];
	this.y=[];
	this.amp=[];
	this.no=[];
	this.alpha;
}
dustObj.prototype.num=30;
dustObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.x[i]=Math.random()*canWidth;
		this.y[i]=Math.random()*canHeight;
	}
}
