var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        db.Taco.findAll({
            
        }).then(function(data) {
            res.render("index", {taco_data: data});
          });
    });
    app.post("/", function(req, res) {
        db.Taco.create({
          taco_name: req.body.name
        }).then(function(results) {
          res.redirect("/");
        });    
    });
    app.put("/:id", function(req, res) {
        db.Taco.update({
          picked_up:req.body.picked_up
        }, 
        {
            where: {id: req.params.id}
        }).then(function(results) {
          res.redirect("/");
        });
    });

}
