
/**
Main application routes
 */

(function() {
  'use strict';
  var errors, path;

  errors = require('./components/errors');

  path = require('path');

  module.exports = function(app) {
    app.use('/api/things', require('./api/thing'));
    return app.route('/*').get(errors[404]);
  };

}).call(this);

//# sourceMappingURL=routes.js.map
