"use strict";

const express = require("express");
var exphbs = require('express-handlebars');

let app = express();
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/*', function (req, res) {

  const state = {
    "stateA": "Hello World",
    "stateB": "Good morning"
  };

  res.render("index", {state: `${JSON.stringify(state)}`})
});

app.listen(process.env.PORT || 8080);

