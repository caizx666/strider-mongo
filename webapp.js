"use strict";

const debug = require("debug")("strider-mongo:webapp");

module.exports = {
  // mongoose schema, if you need project-specific config
  config: {
    url: { type: String },
    user: { type: String },
  },
};
