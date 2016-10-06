/// <reference path="../typings/tsd.d.ts"/>
import {Request, Response} from "express";
import * as api_places from "_api/places";

var express = require('express');
let  router = express.Router();

//router.use('/_api/places', api_places);

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: Function) {
  res.render('index', { title: 'Express' })
});
router.get('/_api', function(req: Request, res: Response, next: Function) {
  res.render('sdk', { title: 'SDK' })
});
router.get('/_api/places', function(req: Request, res: Response, next: Function) {
  res.render('sdk', { title: 'Express' })

});
router.get('/_api/places(:radius)', function(req: Request, res: Response, next: Function) {

  res.render('index', { title: 'Express' })
});

router.get('/_api/places/:id', function(req: Request, res: Response, next: Function) {
  res.render('index', { title: 'Express' })
});

module.exports = router;
