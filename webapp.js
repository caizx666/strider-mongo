"use strict";

const debug = require("debug")("strider-mongo:webapp");

module.exports = {
  // mongoose schema, if you need project-specific config
  config: {
    mongo: {
      user: {
        db: { type: String },
        user: { type: String },
        pwd: { type: String },
        roles: [String],
      },
    },
  },
};
