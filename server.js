var connect = __meteor_bootstrap__.require("connect");
var Collection = new Meteor.Collection('collection');
__meteor_bootstrap__.app
    .use(connect.query())
    .use(function (req, res, next) {
      // Need to create a Fiber since we're using synchronous http calls
      Fiber(function() {
      	
      	 if(req.method == "POST"){
      	 	Mongo = new Meteor._Mongo(__meteor_bootstrap__.mongo_url);
      	 	if(_.indexOf(['/posturl'], req.url) !== -1){
      	 		 //Post action
      	 		 Mongo.insert("collection",{name:"lander"});
      	 		 res.writeHead(200, {'Content-Type': 'text/html'});	
		         res.write("Hi");
		         res.end();
		         return;
      	 	}
      	 }     	
      	next();
    }).run();
});
