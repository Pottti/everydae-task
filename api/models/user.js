

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        fname:{
            type:DataTypes.STRING
        },
        lname:{
            type:DataTypes.STRING
        },
        sat_exam_date:{
            type:DataTypes.DATE
        },
        target_sat_score:{
            type:DataTypes.INTEGER
        },
    })

    User.associate = models => {
        User.belongsToMany(models.Parent,{through:'id'});
        
    }
    return User
}