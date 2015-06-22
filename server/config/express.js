
/**
Express configuration
 */

(function() {
  'use strict';
  var bodyParser, compression, config, cookieParser, errorHandler, express, methodOverride, morgan, path;

  express = require('express');

  morgan = require('morgan');

  compression = require('compression');

  bodyParser = require('body-parser');

  methodOverride = require('method-override');

  cookieParser = require('cookie-parser');

  errorHandler = require('errorhandler');

  path = require('path');

  config = require('./environment');

  module.exports = function(app) {
    var env;
    env = app.get('env');
    app.set('views', config.root + '/server/views');
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(compression());
    app.use(bodyParser.urlencoded({
      extended: false
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser());
    if ('production' === env) {
      app.use(morgan('dev'));
    }
    if ('development' === env || 'test' === env) {
      app.use(morgan('dev'));
      return app.use(errorHandler());
    }
  };

}).call(this);

//# sourceMappingURL=express.js.map
