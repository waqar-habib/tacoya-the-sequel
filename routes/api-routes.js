var db = require("../models");

module.exports = function(app) {
  //console.log(db);
    app.get("/", function(req, res) {
        db.Tako.findAll().then(function(data) {
            res.render("index", {taco_data: data});
          });
    });
    app.post("/", function(req, res) {
      //console.log(req.body);
        db.Tako.create({
          taco_name: req.body.taco_name
        }).then(function(results) {
          res.redirect("/");
        });    
    });
    app.put("/:id", function(req, res) {
      console.log(req.params);
      console.log(req.body);
        db.Tako.update({
          picked_up:true
        }, 
        {
            where: {id: req.params.id}
        }).then(function(results) {
          res.json("/");
        });
    });

}
