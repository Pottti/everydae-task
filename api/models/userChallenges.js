module.exports = (sequelize, DataTypes) => {
    const userChallenges = sequelize.define('Challenge_users', {
        user_id:{
            type:DataTypes.INTEGER
        },
        start_time:{
            type:DataTypes.DATE
        },
        stopped_time:{
            type:DataTypes.DATE
        },
        completed_at_time:{
            type:DataTypes.DATE
        },

        
    })
    return userChallenges
}