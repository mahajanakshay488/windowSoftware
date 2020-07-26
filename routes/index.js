var express = require('express');
var router = express.Router();
var fs = require('fs');
var stringify = require('csv-stringify');

router.get('/', function(req, res, next) {
   
    res.render('index');
});


router.get('/csv', function(req, res){

    let rawdata = fs.readFileSync('products.json');
    let details = JSON.parse(rawdata);
        todos = details.products;
        
        stringify(todos ,{ header: true })
        .pipe(res);
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=\"' + 'download-' + Date.now() + '.csv\"');
    
});

router.get('/details', function(req, res){
    let rawdata = fs.readFileSync('products.json');
    let details = JSON.parse(rawdata);
 res.send(details);
     details.products.forEach(function(elem){
        
     });
});



module.exports = router;
