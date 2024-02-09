const { Sequelize } = require('sequelize');
const { database, username, password, host } = require('./configVariables');

const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    },
    logging: false
})

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('connected to database')
        return true;
    } catch (error) {
        console.log('unable to connect', error);
        return false;
    }
}



module.exports = {
    sequelize,
    testConnection
}