"use strict";
var express = require('express');
var router = express.Router();
//router.use('/_api/places', api_places);
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/_api', function (req, res, next) {
    res.render('sdk', { title: 'SDK' });
});
router.get('/_api/places', function (req, res, next) {
    res.render('sdk', { title: 'Express' });
});
router.get('/_api/places(:radius)', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/_api/places/:id', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
module.exports = router;
