process.env.UV_THREADPOOL_SIZE = 10;
console.log(process.env);

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require("path");

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var orm = require("./common/model");
orm.setup(process.cwd()+'/models/registers', "skeletondb","root", "password", {
			host : 'localhost',
			port : 3306,
			dialect : 'mysql',
			pool : {
				max : 1,
				min : 1,
				idle : 10000
			},
			logging : false
		});

// All of the API for application
require("./controllers/registers/jemaat_registers")(app);

// All of routes for application
app.get('/', function(request, response){
    response.sendFile(process.cwd() + '/views/jemaat.html');
});

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Listening at http://%s:%s", host, port)

});