const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//const customers = require("./models/customerModel");

//console.log(students);
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(cors());

app.get("/", (request, response) => {
  response.status(200).send({
    msg: "Banking API"
  });
});

//Routes
app.use("/customer", require("./routes/customerRouter"));
app.use("/api", require("./routes/transactionRouter"));

app.get("/about", (request, response) => {
  response.status(200).send({
    message: "About this Page "
  });
});

app.get("*", (request, response) => {
  response.status(200).send("404, Page Not Found");
});

app.listen(8080, () => {
  console.log("Server Up");
});
