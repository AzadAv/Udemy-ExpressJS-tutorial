const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Aydin_aqil1995", {
  dialect: "mysql",
  host: "localhost",
});


module.exports =sequelize;