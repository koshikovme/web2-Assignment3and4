const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const app = express();
const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");
const productRouter = require("./routes/productRouter.js");

const bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
// app.use(express.json());

app.use("/users", userRouter);
app.use("/", homeRouter);
app.use("/product", productRouter);
app.use(helmet());

app.use(function (req, res) {
  res.status(404).send("Not Found");
});

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Node", {});
    console.log("GOOD");
    app.listen(3000);
    console.log("Сервер ожидает подключения...");
  } catch (err) {
    return console.log(err);
  }
}
main();

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  console.log("Приложение завершило работу");
  process.exit();
});
