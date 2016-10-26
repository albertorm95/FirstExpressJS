var express = require('express');
var router = express.Router();
var fs = require('fs');

var excursiones = [];
var imagenes = [];
var contenido = JSON.parse(fs.readFileSync('./dbs/excursiones.json'));
for(var i in contenido.ex) {
	excursiones.push(contenido.ex[i]);
}
var contenido = JSON.parse(fs.readFileSync('./dbs/prin-img.json'));
for(var j in contenido.imagenes) {
	imagenes.push(contenido.imagenes[j]);
}

router.get('/', function(req, res) {
  res.render('index', {excursiones : excursiones, imagenes : imagenes});
});

module.exports = router;