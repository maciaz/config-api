var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db;
if(process.env.ENV == 'Test'){
    //need to create another db for tests
    db = mongoose.connect('mongodb://test:pass@ds115579.mlab.com:15579/heroku_36nvjv1v');
}
else{
    db = mongoose.connect('mongodb://test:pass@ds115579.mlab.com:15579/heroku_36nvjv1v');
}

var Config = require('./models/configModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

configRouter = require('./Routes/configRoutes')(Config);

app.use('/api/config', configRouter);

app.listen(port, function(){
    console.log('Gulp is running this app on PORT: ' + port);
});

module.exports = app;