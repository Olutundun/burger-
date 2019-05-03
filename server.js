// dependencies 
const express = require("express");
const handleBars = require('express-handlebars');

// require("dotenv").config();
 var mysql = require("mysql");
// var keys = require("./keys.js");


const PORT = process.env.PORT || 8080;

const app = express();

// serve static content from public directory
app.use(express.static("public"));

// parse middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// use handlebars
app.engine('handlebars', handleBars({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// import routes
const routes = require("./controllers/burger_controller");
app.use(routes);

// initiate server
app.listen(PORT, () => {
  console.log("App listening on http://localhost:" + PORT);
});