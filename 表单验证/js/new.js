window.onload=function(){
	function getLength(str){
		return str.replace(/[^\x00-\xff]/g,"xx").length;
	}
	
	var oInput=document.getElementsByTagName('input');
	var oName=oInput[0];
	var pwd=oInput[1];
	var pwd2=oInput[2];
	var word=document.getElementsByClassName('msg');
	var name_word=word[0];
	var pwd_word=word[1];
	var pwd2_word=word[2];
	var count=document.getElementsByTagName('b');
	var num=0;
	
	oName.onfocus=function(){
		name_word.style.display='block';
	}
	oName.onkeyup=function(){
		count.style.visibility='visible';
		num=getLength(this.value);
		count.innerHTML=num+'个字符';
	}
	oName.onblur=function(){
		//长度少于6个字符
		
		//长度超过25个字符
		
		//含有非法字符
		
		//不能为空
		
	}
}
