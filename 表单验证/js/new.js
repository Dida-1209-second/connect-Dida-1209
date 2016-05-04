function getLength(str){
		return str.replace(/[^\x00-\xff]/g,"xx").length;
}
function findStr(str,str0){
	var tmp=0;
	for(var i=0;i<str.length;i++){
		if(str.charAt(i)==str0){
			tmp++;
		}
	}
	return tmp;
}

window.onload=function(){
	
	var oInput=document.getElementsByTagName('input');
	var oName=oInput[0];
	var pwd=oInput[1];
	var pwd2=oInput[2];
	var word=document.getElementsByTagName('p');
	var name_word=word[0];
	var pwd_word=word[1];
	var pwd2_word=word[2];
	var oEm=document.getElementsByTagName('em');
	var count=document.getElementById('count');
	var num=0;
	
	//1、数字、字母（不分大小写）、汉字、下划线
	//2、5-25字符，推荐使用中文会员名
	//var re=/[^\w\u4e00-\u9fa5]/g;
	
	
	//用户名
	oName.onfocus=function(){
		name_word.style.display='block';
		name_word.innerHTML="<i class='ati'></i>5-25个字符，一个汉字为两个字符，推荐使用中文会员名";
	}
	oName.onkeyup=function(){
		count.style.display='block';
		num=getLength(this.value);
		count.innerHTML=num+"个字符";
		if(num==0){
			count.style.display='none';
		}
	}
	oName.onblur=function(){
		//含有非法字符
		var re=/[^\w\u4e00-\u9fa5]/g;
		if(re.test(this.value)){
			name_word.innerHTML="<i class='err'></i>含有非法字符!";
		}
		//不能为空
		else if(this.value==""){
			name_word.innerHTML="<i class='err'></i>不能为空！";
		}
		//长度超过25个字符
		else if(num>25){
			name_word.innerHTML="<i class='err'></i>长度超过25个字符";
		}
		//长度少于6个字符
		else if(num<6){
			name_word.innerHTML="<i class='err'></i>长度少于6个字符";
		}
		//OK
		else{
			name_word.innerHTML="<i class='ok'></i>ok！";
		}
	}
	
	
	//密码
	pwd.onfocus=function(){
		pwd_word.style.display='block';
		pwd_word.innerHTML="<i class='ati'></i>6-16个字符，请使用字母加数字或符号的组合密码，不能单独使用字母、数字或符号";
	}
	pwd.onkeyup=function(){
		//大于5个字符“中”
		if(this.value.length>5){
				oEm[1].className="active";
				pwd2.removeAttribute("disabled");
				pwd2_word.style.display='block';
			
		}
		else {
			oEm[1].className="";
			pwd2.setAttribute("disabled");
			pwd2_word.style.display='none';
		}
		//大于10个字符“强”
		if(this.value.length>10){
				oEm[2].className="active";
				pwd2.removeAttribute("disabled");
				pwd2_word.style.display='block';
		}
		else {
     		oEm[2].className="";
		}
	}
	pwd.onblur=function(){
		var m=findStr(pwd.value,pwd.value[0]);
		var re=/[^\d]/g;
		var re_n=/[^a-zA-Z]/g;
		//不能为空
		if(this.value==""){
			pwd_word.innerHTML="<i class='err'></i>不能为空!";
		}
		//不能都是同一个字符
		else if(m==this.value.length){
			pwd_word.innerHTML="<i class='err'></i>不能都是同一个字符!";		
		}
		//不能都是数字
		else if(!re.test(this.value)){
			pwd_word.innerHTML="<i class='err'></i>不能都是数字!";
		}
		//不能都是字母
		else if(!re_n.test(this.value)){
			pwd_word.innerHTML="<i class='err'></i>不能都是字母!";
		}
		//长度应为6-16个字符
		else if(this.value.length<6||this.value.length>16){
			pwd_word.innerHTML="<i class='err'></i>长度应为6-16个字符!";
		}
		//ok
		else{
			pwd_word.innerHTML="<i class='ok'></i>OK!";
		}
	}
	//再次输入密码
	pwd2.onblur=function(){
		if(pwd2.value!=pwd.value){
			pwd2_word.innerHTML="<i class='err'></i>两次输入不一致!";
		}else{
			pwd2_word.innerHTML="<i class='ok'></i>OK!";
		}
	}
	
}
