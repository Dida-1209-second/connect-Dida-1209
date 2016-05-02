(function(){
	function slideDown(distance){
		var box1=document.getElementById("box1"),
			box2=document.getElementById("box2");
			box2.style.display="none";
			box1.style.display="block";
			box1.style.height=(parseInt("20px")-distance)+"px";
	}
	
	function refresh(){
		var box1=document.getElementById("box1"),
			box2=document.getElementById("box2");
			box1.style.display="none";
			box1.style.height="20px";
			box2.style.display="block";
	}
	
	function finish(){
		var box1=document.getElementById("box1"),
			box2=document.getElementById("box2");
			box1.style.display="none";
			box2.style.display="none";
	}
	
	user_slideDown("content","y");
	
	function user_slideDown(content,way){
		var start = 0, 
            end = 0, 
            content = document.getElementById(content); 
            content.addEventListener("touchstart",touchStart,false); 
        	content.addEventListener("touchmove",touchMove,false); 
        	content.addEventListener("touchend",touchEnd,false); 
			function touchStart(event){   
	            var touch = event.targetTouches[0];
	                start = touch.pageY; 
	        } 
	        function touchMove(event){  
	            var touch = event.targetTouches[0]; 
	                end = (start - touch.pageY); 
	                if(end < 0){ 
	                    slideDown(end);  
	            } 
	        } 
	        function touchEnd(event){  
	            refresh(); 
	            setTimeout(function(){  
	                finish(); 
	                },2500);  
	        } 
	}
})()
