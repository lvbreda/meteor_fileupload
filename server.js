var connect = __meteor_bootstrap__.require("connect");
var fs = __meteor_bootstrap__.require('fs');
var mime = __meteor_bootstrap__.require('mime');
__meteor_bootstrap__.app
    .use(connect.query())
   	.use(connect.bodyParser())
    .use(function (req, res, next) {
      Fiber(function() {
      	 if(req.method == "POST"){
      	 	if(req.url.indexOf('/upload') !== -1){
      	 		 fs.rename(req.files.qqfile.path, 'public' + req.files.qqfile.path.replace('/tmp/',''));
      	 		 res.writeHead(200, {'Content-Type': 'text/plain'});	
		         res.write(JSON.stringify({"success" : true, "path" : '/home/vagrant/upload/public/' + req.files.qqfile.path.replace('/tmp/','')}));
		         res.end();
		         return;
      	 	}
      	 }     	
      	next();
    }).run();
});

