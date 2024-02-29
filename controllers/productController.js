const Product = require("../models/product.js");
const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const { JWT_SECRET } = require("../controllers/userController.js");
const JWT_SECRET = "icnsicb8*#*)!@CNSIOIEOIENW";

exports.getProducts = async function (req, res) {
  try {
    const allProducts = await Product.find({});
    res.render("products.ejs", { products: allProducts });
  } catch (error) {
    console.error("Error occurred while fetching products:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.buyProduct = async function (req, res) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log("Here is token:", token);
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const { name, price } = req.body.tour;
    const num_price = parseInt(price.replace("$", ""), 10);
    console.log("Here is name and price: ", name, num_price);

    // Find the user based on decoded token
    const user = await User.findOne({ login: decodedToken.login });

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    // Add the purchased tour to the user's orderHistory
    user.orderHistory.push({ name: name, price: num_price });
    await user.save();

    res.json({ success: true });
  } catch (error) {
    console.error("Error occurred while purchasing tour:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
