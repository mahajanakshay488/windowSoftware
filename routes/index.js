var express = require('express');
var router = express.Router();
var fs = require('fs');
var axios = require('axios');


router.get('/', function(req, res, next) {
   
    res.render('index');
});


router.get('/details', function(req, res){
    let rawdata = fs.readFileSync('products.json');
    let details = JSON.parse(rawdata);
     res.send(details);
     details.products.forEach(function(elem){
        
     });
});



module.exports = router;
