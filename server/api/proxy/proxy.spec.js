(function() {
  'use strict';
  var app, request, should;

  should = require('should');

  app = require('../../app');

  request = require('supertest');

  describe('GET /proxy', function() {
    return it('should respond with JSON array', function(done) {
      return request(app).get('/proxy').expect(200).expect('Content-Type', /json/).end(function(err, res) {
        if (err) {
          return done(err);
        }
        res.body.should.be["instanceof"](Array);
        return done();
      });
    });
  });

}).call(this);

//# sourceMappingURL=proxy.spec.js.map
