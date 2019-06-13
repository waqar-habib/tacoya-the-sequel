module.exports = function(sequelize, DataTypes) {
  var Taco = sequelize.define("tacos", {
    taco_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    picked_up: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  });
  
  return Taco;
};
