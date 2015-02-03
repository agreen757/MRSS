/**
 * Express configuration
 */

'use strict';

var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var path = require('path');
var config = require('./environment');
<<<<<<< HEAD
var getFeed = require('./mrss/mrss.js');
var fs = require('fs');
=======
var getFeed = require('./mrss/mrss.js')
>>>>>>> e69f24340b640eb1eff47ad8e20670dc22fe0126

module.exports = function(app) {
  var env = app.get('env');

  app.set('views', config.root + '/server/views');
  app.set('view engine', 'jade');
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());
  
  if ('production' === env) {
    app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
    app.use(express.static(path.join(config.root, 'public')));
    app.set('appPath', config.root + '/public');
    app.use(morgan('dev'));
  }

  if ('development' === env || 'test' === env) {
    app.use(require('connect-livereload')());
    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(path.join(config.root, 'client')));
    app.set('appPath', 'client');
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
    app.get('/rss', function(req,res){
        getFeed.getFeed(function(err,feed){
            res.set('Content-Type', 'text/xml');
<<<<<<< HEAD
            res.send(feed)
=======
            
            res.send(feed.render('rss-2.0'))
>>>>>>> e69f24340b640eb1eff47ad8e20670dc22fe0126
        })
    })
  }
};