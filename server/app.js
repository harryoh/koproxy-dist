
/**
Main application file
 */

(function() {
  'use strict';
  var app, config, exports, express, server;

  process.env.NODE_ENV = process.env.NODE_ENV || 'development';

  express = require('express');

  config = require('./config/environment');

  app = express();

  server = require('http').createServer(app);

  require('./config/express')(app);

  require('./routes')(app);

  server.listen(config.port, config.ip, function() {
    return console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });

  exports = module.exports = app;

}).call(this);

//# sourceMappingURL=app.js.map
