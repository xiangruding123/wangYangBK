var i=0;

function timedCount()
{
	i=i+1;
	postMessage(i);//重点，向客户端发送数据
	setTimeout("timedCount()",1000);
}

timedCount();