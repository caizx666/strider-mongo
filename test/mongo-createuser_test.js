"use strict";

const chai = require("chai");
const expect = chai.expect;

process.env.MONGO_URL = "mongodb://test002:123456@118.190.32.156:27017";
const mongo = require("../lib/mongo-createuser");

describe("mongo createuser test", function () {
  it("create db user if not exists", async function () {
    await mongo.createUser({
      db: "testdb",
      user: { name: "test003", pwd: "123456", roles: ["readWrite"] },
    });
  });
});
