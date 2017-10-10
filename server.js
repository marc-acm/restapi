var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  User = require('./api/models/userListModel'),
  bodyParser = require('body-parser');


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/userListdb');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/userListRoutes'); //importing route
routes(app); //register the route


app.use(function(req, res) {
	res.status(404).send({url: req.orginalUrl + 'not found'})
});


app.listen(port);

console.log('user list RESTful API server started on: ' + port);
