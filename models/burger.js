


module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    // timestamps: false,
    // The email cannot be null, and must be a proper email before creation
    burger_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pattie_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    topping: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fries: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    drink: {
      type: DataTypes.STRING,
      allowNull: true,
    },

  },
  {
    classMethods: {
      associate: function(models) {
        Burger.belongsTo(models.Customer, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  } 

  );

  return Burger;

};
