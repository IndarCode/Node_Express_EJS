var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(request, response, next) {
    response.render('about', {
        title: 'About Page',
        desc: "This my first first node js and express project !!!!",
        level: 1
    });
});

module.exports = router;

