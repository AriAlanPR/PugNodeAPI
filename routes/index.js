const { json } = require('express');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log(req.query);

    res.render('netsuite_tba', {
        title: 'Netsuite TBA Authorization lo js View',
        data: JSON.stringify(req.query)
    });
});

router.post('/', function(req, res){
    console.log(req.body);

    //magensa.PostNetsuite(req.body);
    res.json(req.body);
});

module.exports = router;