var devBlog_url = "Pages/WebDev/index.html",
		calculator_url = "Pages/Calculator/index.html",
		codeEditor_url = "index.html",
		// url-variables
		textarea_selector = "#textarea_code",
		iframe_selector = "#iframe_page";
		// selector-variables

function load(url,textarea_selector,iframe_selector){
	$.get(url, function(data, status){
		// alert("Data: " + data + "\nStatus: " + status);
		$(textarea_selector).text(data);
		$(iframe_selector).attr('src',url);   
	});
}

$(document).ready(function(){
	$("#load__button_1").click(function(){
		load(devBlog_url,textarea_selector,iframe_selector);
	});
	$("#load__button_2").click(function(){
		load(calculator_url,textarea_selector,iframe_selector);
	});
	$("#load__button_3").click(function(){
		load(codeEditor_url,textarea_selector,iframe_selector);
	});
});
