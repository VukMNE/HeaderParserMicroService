var express = require("express");
var app = express();
app.get("/", function(request,response){
	//console.log(request);
	var ipAddress = request.ip.substring(request.ip.lastIndexOf(":")+1);
	var language = request.headers['accept-language'].split(',')[0];
	var firstBracket = request.headers['user-agent'].indexOf('(')+1;
	var secondBracket = request.headers['user-agent'].indexOf(')');
	var obj = {	"ip-address": ipAddress,
				"language": language,
				"software": request.headers['user-agent'].substring(firstBracket, secondBracket)};
	response.send(obj);
});
app.listen(process.env.PORT || 5000);