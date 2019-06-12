var express = require("express");

var router = express.Router();
var taco = require("../models/taco.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/tacos");
});

router.get("/tacos", function(req, res) {
  // express callback response by calling taco.selectAllTaco
  taco.all(function(tacoData) {
    // wrapper for orm.js that using MySQL query callback will return taco_data, render to index with handlebar
    res.render("index", { taco_data: tacoData });
  });
});

// post route -> back to index
router.post("/tacos/create", function(req, res) {
  // takes the request object using it as input for taco.addTaco
  taco.create(req.body.taco_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/tacos/:id", function(req, res) {
  taco.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

module.exports = router;
