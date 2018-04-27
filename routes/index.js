var express = require('express');
var router = express.Router();

var json = require('../try.json');

/* GET home page. */
router.get('/', function(request, response, next) {
  response.render('index', {
    title: 'Node-Express Project',
    desc: "This my first first node js and express project !!!!",
    level: 1,
      tryJson: json
  });
});

module.exports = router;
