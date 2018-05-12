var http = require('http'); //something like import in python
var url = require('url');
var server = new http.Server();
server.listen(8080, '127.0.0.1');

server.on('request', function(req, res){//event handling
	//console.log(req.method, req.url);
	let url_parsed = url.parse(req.url, true);
	//console.log(url_parsed)
	if(url_parsed.pathname == '/echo' && url_parsed.query.message){
		//res.setHeader({'Xcs', '201'});//non-standart headers starts with letter X
		res.writeHead(200, {'cache-control': 'no cache', 'Xcs': '201'});
		res.end(url_parsed.query.message);
	}
	else{
		res.statusCode = 404;
		res.end('Page not found');
	}
	//res.end('Hello, world!');
})
