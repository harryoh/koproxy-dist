(function() {
  'use strict';
  var controller, express, router;

  express = require('express');

  controller = require('./thing.controller');

  router = express.Router();

  router.get('/', controller.index);

  module.exports = router;

}).call(this);

//# sourceMappingURL=index.js.map
