const express = require('express');
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");

const routes = require("./routes")

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.engine("hbs", handlebars.engine({ extname: "hbs" }));

app.set("view engine", "hbs");

app.use(routes)

mongoose.connect("mongodb://localhost:27017/course-book")

mongoose.connection.on("connected", () => console.log("Connected to MongoDB"));
mongoose.connection.on("disconnected", () => console.log("Disconnected from MongoDB"));
mongoose.connection.on("error", (error) => console.log(error));
 
app.listen("5000", () => console.log("App is running on http://localhost:5000/"));