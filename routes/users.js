var express = require('express');
var router = express.Router();

/* GET users page. */
router.get('/', function(request, response, next) {
    response.render('users', {
        title: 'Users Page',
        desc: "Luckily I am the only user of this project"

    });
});

module.exports = router;
