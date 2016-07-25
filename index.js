var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
var express = require("express");
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

// Turn on server
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("We're ready to receive text messages at " + port + "!");
});

// Set up static page (main page)
app.get("/", function(request, response){
  console.log(request.body);
  response.status(200);
});