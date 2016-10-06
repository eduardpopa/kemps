/// <reference path="../../typings/tsd.d.ts"/>
import {Request, Response} from "express";
var express = require('express');
var router = express.Router();

/* GET list of all points. */
router.get('/', function(req: Request, res: Response, next: Function) {
    res.json({});
   //res.render('index', { title: 'Express' })
});
router.get('/test/', function(req: Request, res: Response, next: Function) {
    //res.json({'id':req.id});
    res.render('index', { title: 'Express' })
});

module.exports = router;
