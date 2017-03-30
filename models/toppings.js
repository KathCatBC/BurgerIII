module.exports = function(sequelize, DataTypes) {
  var Topping = sequelize.define("Topping", {
    // timestamps: false,
    // The email cannot be null, and must be a proper email before creation
    topping_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    topping_type: {
      type: DataTypes.STRING,
      allowNull: false,
    }
 });

  return Topping;

};
