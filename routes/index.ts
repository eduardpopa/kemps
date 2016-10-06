/// <reference path="../typings/tsd.d.ts"/>
import {Request, Response} from "express";
//import * as api_places from "_api/places";

var express = require('express');
let  router = express.Router();
var mysql = require ('mysql');


var pool = mysql.createPool('mysql://bf0d6bb3bf69b4:7421a272@eu-cdbr-west-01.cleardb.com/heroku_1815806c04b2521?reconnect=true');
//router.use('/_api/places', api_places);

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: Function) {
  res.render('index', { title: 'Express' })
});
router.get('/_api', function(req: Request, res: Response, next: Function) {
  res.render('sdk', { title: 'SDK' })
});
router.get('/_api/places', function(req: Request, res: Response, next: Function) {
  pool.getConnection(function (err, connection) {
    if (err) {
      res.json({ "code": 100, "status": "Error in connection database" });
      return;
    }
    console.log('connected as id ' + connection.threadId);
    connection.query("select * from places", function (err, rows) {
      connection.release();
      if (err) throw err;
      res.json(rows);
    });
    connection.on('error', function (err) {
      res.json({ "code": 100, "status": "Error in connection database" });
      return;
    });
    return;
  });

});
router.get('/_api/places(:radius)', function(req: Request, res: Response, next: Function) {

  res.render('index', { title: 'Express' })
});

router.get('/_api/places/:id', function(req: Request, res: Response, next: Function) {
  res.render('index', { title: 'Express' })
});

module.exports = router;
