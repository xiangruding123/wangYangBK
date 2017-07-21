function LoginWindow() {
	//透明背景层
	var bgDiv = $("<div></div>");
	bgDiv.css({
		"position": "fixed",
		"bottom": "0",
		"top": "0",
		"left": "0",
		"right": "0",
		"background": "gray",
		"opacity": 0.5
	});
	$("body").append(bgDiv);
	//登陆窗口
	var WinDiv = $("<div></div>");
	WinDiv.css({
		"position": "fixed",
		"width": 500,
		"height": 350,
		"top": ($(window).height() - 350) / 2,
		"left": ($("body").width() - 500) / 2,
		"background": "white"
	});
	$("body").append(WinDiv);
	//标题栏
	var pClose = $("<p>关闭</p>");
	pClose.css({
		"position": "absolute",
		"right": 5,
		"top": 5,
		"cursor": "pointer"
	}).click(function() {
		bgDiv.remove();
		WinDiv.remove();
	});
	var divTitle = $("<div></div>");
	divTitle.css({
		"background": "skyblue",
		"color": "white",
		"padding": 5,
		"position": "relative"
	}).html("登陆窗口").append(pClose);
	WinDiv.append(divTitle);
	//表单
	var table = $("<table class='w'></table>");
	var tr1 = $("<tr></tr>");
	var tr2 = $("<tr></tr>");
	var tr3 = $("<tr></tr>");

	var td1a = $("<td></td>");
	var td1b = $("<td></td>");
	var td2a = $("<td></td>");
	var td2b = $("<td></td>");
	var td3a = $("<td></td>");
	var td3b = $("<td></td>");

	var input1 = $("<input />");
	var input2 = $("<input />");
	var input3 = $("<input />");

	table.append(tr1);
	table.append(tr2);
	table.append(tr3);

	tr1.append(td1a);
	tr1.append(td1b);

	tr2.append(td2a);
	tr2.append(td2b);

	tr3.append(td3a);
	tr3.append(td3b);

	td1a.html("用户名");
	td2a.html("密码");

	td1b.append(input1);
	td2b.append(input2);
	td3b.append(input3);

	input3.attr({
		"type": "button",
		"value": "登陆"
	}).click(function() {
		var u = $(".w input:eq(0)").val();
		var p = $(".w input:eq(1)").val();
		alert(u + "," + p);
		/*
		登陆的代码
		*/
		bgDiv.remove();
		WinDiv.remove();
	});
	WinDiv.append(table);
}