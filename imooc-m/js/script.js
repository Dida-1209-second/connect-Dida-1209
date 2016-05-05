window.onload=function(){
	var music=document.getElementById("music");
	var audio=document.getElementsByTagName("audio")[0];
	var page1=document.getElementById("page1");
	var page2=document.getElementById("page2");
	var page3=document.getElementById("page3");
	//当音乐播放完停止时候，自动停止光盘旋转效果
	audio.addEventListener("ended",function(event){
		music.setAttribute("class","");
		//this.style.animationPlayState="paused";//iphone 6 plus 兼容，其他版本iphone，安卓不兼容
		//this.style.webkitAnimationPlayState="paused";//安卓不兼容
	},false);
	
	
	
	//手机端的click有0.3秒延迟，换个方法
//	music.onclick=function(){
//		if(audio.paused){
//			audio.play();
//			//点击时停止，自动跳到开始转动的位置
//			this.setAttribute("class","play");
//			//停在点击的位置
//			//this.style.animationPlayState="running";//iphone 6 plus 兼容，其他版本iphone，安卓不兼容
//			//this.style.webkitAnimationPlayState="running";//安卓不兼容
//		}else{
//			audio.pause();
//			//点击时停止，自动跳到开始转动的位置
//			this.setAttribute("class","");
//			//停在点击的位置
//			//this.style.animationPlayState="paused";//iphone 6 plus 兼容，其他版本iphone，安卓不兼容
//			//this.style.webkitAnimationPlayState="paused";//安卓不兼容
//		}
//	}
	music.addEventListener("touchstart",function(event){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","play");
		}else{
			audio.pause();
			this.setAttribute("class","");
		}
	},false);
	
	page1.addEventListener("touchstart",function(event){
		page1.style.display="none";
		page2.style.display="block";
		page3.style.display="block";
		page3.style.top    ="100%";
		
		setTimeout(function(){
			page2.setAttribute("class", "page fadeout");
			page3.setAttribute("class","page fadeIn");
			
		},5500);
		
	},false);

}
