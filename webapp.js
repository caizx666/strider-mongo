"use strict";

const debug = require("debug")("strider-mongo:webapp");

module.exports = {
  // mongoose schema, if you need project-specific config
  config: {
    mongo: {
      url: { type: String },
      user: {
        db: { type: String },
        name: { type: String },
        pwd: { type: String },
        roles: [String],
      },
    },
  },
};
