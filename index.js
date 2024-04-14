const express = require('express');
const handlebars = require("express-handlebars");
const routes = require("./routes")

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.use(routes)

app.listen("5000", () => "App is running on http://localhost:5000/") 