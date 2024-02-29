var path = require("path");

exports.main = function (request, response) {
  response.sendFile(path.resolve(__dirname, "../views/main.html"));
};

exports.plans = function (request, response) {
  response.sendFile(path.resolve(__dirname, "../views/plans.html"));
};

exports.contacts = function (request, response) {
  response.sendFile(path.resolve(__dirname, "../views/contacts.html"));
};

exports.profile = function (request, response) {
  response.sendFile(path.resolve(__dirname, "../views/profile.html"));
};
