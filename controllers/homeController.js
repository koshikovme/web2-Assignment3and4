var { IsAuth } = require("./userController");

exports.main = function (request, response) {
  response.sendFile("../views/main.html");
};

exports.plans = function (request, response) {
  response.sendFile("../views/plans.html");
};
exports.contacts = function (request, response) {
  response.sendFile("../views/contacts.html");
};

exports.profile = function (request, response) {
  response.sendFile("../views/profile.html");
};
