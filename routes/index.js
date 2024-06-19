var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log(req.query);

    res.render('index', {
        title: 'Test Node REST Services View',
        data: JSON.stringify(req.query)
    });
});

router.post('/', function(req, res){
    console.log(req.body);

    res.json(req.body);
});

module.exports = router;
