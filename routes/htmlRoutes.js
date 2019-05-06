// improting burgers model
const burgers = require("../models/burgers");

// exporting the route definitions as a function
module.exports = (app) => {
  app.get("/", function(req, res){
    // call the find all function
    burgers.
      findAll()
      .then(dbBurgerData => {
        res.render("index", {burgerData: dbBurgerData})
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      })
  })
}