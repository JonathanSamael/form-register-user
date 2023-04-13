const db = require("./db");

const Contact = db.sequelize.define("agenda", {
    
    contact_ID: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    phone: {
      type: db.Sequelize.INTEGER,
      allowNull: false
    }
});

Contact.sync();

module.exports = Contact
