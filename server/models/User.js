// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');


// Initialize Product model (table) by extending off Sequelize's Model class
class User extends Model {
  async checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.user_password);
  }
}

// set up fields and rules for Product model
User.init(
  {
    user_id:{
     type: DataTypes.INTEGER,
     allowNull:false,
     primaryKey:true,
     autoIncrement:true
    
    },
    user_name:{
     type:DataTypes.STRING,
     allowNull:false,
    },
    user_email:{
      type:DataTypes.DECIMAL,
      allowNull:false,
      validate:{
        isEmail:true
      },
    },
    user_password:{
      type:DataTypes.STRING,
      allowNull:false,

    },
  },
  {
    hooks: {
      beforeCreate: async function(newUserData)  {
        newUserData.user_password = await bcrypt.hash(newUserData.user_password, 10);
        return newUserData;
      },
      beforeUpdate: async function(updatedUserData)  {
        updatedUserData.user_password = await bcrypt.hash(updatedUserData.user_password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
