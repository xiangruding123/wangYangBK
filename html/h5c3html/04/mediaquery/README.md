###媒体查询的两种方式


1、
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1" />
+
@media screen and (max-width:500px) {
	/*最大宽度为500px是的样式*/
}
@media screen and (max-width:1000px) {
	/*最大宽度为1000px是的样式*/
}


2、
<link rel="stylesheet" href="wide.css" media="screen and (min-width:1024px)" />
<link rel="stylesheet" href="mobile.css" media="screen and (max-width:320px)" />
		
		

