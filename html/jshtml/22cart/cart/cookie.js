function setCookie(_name, _value, _day){
	var d=new Date();
	d.setDate(d.getDate()+_day);
	document.cookie=_name+"="+encodeURIComponent(_value)+";expires="+d.toGMTString()+";path=/";
}

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