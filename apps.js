process.env.UV_THREADPOOL_SIZE = 10;

var express = require('express');
var bodyParser = require('body-parser');
var mustacheExpress = require('mustache-express');
var app = express();
var path = require("path");
var config = require('./common/config');

app.engine('html',mustacheExpress()); // load mustache templating in case needed
app.set('view engine','html');
app.set('views',__dirname + '/views');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var orm = require("./common/model");
orm.setup(process.cwd()+'/models/registers', config.mysql.dbName,config.mysql.userName, config.mysql.password, {
			host : config.mysql.url,
			port : config.mysql.port,
			dialect : 'mysql',
			pool : {
				max : 1,
				min : 1,
				idle : 10000
			},
			logging : false
		});

// static resources
app.use(express.static(__dirname + '/js'));

// All of the API for application
var jemaatRegisters = require("./controllers/registers/jemaat_registers");
jemaatRegisters.setupService(app);

// All of routes for application
app.get('/', function(request, response){
    response.sendFile(process.cwd() + '/views/registers/jemaat.html');
});

app.get('/personalData', function(request, response){
    response.sendFile(process.cwd() + '/views/registers/personalData.html');
});

app.get('/personalDataDetail', function(request, response){
	response.sendFile(process.cwd() + '/views/registers/personalDataDetail.html');
});

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Listening at http://%s:%s", host, port)

});