const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// установка схемы
const userScheme = new Schema({
  login: String,
  name: String,
  password: String,
  age: Number,
  orderHistory: [
    {
      name: String,
      price: Number,
    },
  ],
});
module.exports = mongoose.model("User", userScheme);
