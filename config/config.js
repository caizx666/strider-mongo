"use strict";

const app = window.app;
const configDefaults = {
  url: "mongodb://xxx.xxx.xxx",
    db: "xxxx",
    user: "xxxx",
    pwd: "123456",
    roles: ["readWrite"]
};

/*
 * $scope.configs, $scope.branch and $scope.pluginConfig, among others are available from the parent scope
 * */
app.controller("MongoController", [
  "$scope",
  function ($scope) {
    $scope.saving = false;

    $scope.$watch("configs[branch.name].mongo.config", function (value) {
      $scope.config = value || configDefaults;

    $scope.save = function () {
      $scope.saving = true;
      $scope.pluginConfig("mongo", $scope.config, function () {
        $scope.saving = false;
      });
    };
  },
]);
