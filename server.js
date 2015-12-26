var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime");
var zlib = require("zlib");

var server = http.createServer(function (req, resp){
	var u = decodeURIComponent(req.url);
	if(u == "/"|| u == "") u = "/index.html";
	u = "."+u;
	console.log(u);
	var acceptEncoding = req.headers['accept-encoding'];
	if(!acceptEncoding) acceptEncoding = '';
	fs.readFile(u, function(err, data){
		var ur = u;
		if(err) {
			resp.writeHead(404);
			resp.end();
		}else{
			console.log(ur, typeof(data), data.length);
			if(acceptEncoding.match(/\bdeflate\b/))	{
					resp.writeHead(200,{
						'Content-Type': mime.lookup(ur),
						'content-encoding': 'deflate'
					});
					zlib.deflate(data, function(err, result){
						if(err) console.error(err);
						resp.end(result);
					});
			}else
			if(acceptEncoding.match(/\bgzip\b/))	{
					resp.writeHead(200,{
						'Content-Type': mime.lookup(ur),
						'content-encoding': 'gzip'
					});
					zlib.gzip(data, function(err, result){
						if(err) console.error(err);
						resp.end(result);
					});
			}else{
					resp.writeHead(200,{
						'Content-Type': mime.lookup(ur)
					});
					resp.end(data);
			}
		}
	});
});

server.listen(801);