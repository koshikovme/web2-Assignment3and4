var { IsAuth } = require("./userController");

exports.main = function (request, response) {
  response.sendFile("C:\\Users\\Алимжан\\Desktop\\node2\\views\\main.html");
};

exports.plans = function (request, response) {
  response.sendFile("C:\\Users\\Алимжан\\Desktop\\node2\\views\\plans.html");
};
exports.contacts = function (request, response) {
  response.sendFile("C:\\Users\\Алимжан\\Desktop\\node2\\views\\contacts.html");
};

exports.profile = function (request, response) {
  response.sendFile("C:\\Users\\Алимжан\\Desktop\\node2\\views\\profile.html");
};
