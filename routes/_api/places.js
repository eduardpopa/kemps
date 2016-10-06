"use strict";
var express = require('express');
var router = express.Router();
/* GET list of all points. */
router.get('/', function (req, res, next) {
    res.json({});
    //res.render('index', { title: 'Express' })
});
router.get('/test/', function (req, res, next) {
    //res.json({'id':req.id});
    res.render('index', { title: 'Express' });
});
module.exports = router;
