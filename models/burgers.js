// import connection

const conenction = require("./connection");

// reads the entire burger table

const findAll = () => {
  return new Promise ((resolve, reject) => {
    conenction.query("SELECT * FROM burgers", function(err, dbBurgerData){
      if (err){
        // this will throw to a .catch
        return reject(err);
      }
      return resolve(dbBurgerData);
    });
  });
};
// end reading entire burger table

// find a burger by id
const findById = burgerId => {
  return new Promise((resolve, reject) => {
    conenction.query("SELECT * FROM burgers WHERE ?", [burgerId], function(err, dbBurgerData){
      if (err) {
        // this will throw to the .catch
        return reject(err);
      }
      return resolve(dbBurgerData);
    });
  });
};
// end find burger by id 

// start create/insert 
const create = burgerObj => {
  return new Promise ((resolve, reject) => {
    conenction.query("INSERT INTO burgers SET ?", [burgerObj], function(err, dbBurgerData){
      if (err){
        return reject(err)
      }
      return resolve(dbBurgerData);
    });
  });
};
// end create/insert

// start update burgers (set value of devoured to true/false)
const update = (devouredVal, burgerId) => {
  return new Promise ((reject, resolve) => {
    devouredVal = (devouredVal === true)
    ? true : false;

    conenction.query("UPDATE burgers SET devoured = ? WHERE id = ?", [devouredVal, burgerId], function(err, dbBurgerData){
      if (err){
        return reject(err);
      }
      else if (dbBurgerData.changedRows === 0){
        return reject({message: "You might have the wrong ID"});
      }
      else {
        return resolve(dbBurgerData);
      }
    });
  });
};
// end update burgers

// delete from burgers
const remove = (burgerId) => {
  return new Promise ((resolve, reject) => {
    conenction.query("DELETE FROM burgers WHERE id = ?", [burgerId], function(err, dbBurgerData){
      if (err){
        return reject(err);
      }
      else if (dbBurgerData.affectedRows === 0){
        return reject({message: "You might have used the wrong ID"});
      }
      else {
        return resolve(dbBurgersId);
      }
    });
  });
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};