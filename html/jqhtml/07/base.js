//设置cookie
function setCookie(_name, _value, _date){
	var d=new Date();
	d.setDate(d.getDate()+_date);
	document.cookie=_name+"="+encodeURIComponent(_value)+"; path=/; expires="+d.toGMTString();
}
//获取cookie
function getCookie(_name){
	var str=document.cookie;
	var arr=str.split("; ");
	for(var i=0; i<arr.length; i++){
		var col=arr[i].split("=");	
		if(col[0]==_name){
			return decodeURIComponent(col[1]);
		}
	}
	return "";
}

$(function(){
	$(".navigator").load("navigator.html");
	$(".uc").load("usercenter.html", function(){
		var userlogin=getCookie("userlogin");
		if(userlogin!=""){
			var a=$("<a></a>");
			a.html("退出");
			a.click(function(){
				setCookie("userlogin", "", -10);
				history.go(0);
				//location.href="index.html";
			});
			$(".uc>.main").html("欢迎您 "+userlogin+" ").append(a);;			
		}
		$("#btnWin").click(function(){
			LoginWindow();		
		});
	});
});
