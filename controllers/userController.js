const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "icnsicb8*#*)!@CNSIOIEOIENW";
// Sign In controller
exports.signInForm = function (req, res) {
  res.sendFile("C:\\Users\\Алимжан\\Desktop\\node2\\views\\signIn.html");
};

exports.signIn = async function (req, res) {
  const { login, password } = req.body;
  const user = await User.findOne({ login: login }).lean();
  if (!user) {
    return res.json({
      status: "error",
      error: "Invalid username or password",
    });
  }

  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user._id, login: user.login }, JWT_SECRET);
    console.log("Token created here:", token);

    return res.json({ status: "ok", data: { token, user: user } });
  }

  return res.json({ status: "error", error: "Invalid username or password" });
};

exports.logout = async function (req, res) {
  try {
    res.clearCookie("token");

    res.redirect("/");
  } catch (error) {
    console.error("Error occurred during logout:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.editProfile = async function (req, res) {
  try {
    const { editName, editAge, login, name } = req.body;

    const user = await User.findOne({
      login: login,
      name: name,
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.name = editName;
    user.age = editAge;

    await user.save();

    res.json({ success: true, message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.profile = async (req, res) => {
  try {
    const { login } = req.user;
    console.log("Login:", login);
    const user = await User.findOne({ login: login }).lean();
    if (!user) {
      console.log("I'm here!!!");
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ user });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.authenticateToken = function (req, res, next) {
  const authHeader = req.headers["authorization"];
  console.log("AuthHeader: ", authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  console.log("Token: ", token);
  if (token == null) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, JWT_SECRET, (err, user) => {
    console.log("Im also here!");

    if (err) return res.sendStatus(403); // Forbidden
    req.user = user;
    next();
  });
  console.log("Im also here!");
};

// Sign Up controller
exports.signUpForm = function (req, res) {
  res.sendFile("C:\\Users\\Алимжан\\Desktop\\node2\\views\\signUp.html");
};

exports.signUp = async function (req, res) {
  console.log(req.body);
  const { login, name, password: plainTextPassword, age } = req.body;
  const password = await bcrypt.hash(plainTextPassword, 10);
  console.log(login, password);

  try {
    const user = new User({
      login: login,
      name: name,
      password: password,
      age: age,
    });
    const response = await user.save();
    console.log("User created successfully: ", response);
  } catch (error) {
    console.error("Error occurred while creating user:", error);
    return res.json({ status: "error" });
  }

  return res.json({ status: "ok" });
};

