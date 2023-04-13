const dbConfig = require('./db.config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexão estabelecida!');
    }).catch((err) => {
        console.log('Erro: ' +err);
    })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}