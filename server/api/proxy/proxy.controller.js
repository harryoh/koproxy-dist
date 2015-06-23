(function() {
  'use strict';
  var _, handleError, querystring, request, url;

  _ = require('lodash');

  request = require('request');

  url = require('url');

  querystring = require('querystring');

  exports.index = function(req, res) {
    var cookieSite, i, jar, key, len, ref, requestUrl, urlObj;
    if (!req.query.u) {
      return handleError(res, new Error('Wrong querystring'));
    }
    requestUrl = (new Buffer(req.query.u, 'base64')).toString();
    urlObj = url.parse(requestUrl);
    jar = request.jar();
    if (!_.isEmpty(req.cookies)) {
      cookieSite = urlObj.protocol + "//" + urlObj.host;
      ref = Object.keys(req.cookies);
      for (i = 0, len = ref.length; i < len; i++) {
        key = ref[i];
        jar.setCookie(request.cookie(key + "=" + req.cookies[key]), cookieSite);
      }
    }
    return request({
      'method': 'GET',
      'url': requestUrl,
      'jar': jar
    }).on('error', function(err) {
      return handleError(res, err);
    }).pipe(res);
  };

  handleError = function(res, err) {
    return res.status(500).send(err.message);
  };

}).call(this);

//# sourceMappingURL=proxy.controller.js.map
