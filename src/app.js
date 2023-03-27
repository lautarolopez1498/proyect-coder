const express = require("express");
const viewRouter = require("./routes/view.router");
const productsRouter = require("./routes/products.router");
const authRouter = require("./routes/auth.router.js");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const { PORT, URL_SERVICE } = require("./utils/constanst");
mongoose.set("strictQuery", false);


// INNIT
const app = express();

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");



// middlewares
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));


// routes
app.use("/", viewRouter);
app.use("/api/products", productsRouter);
app.use("/api/auth", authRouter);



// server y db
app.listen(PORT, () => {
  console.log(`\nServer running on port ${URL_SERVICE}`);

  mongoose.connect(
    "mongodb+srv://lautaro:528276@cluster0.8ag41uo.mongodb.net/?retryWrites=true&w=majority",
    (error) => {
      if (error) {
        console.log("Cannot connect to database: ", +error);
        process.exit();
      } else {
        console.log("\n***** Successful connection! *****\n");
      }
    }
  );
});