const  Sequelize  = require('sequelize');
const db = new Sequelize('everydae','postgres','superuser',{
    host:'localhost',
    dialect:'postgres',
    operatorsAliases:false,
    define: {
        timestamps: false
    }
})

module.exports = db

