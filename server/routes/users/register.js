'use strict';

var User = require('../../models/user');
var Joi = require('joi');

module.exports = {
  auth: false,
  validate: {
    payload: {
      email: Joi.string().email(),
      password: Joi.string().min(3)
    }
  },
  auth: false,
  handler: function(request, reply) {
    User.register(request.payload, function(err) {
      if (err) {
        reply().code(408);
      } else {
        reply().code(200);
      }
    });
  }
};
