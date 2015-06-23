(function() {
  'use strict';
  var controller, express, router;

  express = require('express');

  controller = require('./proxy.controller');

  router = express.Router();

  router.get('/', controller.index);

  module.exports = router;

}).call(this);

//# sourceMappingURL=index.js.map
