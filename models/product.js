const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// установка схемы
const productScheme = new Schema({
  name: String,
  price: Number,
});
module.exports = mongoose.model("Summer Camp", productScheme);
