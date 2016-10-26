var	express = require('express');
var hbs = require('express-handlebars');
var path = require('path');

var app = express();

//Sirviendo estaticos y views
app.use('/static', express.static(__dirname + '/dist'));
app.set('views', path.join(__dirname, 'views'));

//View Engine
app.engine('hbs', hbs({extname: 'hbs'}));
app.set('view engine', 'hbs');

//Rutas
var index = require('./routes/index');

//Utilizando las Rutas
app.use('/', index);

app.listen(29380);