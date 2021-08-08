module.exports = (sequelize, DataTypes) => {
    const Parent = sequelize.define('Parent', {
        fname:{
            type:DataTypes.STRING
        },
        lname:{
            type:DataTypes.STRING
        },
        
    })

    Parent.associate = models => {
        Parent.hasMany(models.User, {
            foreignKey: 'parent_id',
            sourceKey: 'id',
            as:"user"
        });
     
    }

    return Parent
}