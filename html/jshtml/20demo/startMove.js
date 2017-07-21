function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}
/*
运动函数
参数：
	obj		指被操作的对象
	json	指被操作的对象的css属性和该属性的目标值
			对象类型，键值对形式，键为css属性名，值为css属性的目标值
			例如{"width":500, "height":300}
	fnEnd	指被操作的对象的css属性到达目标值时，触发的函数
*/
function startMove(obj, json, fnEnd){	
	clearInterval(obj.timer);//每次触发该函数时，都应该清除一下该对象上的定时器
	obj.timer=setInterval(function(){//在该对象上自定义一个属性来表示定时器		
		var flag=true;//用该变量来表示所有的属性是否已到达目标值，为真时表示都已经到达。
		for(var i in json){
			var attr = i;//css属性名
			var target = json[i];//css属性的目标值	
			var v=getStyle(obj, attr);//指当前css属性的值
			if(attr=="opacity"){//如果是透明度
				//如果没有四舍五入，当前值有可能不等于目标值
				v=Math.round(v*100);//opacity的值是0-1；小数处理起来比较麻烦，所以用0-100来表示透明度
			}else{
				v=parseInt(v);	//如宽度高度这种值时，应把px过滤掉
			}
			//每次定时器执行时，都根据目标值和当前值的间距，除以10，求步长，即逐渐减速		
			var speed = (target-v)/7;//速度值，即取步长，步长指迈步时两脚间的间距
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			//因为定时器最后几次执行时，speed一定是正负1的值，所以会与目标值相同
			if(v==target){//如果当前值 等于 目标值
				
			}else{
				flag=false;	//表示有属性没有到达目标值
				//更新属性值
				if(attr=="opacity"){
					obj.style.opacity=(v+speed)/100;	
					obj.style.filter="alpha(opacity="+(v+speed)+")";	//滤镜：兼容写法
				}else{
					obj.style[attr]=(v+speed)+"px";
				}
			}		
		}	
		if(flag){
			//清除定时器
			clearInterval(obj.timer);
			if(fnEnd){	//如果该函数存在
				fnEnd();	//触发该函数
			}	
		}		
	}, 30);	
}