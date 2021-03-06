//step 1, require express
var express = require('express');
//step 2, call express
var app = express();
var middleware = require('./middleware');
var PORT = process.env.PORT || 3000;

//create a route, 'get', corresponds to the http method
// app.get('/', function(req, res){
// 	res.send('Hello Doggy');
// });


// app.use(middleware.requireAuthentication)
app.use(middleware.logger);
//create a another route i.e /about
app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('About us');
});

app.use(express.static(__dirname + '/public'));


//app to listen
app.listen(PORT, function(){
	console.log("listening to port " + PORT)
});

