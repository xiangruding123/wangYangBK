var ajax={
	get:function(url, fnSucc, fnFail){
		var xhr;
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActiveXObject("Msxml2.XMLHTTP");
		}	
		xhr.open("get", url, true);
		xhr.send();
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 ){
				if(xhr.status == 200){
					// 2，执行该函数，执行时把参数传进来
					fnSucc(xhr.responseText);//回调函数
				}else{
					if(fnFail){
						fnFail(xhr.status);
					}
				}
			}
		}
	},
	post:function(url, arg, fnSucc){
		var xhr;
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActiveXObject("Msxml2.XMLHTTP");
		}	
		xhr.open("post", url, true);
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded'); 
		xhr.send(arg);
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					fnSucc(xhr.responseText);
				}
			}
		}
	}
}
