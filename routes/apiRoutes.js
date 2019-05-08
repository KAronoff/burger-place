// import our cats model
const cats = require("../models/burgers");

module.exports = app => {

  // GET all cats
  app.get("/api/burgers", function(req, res) {
    cats.findAll()
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // create/POST a new cat
  app.post("/api/burgers", function(req, res) {
    // pass req.body into create method 
    // req.body => {name: "catty cat"}
    console.log('hit post');
    cats.create(req.body)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });


  // get a cat by its id
  app.get("/api/burgers/:id", function(req, res) {
    cats.findById(req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // PUT/update a cat's sleepy to true/false by id
  app.put("/api/burgers/:id", function(req, res) {
    // req.body => {sleepy: true} || {sleepy : false}
    cats.update(req.body.sleepy, req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // DELETE a cat by its id
  app.delete("/api/burgers/:id", function(req, res) {
    cats.remove(req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}
